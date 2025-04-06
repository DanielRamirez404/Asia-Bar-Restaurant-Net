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
};
