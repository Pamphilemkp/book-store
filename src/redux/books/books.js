/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuid } from 'uuid';
// Actions
const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

// initial state
const initialState = [{
  id: uuid(),
  author: 'jack hyver',
  title: ' escape of the prison',
},
{
  id: uuid(),
  author: 'Pierre belmar',
  title: 'impossible investigation',
},
{
  id: uuid(),
  author: 'Jack and rose',
  title: 'Titanic',
},
{
  id: uuid(),
  author: 'Robert Green',
  title: '48 laws of power',
}];

// Reducer
export default function bookReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default: return state;
  }
}

// Action Creators
export function addBook(payload) {
  return {
    type: ADD_BOOK,
    payload,
  };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
