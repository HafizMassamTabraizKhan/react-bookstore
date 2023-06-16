import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <p id={id}>{title}</p>
      <p>{author}</p>
      <p>{category}</p>
      <button
        type="button"
        onClick={() => {
          // dispatch(remveBook(id));
          dispatch(deleteBook(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
};
Book.defaultProps = {
  title: null,
  author: null,
  category: null,
  id: null,
};

export default Book;
