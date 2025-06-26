import { apiAddress } from '../config/api.js'; 
import { routes } from '../config/routes.js';

function getParsedData(res) {
    if (res.length <= 0)
        return [];

    const data = [];

    for (const object of res)
        data.push(Object.values(object));

    return data;
}

export const getTableData = async function(url) {
    const response = fetch(url, { credentials: 'include' });
    let data = [];

    await response
        .then(res => {
            if (!res.ok)
                throw new Error(`HTTP error, Status: ${res.status}`);

            return res.json()
        })
        .then(res => { data = getParsedData(res); })
        .catch(error => console.error("Error: ", error))

    return data;
}

export const onCreate = function(e, tableName, getData, onDone) {
    e.preventDefault(); 

    let data = getData();
    
    fetch(`${apiAddress}/${tableName}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include'
    })
        .then(res => {
            if (res.ok) { 
                    onDone();
                } else {
                    throw new Error(`HTTP error, Status: ${res.status}`);
                }
            })
        .catch(error => alert(error));
};

export const onDelete = function(e, tableName, getID, onDone) {
    e.preventDefault(); 

    let id = getID();
    
    fetch(`${apiAddress}/${tableName}:${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    })
        .then(res => {
            if (res.ok) { 
                    onDone();
                } else {
                    throw new Error(`HTTP error, Status: ${res.status}`);
                }
            })
        .catch(error => alert(error));
};

export const onUpdate = function(e, tableName, getData, getID, onDone) {
    e.preventDefault(); 

    let id = getID();
    let data = getData();
    
    fetch(`${apiAddress}/${tableName}:${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include'
    })
        .then(res => {
            if (res.ok) { 
                    onDone();
                } else {
                    throw new Error(`HTTP error, Status: ${res.status}`);
                }
            })
        .catch(error => alert(error));
};

export function onLogin(e, username, password, navigate) {
    e.preventDefault(); 

    const data = { username: username, password: password }; 
    
    fetch(`${apiAddress}/login`, {
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
    
    fetch(`${apiAddress}/logout`, {
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

