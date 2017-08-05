// Action Creator:
// (must still connect it to Redux, by binding it to the BookList Component)

export function selectBook(book) {
    console.log('A book has been selected: ', book.title);
}
