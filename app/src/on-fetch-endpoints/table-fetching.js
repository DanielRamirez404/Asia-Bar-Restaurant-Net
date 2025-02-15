function getParsedData(res) {
    if (res.length <= 0)
        return [];

    const data = [];

    for (const object of res)
        data.push(Object.values(object));

    return data;
}

export const getTablaData = async function(url, setter) {
    const response = fetch(url);
    
    response
        .then(res => res.json())
        .then(res => setter(getParsedData(res)))
};