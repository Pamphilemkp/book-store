import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="header">
      <div className="nav">
        <h1 className="Bookstore-cms">Bookstore CMS</h1>
        <Link to="/" className="book-link"> Books </Link>
        <Link to="/Categories" className="category-link"> Categories </Link>
      </div>
    </nav>
  );
}

export default Header;
