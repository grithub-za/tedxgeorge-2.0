

/**
 * Sorts an array of objects by a given key
 * @param {aray} array 
 * @param {string} key 
 * @returns 
 */

export default function sortBy(array, key){
    return array.sort((a, b) => a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1);
}