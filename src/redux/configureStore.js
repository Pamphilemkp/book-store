import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
