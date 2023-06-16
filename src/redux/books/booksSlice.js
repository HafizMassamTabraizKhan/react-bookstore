import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CtQyVyKkSoOl0JrYv0NF/books';

export const fetchBook = createAsyncThunk('getbooks', async () => {
  try {
    const res = await axios.get(url);
    const booksArr = Object.keys(res.data).map((key) => ({
      item_id: key,
      ...res.data[key][0],
    }));
    return booksArr;
  } catch (error) {
    return error;
  }
});
export const deleteBook = createAsyncThunk('deletebooks', async (bookId) => {
  await axios.delete(`${url}/${bookId}`);
  return bookId;
});
export const postBook = createAsyncThunk('postbooks', async (book) => {
  try {
    const response = await axios.post(url, book);
    const apiResult = response.data.result;
    return { apiResult, book };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response.data.message);
    } else {
      throw error;
    }
  }
});

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoading: false,
    error: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBook.rejected, (state) => {
        state.isLoading = false;
        state.error = 'error';
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books.forEach((elt) => {
          if (elt.item_id === action.payload) {
            state.books.splice(state.books.indexOf(elt), 1);
          }
        });
      })
      .addCase(postBook.fulfilled, (state, action) => {
        state.books.push(action.payload.book);
      });
  },
});

export const { addBook, remveBook } = booksSlice.actions;
export default booksSlice.reducer;
