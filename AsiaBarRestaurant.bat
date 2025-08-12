@echo off
title Iniciando Asia Bar Restaurant
color 0A
echo Iniciando Asia Bar Restaurant...
echo.

REM Ruta al directorio del proyecto
set "PROJECT_PATH=%~dp0"
set "SERVER_PATH=%PROJECT_PATH%server\src"
set "APP_PATH=%PROJECT_PATH%app"

echo Verificando Node.js...
node -v >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Node.js no está instalado o no está en el PATH.
    echo Por favor, instala Node.js desde https://nodejs.org/
    pause
    exit /b 1
)

echo Iniciando servidor...
cd /d "%SERVER_PATH%"
start "Servidor Asia Bar" cmd /k "echo Iniciando servidor con 'npm run dev'... && npm run dev"
timeout /t 10 /nobreak >nul

echo Iniciando interfaz de usuario...
cd /d "%APP_PATH%"
start "Frontend Asia Bar" cmd /k "echo Iniciando interfaz con 'npm start'... && npm start"

echo.
echo Ambas aplicaciones se están iniciando...
echo - El servidor se ejecuta con 'npm run dev'
echo - La interfaz se abrirá automáticamente en tu navegador
echo.
echo Presiona cualquier tecla para cerrar esta ventana...
pause >nul
