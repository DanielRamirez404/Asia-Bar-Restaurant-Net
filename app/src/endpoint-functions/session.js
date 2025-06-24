import { serverAddress } from '../constants/constants.js'; 
import { routes } from '../config/routes.js';

export function onLogin(e, username, password, navigate) {
    e.preventDefault(); 

    const data = { username: username, password: password }; 
    
    fetch(`${serverAddress}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include'
    })
        .then(res => {
            if (res.ok) { 
                alert("¡Bienvenido de vuelta!");
                navigate(routes['Inicio']);
            } else {
                throw new Error(`Credenciales invalidas`);
            }
        })
        .catch(error => alert(error));
}

export function onLogout(e, navigate) {
    e.preventDefault(); 
    
    fetch(`${serverAddress}/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    })
        .then(res => {
            if (res.ok) { 
                navigate(routes['Inicio de Sesion']);
            } else {
                throw new Error(`Error al cerrar sesión`);
            }
        })
        .catch(error => alert(error));
}

