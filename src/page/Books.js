import { useState } from 'react';
import Header from './Header';
import InputItems from '../components/InputItems';
import ItemsList from '../components/itemsList';
// import FormHandle from '../components/formHandle'

function Books() {
  const [data, setdata] = useState([]);

  const handleChange = (data) => {
    setdata((prev) => [...prev, data]);
  };

  return (
    <div className="container">
      <Header />
      <ItemsList books={data} />
      <InputItems handleChange={handleChange} />
    </div>
  );
}
export default Books;
