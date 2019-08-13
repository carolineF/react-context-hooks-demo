import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Vermouth Reading List</h1>
      <p>currently you have {books.length} books to get throught...</p>
    </div>
  );
}

export default Navbar;