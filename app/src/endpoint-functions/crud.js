import { apiAddress } from '../config/api.js'; 

export onCreate = function(e, tableName, getData, onDone) {
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

export onDelete = function(e, tableName, getID, onDone) {
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

export onUpdate = function(e, tableName, getData, getID, onDone) {
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

