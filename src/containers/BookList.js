import React, { Component } from 'react';
import { connect } from 'react-redux'; //GLUE
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return (
            this.props.books.map((book) => {
                return (
                    <li
                        key={book.title}
                        onClick={() => this.props.selectBook(book)}
                        className='list-group-item'>
                        {book.title}
                    </li>
                )
            })
        )
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return { //whatever is retured here will be eauql to this.props above
        books: state.books
    }
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shall be passed to all our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a componentn to a container
// It needs to know about this new dispatch method, selectBook;
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
