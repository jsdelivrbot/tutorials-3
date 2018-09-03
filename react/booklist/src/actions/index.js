export function selectBook(book) {
	// selectBook is an action creater, it needs to return an action:
	// An object with a 'type' property and sometimes a payload
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}
