/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
// Actions
const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';
const GET_API_DATA = 'book-store/books/GET_API_DATA';

const apiURl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IwD6i2qVfkciDWYsseU9/books';

// initial state
const initialState = [];

// Reducer
export default function bookReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];

    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload);

    case `${GET_API_DATA}/fulfilled`:
      return action.payload;
    default: return state;
  }
}

// Action Creators
export const addBook = createAsyncThunk(ADD_BOOK, async (payload) => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  };
  await fetch(apiURl, options);
  return payload;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  const options = {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ item_id: id }),
  };

  await fetch(`${apiURl}/${id}`, options);
  return id;
});

export const fetchData = createAsyncThunk(GET_API_DATA, async () => {
  const result = await fetch(apiURl);
  const response = await result.json();
  const keys = Object.keys(response);
  const arr = [];
  // eslint-disable-next-line array-callback-return
  keys.map((key) => {
    arr.push({
      item_id: key,
      title: response[key][0].title,
      author: response[key][0].author,
      category: response[key][0].category,
    });
  });
  return arr;
});
