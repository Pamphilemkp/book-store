/* eslint-disable react/button-has-type */
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { checkStatus } from '../redux/categories/categories';
import Header from './Header';

function Categories() {
  const categoriesReducer = useSelector((state) => state.categoriesReducer);
  const Dispatch = useDispatch();

  const displayStatus = () => {
    Dispatch(checkStatus());
  };
  return (
    <div className="categories">
      <Header />
      <h2>{categoriesReducer}</h2>
      <button className="check-status progress-color" onClick={displayStatus}>Check status</button>
    </div>
  );
}

export default Categories;
