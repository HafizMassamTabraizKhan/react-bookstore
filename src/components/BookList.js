import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remveBook } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(remveBook({ id }));
  };

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default BookList;
