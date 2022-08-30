import { useSelector, useDispatch } from 'react-redux/es/exports';
import Header from './Header';
import InputItems from '../components/InputItems';
import ItemsList from '../components/itemsList';
import { addBook, removeBook } from '../redux/books/books';

function Books() {
  const bookReducer = useSelector((state) => state.bookReducer);
  const Dispatch = useDispatch();

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
