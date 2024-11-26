import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <ul className="Header__nav-bar">
      <li className="Header__element">145 days to go</li>
      <Link to="./" className="Header__link">
        <li className="Header__element">Tennis Tournament</li>
      </Link>
      <Link to="./history" className="Header__link">
        <li className="Header__element">History</li>
      </Link>
      <li className="Header__element">Years</li>
    </ul>
  );
};

export default Header;
