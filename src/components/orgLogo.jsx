import React from 'react';
import PropTypes from 'prop-types';

const OrgLogo = ({ to, alt, imgSrc }) => (
  <article className="level-item">
    <figure className="image" style={{ height: '128px', width: '128px' }}>
      <a href={to}>
        <img src={imgSrc} alt={alt} />
      </a>

    </figure>
  </article>
);

OrgLogo.propTypes = {
  to: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default OrgLogo;
