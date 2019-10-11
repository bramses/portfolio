import React from "react";
import PropTypes from "prop-types";
import styles from "../pages/reading-list.module.css";

const defaultDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac orci ut turpis posuere scelerisque. Etiam vitae lacinia diam, ut tempor erat. Pellentesque at nulla vitae leo blandit porttitor. Suspendisse ultrices porttitor volutpat. Duis mattis augue ut scelerisque maximus. Vivamus orci justo, gravida nec efficitur at, blandit nec ante. Phasellus accumsan, lorem vitae ultricies sodales, nunc lacus faucibus felis, ut cursus lacus metus at ex. Suspendisse non consequat mi, eu consectetur magna. Curabitur at interdum nisi. Aenean sodales est eu nisl elementum, quis volutpat justo eleifend. Aliquam porttitor porta tempor. Aliquam et eleifend enim. Nulla consequat a nisi non condimentum. In in commodo velit, a dapibus dolor. Sed nec felis id quam vestibulum interdum a eu erat.';

const Book = ({
  title, link, imgLink, description = defaultDescription, imgAlt,
}) => (
  <section className="container">
    <hr />
    <h2 className={styles.bookTitle}>{title}</h2>
    <hr />
    <div style={{ padding: "12px" }} className="columns">
      <div className="column is-one-third">
        <img src={imgLink} alt={imgAlt} />
      </div>
      <div className="column is-two-thirds">
        <p>
          {description}
        </p>
        <br />
        <p>
          <a href={link}>Link</a>
        </p>
      </div>
    </div>
  </section>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgAlt: PropTypes.string.isRequired,
};

Book.defaultProps = {
  description: defaultDescription,
};

export default Book;
