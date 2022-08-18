import './app.css';
import {Routes,Route} from 'react-router-dom';
import Books from './page/Books';
import Categories from './page/Categories';

function App() {
  return (
    <Routes>
      <Route path='/' element={Books} />
      <Route path='/Categories' element={Categories} />
    </Routes>
  );
}

export default App;
