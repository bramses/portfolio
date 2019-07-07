import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ to, displayName }) => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href={to}>
          <h1 className="title" style={{ marginTop: '8px' }}>{displayName}</h1>
        </a>
      </div>
    </div>
  </nav>
);

NavBar.propTypes = {
  to: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};

export default NavBar;
