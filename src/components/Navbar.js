import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <Link to="/"><h1>Book Store</h1></Link>
    <nav>
      <ul>
        <li><Link to="/">Book</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>

    </nav>
  </header>
);

export default Navbar;
