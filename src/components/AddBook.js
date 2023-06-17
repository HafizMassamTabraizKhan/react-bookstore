import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: `item${uuidv4()}`,
      title: title.trim(),
      author: author.trim(),
      category: 'fiction',
    };
    dispatch(postBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2 className="form-heading">ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          className="input title-input"
          type="text"
          placeholder="Book name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="input categry-select-box"
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit" className="add-book-btn">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
