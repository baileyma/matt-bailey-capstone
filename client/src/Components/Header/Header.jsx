import { Link } from 'react-router-dom';
import './Header.scss';
import { useRef, useState, useEffect } from 'react';
import arrowDown from '../../assets/data/arrow_drop_down-24px.svg';

const Header = () => {
  const [yearsDropdownVisible, setYearsDropdownVisible] = useState(false);
  const [drawDropdownVisible, setDrawDropdownVisible] = useState(false);

  // const refDropdown = useRef(null);

  // useEffect(() => {
  //   if (drawDropdownVisible) {
  //     document.addEventListener('mousedown', (event) => {
  //       if (
  //         refDropdown.current &&
  //         !refDropdown.current.contains(event.target)
  //       ) {
  //         setDrawDropdownVisible(false);
  //       }
  //     });
  //   } else {
  //     document.removeEventListener('mousedown', (event) => {
  //       if (
  //         refDropdown.current &&
  //         !refDropdown.current.contains(event.target)
  //       ) {
  //         setDrawDropdownVisible(false);
  //       }
  //     });
  //   }
  // }, [drawDropdownVisible]);

  useEffect(() => {
    window.addEventListener('click', (event) => {
      console.log(event.target);
      if (!event.target.classList.contains('Header__arrow')) {
        setYearsDropdownVisible(false);
      }
    });
    // } else {
    // window.removeEventListener('mousedown', (event) => {
    //   if (
    //     refDropdown.current &&
    //     !refDropdown.current.contains(event.target)
    //   ) {
    //     setYearsDropdownVisible(false);
    //   }
    // });
  }, []);

  return (
    <main className="Header">
      <Link to="/" className="Header__link">
        <h2 className="Header__title">The HT Tennis Tournament</h2>
      </Link>
      <ul className="Header__nav-bar">
        <li className="Header__element Header__element--years">
          <div
            // ref={refDropdown}
            className="Header__dropdown-wrapper"
          >
            <span className="Header__dropdown-trigger">Years</span>
            <img
              onClick={() => {
                setYearsDropdownVisible(!yearsDropdownVisible);
                setDrawDropdownVisible(false);
              }}
              src={arrowDown}
              className="Header__arrow"
            />
          </div>

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
        <li className="Header__element Header__element--years">
          <div
            className="Header__dropdown-wrapper"
            onClick={() => {
              setDrawDropdownVisible(!drawDropdownVisible);
              setYearsDropdownVisible(false);
            }}
          >
            <span className="Header__dropdown-trigger">Set Draw</span>
            <img src={arrowDown} className="Header__arrow" />
          </div>

          {drawDropdownVisible && (
            <div className="Header__dropdown">
              <ul className="Header__dropdown-list">
                <li>
                  <Link className="Header__link-text" to="./enter-draw/2024">
                    2024
                  </Link>
                </li>
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
          <li className="Header__element">History</li>
        </Link>

        <Link to="/head-to-head" className="Header__link">
          <li className="Header__element">H2H</li>
        </Link>
      </ul>
    </main>
  );
};

export default Header;
