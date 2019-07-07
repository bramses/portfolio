import React from 'react';
import PropTypes from 'prop-types';

const Blurb = ({
  header, body, onClick, link,
}) => (
  <article className="message">
    <div className="message-header">
      <p>{header}</p>
      <button className="delete" type="button" id="closeBlurb" onClick={onClick} aria-label="delete" />
    </div>
    <div className="message-body">
      <p>
        <b>{header}</b>
        {' '}
        {body}
      </p>
      <br />
      <p>
        <a href={link}><b>Link</b></a>
      </p>
    </div>
  </article>
);

Blurb.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
};

export default Blurb;
