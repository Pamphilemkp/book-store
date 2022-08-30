import { combinedReducers, ConfigureStore } from '@testing-library/react';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combinedReducers({
  bookReducer,
  categoriesReducer,
});

const store = ConfigureStore(rootReducer);
export default store;
