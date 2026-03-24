

/**
 * count the number of words in a string
 * @param {string} words 
 * @param {number} limit 
 * @returns 
 */

export default function wordCount(words = "", limit = 3){
    return words.split(" ").filter(word => word !== "").length <= limit;
}