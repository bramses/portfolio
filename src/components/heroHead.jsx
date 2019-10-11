import React from 'react';
import PropTypes from 'prop-types';

const SiteHeroHeader = ({ hideLinks }) => (
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1 className="title">Bram Adams</h1>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            {!hideLinks && (
              <a href="/#about" className="navbar-item">
                About
              </a>
            )}
            {!hideLinks && (
              <a href="/#footer" className="navbar-item">
                Contact
              </a>
            )}
            <a href="/reading-list" className="navbar-item">
              Reading List
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

SiteHeroHeader.propTypes = {
  hideLinks: PropTypes.bool,
};

SiteHeroHeader.defaultProps = {
  hideLinks: false,
};

export default SiteHeroHeader;
