/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuid } from 'uuid';
// Actions
const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

// Reducer
export default function bookReducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default: return state;
  }
}

// Action Creators
export function addBook(author, title) {
  return {
    type: ADD_BOOK,
    payload: {
      id: uuid(),
      author,
      title,
    },
  };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
