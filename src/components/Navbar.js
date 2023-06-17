import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => (
  <header>
    <Link className="logo" to="/"><h1>Bookstore CMS</h1></Link>
    <nav>
      <ul className="nav-links">
        <li className="nav-link active-link"><Link to="/">Books</Link></li>
        <li className="nav-link"><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
    <div className="icon-div"><ImUser /></div>
  </header>
);

export default Navbar;
