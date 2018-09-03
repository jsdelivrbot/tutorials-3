import { combineReducers } from 'redux';
import BooksReducer from './books.js';
import ActiveBookReducer from './activeBook.js';

// Mapping of our state
// Adds a key 'books' to our global application state that has an array of books as its value
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
