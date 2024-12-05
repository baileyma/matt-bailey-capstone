import { Link } from 'react-router-dom';
import './Header.scss';
import { useState } from 'react';

const Header = () => {
  const [yearsDropdownVisible, setYearsDropdownVisible] = useState(false);
  const [drawDropdownVisible, setDrawDropdownVisible] = useState(false);

  return (
    <main className="Header">
      <Link to="/2024" className="Header__link">
        <h2 className="Header__title">The HT Tennis Tournament</h2>
      </Link>
      <ul className="Header__nav-bar">
        <li className="Header__element Header__element--years">
          <span
            className="Header__dropdown-trigger"
            onClick={() => {
              setDrawDropdownVisible(!drawDropdownVisible);
              setYearsDropdownVisible(false);
            }}
          >
            Enter Draw ⌄ ˄
          </span>

          {drawDropdownVisible && (
            <div className="Header__dropdown">
              <ul className="Header__dropdown-list">
                <li>
                  <Link className="Header__link-text" to="./enter-draw/2025">
                    2025
                  </Link>
                </li>
                <li>
                  <Link className="Header__link-text" to="./enter-draw/2026">
                    2026
                  </Link>
                </li>
                <li>
                  <Link className="Header__link-text" to="./enter-draw/2027">
                    2027
                  </Link>
                </li>
                <li>
                  <Link className="Header__link-text" to="./enter-draw/2028">
                    2028
                  </Link>
                </li>
                <li>
                  <Link className="Header__link-text" to="./enter-draw/2029">
                    2029
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <Link to="./history" className="Header__link">
          <li className="Header__element">Honours Board</li>
        </Link>

        <li className="Header__element Header__element--years">
          <span
            className="Header__dropdown-trigger"
            onClick={() => {
              setYearsDropdownVisible(!yearsDropdownVisible);
              setDrawDropdownVisible(false);
            }}
          >
            Years ⌄ ˄
          </span>

          {yearsDropdownVisible && (
            <div className="Header__dropdown">
              <ul className="Header__dropdown-list">
                <li>
                  <Link className="Header__link-text" to="./2024">
                    2024
                  </Link>
                </li>
                <li>
                  <Link className="Header__link-text" to="./2025">
                    2025
                  </Link>
                </li>
                <li>
                  <Link className="Header__link-text" to="./2026">
                    2026
                  </Link>
                </li>
                <li>
                  <Link className="Header__link-text" to="./2027">
                    2027
                  </Link>
                </li>
                <li>
                  <Link className="Header__link-text" to="./2028">
                    2028
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <Link to="/head-to-head" className="Header__link">
          <li className="Header__element">Head to Head</li>
        </Link>
      </ul>
    </main>
  );
};

export default Header;
