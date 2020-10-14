import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { brand } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand mr-5">
          {brand}
        </a>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to="/" className="nav-link mr-5">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link mr-5">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link mr-5">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  brand: 'My App',
};
Header.propTypes = {
  brand: PropTypes.string.isRequired,
};

export default Header;
