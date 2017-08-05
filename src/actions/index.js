// Action Creator:
// (must still connect it to Redux, by binding it to the BookList Component)

export function selectBook(book) { //book variable chosen by clicking back in the container
    //console.log('A book has been selected: ', book.title);
    // selectBook is an ActionCreator, it needs to reutrn an action:
    // an object with a type property (purpose of the action)
    // and sometimes with a payload: the action undertaken
    return {
        type: 'BOOK_SELECTED', //always in uppercase, usually a string and seperated with keywords
        payload: book
    }
}
