import { serverAddress } from '../constants/constants.js'; 
import { PagePaths } from '../pagination/paths.js';

export function onLogin(e, username, password, navigate) {
    e.preventDefault(); 

    const data = { username: username, password: password }; 
    
    fetch(`${serverAddress}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => alert("¡Bienvenido de vuelta!"))
        .then(res => navigate(PagePaths['Home']))
        .catch(error => alert(error));
}
