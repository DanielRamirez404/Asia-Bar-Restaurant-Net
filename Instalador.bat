@echo off
title Instalador Asia Bar Restaurant
color 0A
setlocal enabledelayedexpansion

:check_admin
:: Verificar si se está ejecutando como administrador
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
if '%errorlevel%' NEQ '0' (
    echo Solicitando permisos de administrador...
    set "vbsFile=%temp%\elevate_%random%.vbs"
    echo Set UAC = CreateObject^("Shell.Application"^) > "%vbsFile%"
    echo UAC.ShellExecute "cmd.exe", "/c ""%~f0""", "", "runas", 1 >> "%vbsFile%"
    start "" "%vbsFile%"
    exit /b
)

:main
cls
echo ====================================
echo   INSTALADOR ASIA BAR RESTAURANT
echo ====================================
echo.

set "PROJECT_PATH=%~dp0"
set "APP_PATH=%PROJECT_PATH%app"
set "SERVER_PATH=%PROJECT_PATH%server"
set "XAMPP_PATH=C:\xampp"

:: Función para mostrar mensajes emergentes
:show_msg
set "msg=%~1"
set "title=%~2"
powershell -command "& {[System.Reflection.Assembly]::LoadWithPartialName('System.Windows.Forms'); [System.Windows.Forms.MessageBox]::Show('!msg!','!title!',[System.Windows.Forms.MessageBoxButtons]::OK, [System.Windows.Forms.MessageBoxIcon]::Information)}" >nul
exit /b

:: Función para mostrar diálogo de confirmación
:confirm_install
set "msg=%~1"
set "title=%~2"
powershell -command "$ws = New-Object -ComObject WScript.Shell; $result = $ws.Popup('!msg!', 0, '!title!', 4 + 32); exit $result"
set "CONFIRM_RESULT=%ERRORLEVEL%"
exit /b

:check_frontend
echo [1/5] Verificando dependencias del frontend...
if exist "%APP_PATH%\node_modules" (
    call :show_msg "Las dependencias del frontend ya están instaladas." "Dependencias Frontend"
    echo [OK] Dependencias del frontend ya instaladas.
    goto :check_server
) else (
    call :confirm_install "Las dependencias del frontend no están instaladas.`n`n¿Desea instalarlas ahora?" "Instalar Dependencias Frontend"
    if !CONFIRM_RESULT! EQU 6 (
        echo [1.1/5] Instalando dependencias del frontend...
        cd /d "%APP_PATH%"
        call npm install
        if %ERRORLEVEL% EQU 0 (
            call :show_msg "Las dependencias del frontend se instalaron correctamente." "Instalación Exitosa"
            echo [OK] Dependencias del frontend instaladas correctamente.
        ) else (
            call :show_msg "Error al instalar las dependencias del frontend." "Error"
            echo [ERROR] Error al instalar dependencias del frontend
        )
    ) else (
        echo [INFO] Instalación de dependencias del frontend omitida por el usuario.
    )
)
echo.

:check_server
echo [2/5] Verificando dependencias del servidor...
if exist "%SERVER_PATH%\node_modules" (
    call :show_msg "Las dependencias del servidor ya están instaladas." "Dependencias Servidor"
    echo [OK] Dependencias del servidor ya instaladas.
    goto :check_xampp
) else (
    call :confirm_install "Las dependencias del servidor no están instaladas.`n`n¿Desea instalarlas ahora?" "Instalar Dependencias Servidor"
    if !CONFIRM_RESULT! EQU 6 (
        echo [2.1/5] Instalando dependencias del servidor...
        cd /d "%SERVER_PATH%"
        call npm install
        if %ERRORLEVEL% EQU 0 (
            call :show_msg "Las dependencias del servidor se instalaron correctamente." "Instalación Exitosa"
            echo [OK] Dependencias del servidor instaladas correctamente.
        ) else (
            call :show_msg "Error al instalar las dependencias del servidor." "Error"
            echo [ERROR] Error al instalar dependencias del servidor
        )
    ) else (
        echo [INFO] Instalación de dependencias del servidor omitida por el usuario.
    )
)
echo.

:check_xampp
echo [3/5] Verificando XAMPP...
if exist "%XAMPP_PATH%\xampp-control.exe" (
    call :show_msg "XAMPP está instalado en %XAMPP_PATH%" "XAMPP Instalado"
    echo [OK] XAMPP está instalado.
    start "" "%XAMPP_PATH%\xampp-control.exe"
    call :show_msg "Por favor, asegúrese de iniciar los servicios Apache y MySQL en XAMPP." "Iniciar Servicios XAMPP"
) else (
    call :confirm_install "XAMPP no está instalado.`n`n¿Desea descargar e instalar XAMPP ahora?" "Instalar XAMPP"
    if !CONFIRM_RESULT! EQU 6 (
        echo [3.1/5] Descargando XAMPP...
        powershell -Command "(New-Object System.Net.WebClient).DownloadFile('https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.4/xampp-windows-x64-8.2.4-0-VS16-installer.exe/download', 'xampp-installer.exe')"
        if %ERRORLEVEL% EQU 0 (
            echo [3.2/5] Instalando XAMPP...
            start /wait "" "xampp-installer.exe"
            del "xampp-installer.exe"
            call :show_msg "XAMPP se ha instalado correctamente. Por favor, inicie los servicios Apache y MySQL." "Instalación Completada"
        else
            call :show_msg "No se pudo descargar XAMPP. Por favor, instálelo manualmente." "Error"
        fi
    ) else (
        echo [INFO] Instalación de XAMPP omitida por el usuario.
    )
)
echo.

:check_node
echo [4/5] Verificando Node.js...
node -v >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    for /f "tokens=*" %%a in ('node -v') do set NODE_VERSION=%%a
    call :show_msg "Node.js está instalado (Versión: %NODE_VERSION%)" "Node.js Instalado"
    echo [OK] Node.js está instalado (Versión: %NODE_VERSION%)
    goto :configure_env
) else (
    call :confirm_install "Node.js no está instalado.`n`n¿Desea descargar e instalar Node.js ahora?" "Instalar Node.js"
    if !CONFIRM_RESULT! EQU 6 (
        echo [4.1/5] Descargando Node.js...
        powershell -Command "(New-Object System.Net.WebClient).DownloadFile('https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi', 'node-installer.msi')"
        if %ERRORLEVEL% EQU 0 (
            echo [4.2/5] Instalando Node.js...
            start /wait msiexec /i "node-installer.msi" /qn
            del "node-installer.msi"
            setx PATH "%PATH%;C:\Program Files\nodejs" /M
            call :show_msg "Node.js se ha instalado correctamente." "Instalación Exitosa"
            echo [OK] Node.js instalado correctamente.
        ) else (
            call :show_msg "No se pudo descargar Node.js. Por favor, instálelo manualmente." "Error"
        )
    ) else (
        echo [INFO] Instalación de Node.js omitida por el usuario.
    )
)
echo.

:configure_env
echo [5/5] Configurando variables de entorno...
cd /d "%SERVER_PATH%\env"
if exist "setting-variables.py" (
    python "setting-variables.py"
    if %ERRORLEVEL% EQU 0 (
        call :show_msg "Las variables de entorno se configuraron correctamente." "Configuración Exitosa"
        echo [OK] Variables de entorno configuradas correctamente.
    ) else (
        call :show_msg "No se pudo ejecutar el script de configuración. Por favor, ejecútelo manualmente." "Error"
        echo [ERROR] No se pudo configurar las variables de entorno.
    )
) else (
    call :show_msg "No se encontró el archivo de configuración: setting-variables.py" "Error"
    echo [ERROR] Archivo de configuración no encontrado.
)

echo.
echo ====================================
echo   INSTALACIÓN COMPLETADA
echo ====================================
echo.
echo Resumen de la instalación:
echo - Dependencias del frontend: Completado
echo - Dependencias del servidor: Completado
echo - XAMPP: %XAMPP_STATUS%
echo - Node.js: %NODE_STATUS%
echo - Configuración: Completado
echo.
echo Pasos adicionales:
echo 1. Asegúrese de que los servicios de XAMPP (Apache y MySQL) estén en ejecución
echo 2. Inicie el servidor con: cd server && npm start
echo 3. Inicie el frontend con: cd app && npm start
echo.
pause
exit /b