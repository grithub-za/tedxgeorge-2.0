


/**
 * Generate "unique" alpha numeric id
 * @returns GUID
 */

export default function generateID(){ 
    return Math.random().toString(36).substring(7) 
}