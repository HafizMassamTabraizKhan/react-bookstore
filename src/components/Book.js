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
      <div className="book">
        <div className="book-content">
          <div className="book-detail">
            <h4 className="category">{category}</h4>
            <h2 id={id} className="title">{title}</h2>
            <p className="author">{author}</p>
            <div className="buttons">
              <button
                className="book-btn"
                type="button"
              >
                Comments
              </button>
              <div className="divider" />
              <button
                className="book-btn"
                type="button"
                onClick={() => {
                  dispatch(deleteBook(id));
                }}
              >
                Remove
              </button>
              <div className="divider" />
              <button
                className="book-btn"
                type="button"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="progress-section">
            <div className="circular-progress-bar-container">
              <div className="circular-progress-bar" />
            </div>
            <div className="progress-data">
              <p className="completeion-percent">64%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="chapter-container">
              <div>
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">Chapter 17</p>
              </div>
              <div>
                <div className="btn-blue">UPDATE-PROGRESS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
