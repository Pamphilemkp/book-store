import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import Header from './Header';
import InputItems from '../components/InputItems';
import ItemsList from '../components/itemsList';
import { addBook, removeBook, fetchData } from '../redux/books/books';
// import { addBook, removeBook } from '../redux/books/books';

const newVal = [];
function Books() {
  const bookReducer = useSelector((state) => state.bookReducer);
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(fetchData());
  }, [Dispatch]);

  const handleChange = (data) => {
    Dispatch(addBook(data));
  };

  const removeItems = (id) => {
    Dispatch(removeBook(id));
  };

  return (
    <div className="container">
      <Header />
      <ItemsList books={bookReducer} bookRemove={removeItems} />
      <InputItems handleChange={handleChange} />
    </div>
  );
}
export default Books;
export { newVal };
