function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }

    return collection;
}

function myMap(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let newArray = [];

    for (let i = 0; i < values.length; i++) {
        newArray.push(callback(values[i]));
    }

    return newArray;
}

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);

    let startIndex = 0;
    if (acc === undefined) {
        acc = values[0]
        startIndex = 1;
    }

    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }

    return acc;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);

    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i];
        }
    }

    return undefined;
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];

    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            result.push(values[i]);
        }
    }

    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n) {
    if (n === undefined) {

        return array[0];
    } else {

        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
      
      return array[array.length - 1];
    } else {
      
      return array.slice(-n);
    }
  }

function myKeys(object) {
    const keysArray = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keysArray.push(key);
        }
    }
    return keysArray;
}

function myValues(object) {
    const valuesArray = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            valuesArray.push(object[key]);
        }
    }
    return valuesArray;
}