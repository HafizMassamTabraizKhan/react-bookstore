import BookList from './BookList';
import AddBook from './AddBook';

const RenderBooks = () => (
  <div className="conatiner">
    <BookList />
    <div className="horizontal-divider" />
    <AddBook />
  </div>
);

export default RenderBooks;
