import React from 'react';
import PropTypes from 'prop-types';

const OrgLogo = ({
  to, alt, imgSrc, imgStyle,
}) => (
  <article className="level-item">
    <figure className="image" style={{ height: '128px', width: '128px' }}>
      <a href={to}>
        <img src={imgSrc} style={imgStyle} alt={alt} />
      </a>

    </figure>
  </article>
);

OrgLogo.propTypes = {
  to: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgStyle: PropTypes.shape,
};

OrgLogo.defaultProps = {
  imgStyle: {},
};

export default OrgLogo;
