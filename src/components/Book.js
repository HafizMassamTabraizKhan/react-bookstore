import PropTypes from 'prop-types';
import React from 'react';

const Book = ({
  id, title, author, category, onDelete,
}) => (
  <li>
    <p>{title}</p>
    <p>{author}</p>
    <p>{category}</p>
    <button type="button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

Book.defaultProps = {
  category: 'Uncategorized',
};

export default Book;
