import { combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const rootReducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
export default store;
