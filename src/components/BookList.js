import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBook, deleteBook, remveBook } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const { books, isLoading, error } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(remveBook({ id }));
    dispatch(deleteBook({ id }));
  };

  useEffect(() => { dispatch(fetchBook()); }, [dispatch]);
  if (isLoading) {
    return (
      <>
        <h1>is loading</h1>
      </>
    );
  }
  if (error) {
    <h1>something went work</h1>;
  }

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
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
