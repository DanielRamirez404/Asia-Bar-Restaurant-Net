export function getOrderedObject(object) {
    return Object.keys(object).sort().reduce((ordered, key) => {
        ordered[key] = object[key];
        return ordered;
    }, {});  
}

export function stringArrayToCommaString(array) {
    let string = array[0];

    for (let i = 1; i < array.length; i++) {
        string += ', ' + array[i];
    }

    return string;
}
