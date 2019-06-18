import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ item }) => (
  <article>
    <h2>{item.title}</h2>
    <p>{item.text}</p>
  </article>
);

Publication.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default Publication;
