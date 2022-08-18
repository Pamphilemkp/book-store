import { Link } from 'react-router-dom';

function Header () {

    return (
        <nav>
          <Link to='/'>Books</Link>
          <Link to='/Categories'>Categories</Link>
        </nav>
    )

}

export default Header;