/**
 * scrolls to a given location on the page
 * @param {number} fromTop 
 */

export default function scrollToLocation(fromTop, to){
    window.scrollTo({
        top: fromTop ? fromTop - 150 : to,
        left: 0,
        behavior: "smooth"
    });
}

