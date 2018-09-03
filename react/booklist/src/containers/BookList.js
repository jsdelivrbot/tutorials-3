import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map( (book) => {
			return (
				<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	// Whatever is returned here will show up as props inside BookList
	return {
		books: state.books
	};
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to all our reducers
	return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Export the container
// Promote BookList from a component to container, needs to know about the new dispatch method
// selectBook, make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
