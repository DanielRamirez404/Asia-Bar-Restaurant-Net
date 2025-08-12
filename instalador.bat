@echo off
title Instalador Asia Bar Restaurant
color 0A
setlocal enabledelayedexpansion

:main
cls
echo ====================================
echo   INSTALADOR ASIA BAR RESTAURANT
echo ====================================
echo.

:: Verificar si PowerShell está disponible
where powershell >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    call :show_error "PowerShell no está disponible en este sistema.`n`nEs necesario tener PowerShell instalado para continuar." "Error Crítico"
    exit /b 1
)

set "PROJECT_PATH=%~dp0"
set "APP_PATH=%PROJECT_PATH%app"
set "SERVER_PATH=%PROJECT_PATH%server"
set "XAMPP_PATH=C:\xampp"
set "ERROR_OCCURRED=0"

echo Iniciando proceso de instalación...
echo Ruta del proyecto: %PROJECT_PATH%
echo.

:: Verificar estructura de directorios
call :check_directories
if "%ERROR_OCCURRED%"=="1" goto :error_occurred

:: 1. Instalar dependencias del servidor (backend)
call :check_server
if "%ERROR_OCCURRED%"=="1" goto :error_occurred

:: 2. Instalar dependencias del frontend
call :check_frontend
if "%ERROR_OCCURRED%"=="1" goto :error_occurred

:: 3. Verificar Node.js
call :check_nodejs
if "%ERROR_OCCURRED%"=="1" goto :error_occurred

:: 4. Verificar XAMPP
call :check_xampp

:: 5. Ejecutar setting-variables.py
call :run_setting_variables
if "%ERROR_OCCURRED%"=="1" goto :error_occurred

:: 6. Configurar base de datos con models.sql
call :setup_database
if "%ERROR_OCCURRED%"=="1" goto :error_occurred

goto :installation_complete

:: Función para mostrar mensajes de error
:show_error
set "error_msg=%~1"
set "error_title=%~2"
if "!error_title!"=="" set "error_title=Error"
powershell -command "[System.Reflection.Assembly]::LoadWithPartialName('System.Windows.Forms'); [System.Windows.Forms.MessageBox]::Show([string]'!error_msg!', [string]'!error_title!', [System.Windows.Forms.MessageBoxButtons]::OK, [System.Windows.Forms.MessageBoxIcon]::Error)" >nul
echo [ERROR] !error_title!: !error_msg!
exit /b

:: Función para mostrar mensajes informativos
:show_msg
set "msg=%~1"
set "title=%~2"
if "%~3"=="" (set "icon=Information") else (set "icon=%~3")
powershell -command "[System.Reflection.Assembly]::LoadWithPartialName('System.Windows.Forms'); [System.Windows.Forms.MessageBox]::Show([string]'%msg%', [string]'%title%', [System.Windows.Forms.MessageBoxButtons]::OK, [System.Windows.Forms.MessageBoxIcon]::%icon%)" >nul
exit /b

:: Función para mostrar diálogo de confirmación
:confirm_install
set "msg=%~1"
set "title=%~2"
powershell -command "$ws = New-Object -ComObject WScript.Shell; $result = $ws.Popup([string]'%msg%', 0, [string]'%title%', 4 + 32); exit $result"
set "CONFIRM_RESULT=%ERRORLEVEL%"
exit /b

:: Función para manejar errores
:handle_error
set "ERROR_MSG=%~1"
set "ERROR_TITLE=%~2"
set "ERROR_OCCURRED=1"
call :show_error "!ERROR_MSG!" "!ERROR_TITLE!"
exit /b

:: Verificar estructura de directorios
:check_directories
echo [0/6] Verificando estructura de directorios...
if not exist "%APP_PATH%" (
    call :handle_error "No se encontró la carpeta 'app' en el directorio del proyecto.`n`nAsegúrese de que el instalador esté en la raíz del proyecto." "Estructura de Proyecto"
    exit /b
)
if not exist "%SERVER_PATH%" (
    call :handle_error "No se encontró la carpeta 'server' en el directorio del proyecto.`n`nAsegúrese de que el instalador esté en la raíz del proyecto." "Estructura de Proyecto"
    exit /b
)
echo [OK] Estructura de directorios verificada.
exit /b

:: Verificar dependencias del servidor (backend)
:check_server
echo [1/6] Verificando dependencias del servidor (backend)...
if exist "%SERVER_PATH%\node_modules" (
    call :show_msg "Las dependencias del servidor ya están instaladas." "Dependencias Servidor"
    echo [OK] Dependencias del servidor ya instaladas.
    exit /b
)

call :confirm_install "Las dependencias del servidor no están instaladas.`n`n¿Desea instalarlas ahora?" "Instalar Dependencias Servidor"
if !CONFIRM_RESULT! NEQ 6 (
    call :show_msg "Se omitirá la instalación de las dependencias del servidor." "Instalación Cancelada"
    exit /b
)

echo [1.1/6] Instalando dependencias del servidor...
cd /d "%SERVER_PATH%"
call npm install
if %ERRORLEVEL% NEQ 0 (
    call :handle_error "Error al instalar las dependencias del servidor.`n`nPor favor, verifique su conexión a internet e intente nuevamente." "Error en Instalación"
    exit /b
)

call :show_msg "Las dependencias del servidor se instalaron correctamente." "Instalación Exitosa"
echo [OK] Dependencias del servidor instaladas correctamente.
cd /d "%PROJECT_PATH%"
exit /b

:: Verificar dependencias del frontend
:check_frontend
echo [2/6] Verificando dependencias del frontend...
if exist "%APP_PATH%\node_modules" (
    call :show_msg "Las dependencias del frontend ya están instaladas." "Dependencias Frontend"
    echo [OK] Dependencias del frontend ya instaladas.
    exit /b
)

call :confirm_install "Las dependencias del frontend no están instaladas.`n`n¿Desea instalarlas ahora?" "Instalar Dependencias Frontend"
if !CONFIRM_RESULT! NEQ 6 (
    call :show_msg "Se omitirá la instalación de las dependencias del frontend." "Instalación Cancelada"
    exit /b
)

echo [2.1/6] Instalando dependencias del frontend...
cd /d "%APP_PATH%"
call npm install
if %ERRORLEVEL% NEQ 0 (
    call :handle_error "Error al instalar las dependencias del frontend.`n`nPor favor, verifique su conexión a internet e intente nuevamente." "Error en Instalación"
    exit /b
)

call :show_msg "Las dependencias del frontend se instalaron correctamente." "Instalación Exitosa"
echo [OK] Dependencias del frontend instaladas correctamente.
cd /d "%PROJECT_PATH%"
exit /b

:: Verificar Node.js
:check_nodejs
echo [3/6] Verificando Node.js...
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    call :handle_error "Node.js no está instalado en este sistema.`n`nPor favor, instale Node.js desde https://nodejs.org antes de continuar." "Node.js Requerido"
    exit /b
)
where npm >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    call :handle_error "NPM no está disponible.`n`nPor favor, reinstale Node.js desde https://nodejs.org" "NPM Requerido"
    exit /b
)
echo [OK] Node.js y NPM están disponibles.
exit /b

:: Verificar XAMPP
:check_xampp
echo [4/6] Verificando XAMPP...
if not exist "%XAMPP_PATH%" (
    call :show_msg "XAMPP no se encontró en la ruta predeterminada.`n`nPor favor, asegúrese de tener XAMPP instalado para el servidor de base de datos." "XAMPP No Encontrado" "Warning"
    echo [WARNING] XAMPP no encontrado en la ruta predeterminada.
) else (
    echo [OK] XAMPP encontrado.
)
exit /b

:: Ejecutar configuración de variables de entorno
:run_setting_variables
echo [5/6] Ejecutando configuración de variables de entorno...

:: Verificar si Python está disponible
where python >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    call :show_msg "Python no está instalado.`n`nSe omitirá la configuración automática de variables.`n`nPuede configurar manualmente el archivo .env en la carpeta server." "Python No Encontrado" "Warning"
    echo [WARNING] Python no encontrado, omitiendo configuración automática.
    exit /b
)

:: Verificar si existe el script setting-variables.py
if not exist "%SERVER_PATH%\env\setting-variables.py" (
    echo [WARNING] No se encontró el archivo setting-variables.py
    call :show_msg "No se encontró el archivo setting-variables.py en server\env\.`n`nSe omitirá la configuración automática." "Script No Encontrado" "Warning"
    exit /b
)

call :confirm_install "¿Desea ejecutar la configuración automática de variables de entorno?`n`nEsto le permitirá configurar las credenciales de MySQL." "Configurar Variables"
if !CONFIRM_RESULT! NEQ 6 (
    call :show_msg "Se omitirá la configuración automática de variables." "Configuración Cancelada"
    exit /b
)

echo [5.1/6] Ejecutando setting-variables.py...
cd /d "%SERVER_PATH%\env"
python setting-variables.py
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] Error al ejecutar setting-variables.py
    call :show_msg "Error al ejecutar la configuración automática.`n`nPuede configurar manualmente el archivo .env." "Error en Configuración" "Warning"
) else (
    echo [OK] Configuración de variables completada.
    call :show_msg "Las variables de entorno se configuraron correctamente." "Configuración Exitosa"
)

cd /d "%PROJECT_PATH%"
exit /b

:: Configurar base de datos
:setup_database
echo [6/6] Configurando base de datos...

:: Buscar models.sql en la nueva ubicación
if exist "%SERVER_PATH%\src\models\models.sql" (
    call :confirm_install "Se encontró el archivo de estructura de base de datos.`n`n¿Desea importar la base de datos ahora?`n`n(Asegúrese de que XAMPP esté ejecutándose)" "Configurar Base de Datos"
    if !CONFIRM_RESULT! EQU 6 (
        echo [6.1/6] Importando estructura de base de datos...
        if exist "%XAMPP_PATH%\mysql\bin\mysql.exe" (
            "%XAMPP_PATH%\mysql\bin\mysql.exe" -u root -e "CREATE DATABASE IF NOT EXISTS AsiaBarRestaurant;"
            "%XAMPP_PATH%\mysql\bin\mysql.exe" -u root AsiaBarRestaurant < "%SERVER_PATH%\src\models\models.sql"
            if %ERRORLEVEL% EQU 0 (
                echo [OK] Base de datos importada correctamente.
                call :show_msg "La estructura de base de datos se importó correctamente." "Base de Datos"
            ) else (
                echo [WARNING] Error al importar la base de datos.
                call :show_msg "Error al importar la base de datos.`n`nPuede importarla manualmente más tarde desde phpMyAdmin." "Base de Datos" "Warning"
            )
        ) else (
            echo [WARNING] No se pudo encontrar MySQL en XAMPP.
            call :show_msg "No se pudo encontrar MySQL.`n`nImporte la base de datos manualmente desde phpMyAdmin usando el archivo models.sql." "Base de Datos" "Warning"
        )
    )
) else (
    echo [INFO] No se encontró archivo models.sql en server\src\models\.
    call :show_msg "No se encontró el archivo models.sql.`n`nAsegúrese de tener la estructura de base de datos disponible." "Base de Datos" "Information"
)
exit /b

:: Configurar archivos de entorno
:setup_environment
echo [6/6] Configurando archivos de entorno...

:: Crear .env para el servidor si no existe
if not exist "%SERVER_PATH%\.env" (
    echo [6.1/6] Creando archivo .env para el servidor...
    (
        echo DB_HOST=localhost
        echo DB_USER=root
        echo DB_PASSWORD=
        echo DB_NAME=AsiaBarRestaurant
        echo PORT=3001
        echo JWT_SECRET=your_jwt_secret_here
    ) > "%SERVER_PATH%\.env"
    echo [OK] Archivo .env creado para el servidor.
)

:: Crear .env para el frontend si no existe
if not exist "%APP_PATH%\.env" (
    echo [6.2/6] Creando archivo .env para el frontend...
    (
        echo REACT_APP_API_URL=http://localhost:3001
        echo REACT_APP_NAME=Asia Bar Restaurant
    ) > "%APP_PATH%\.env"
    echo [OK] Archivo .env creado para el frontend.
)

echo [OK] Configuración de entorno completada.
exit /b

:error_occurred
echo.
echo ====================================
echo   ERROR DURANTE LA INSTALACIÓN
echo ====================================
echo.
call :show_error "Se produjo un error durante la instalación.`n`nRevise los mensajes de error anteriores para más detalles." "Error en la Instalación"
pause
exit /b 1

:installation_complete
echo.
echo ====================================
echo   INSTALACIÓN COMPLETADA
echo ====================================
echo.
echo Para iniciar la aplicación:
echo 1. Inicie XAMPP (Apache y MySQL)
echo 2. Abra una terminal en la carpeta 'server' y ejecute: npm start
echo 3. Abra otra terminal en la carpeta 'app' y ejecute: npm start
echo.
echo NOTA: Si no ejecutó setting-variables.py, configure manualmente
echo el archivo .env en la carpeta server con sus credenciales de MySQL.
echo.
call :show_msg "¡La instalación se ha completado exitosamente!`n`nRecuerde iniciar los servicios de XAMPP antes de usar la aplicación.`n`nConsulte las instrucciones en la consola para iniciar la aplicación." "Instalación Completada"
echo.
echo Presione cualquier tecla para salir...
pause >nul
exit /b 0
