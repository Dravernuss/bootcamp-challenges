import { Link } from 'react-router-dom';
import './_Nav.css';
const Nav = () => {
  return (
    <div className='nav'>
      <Link to="/" className="nav__link">
        Home
      </Link>
      <Link to="/emoji" className="nav__link">
        Emoji
      </Link>
      <Link to="/gif" className="nav__link">
        Gif
      </Link>
      <Link to="/paint" className="nav__link">
        Paint
      </Link>
    </div>
  );
};

export default Nav;
