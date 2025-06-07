// Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="logo">TaskPro</h2>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/pending' ? 'active' : ''}>
          <Link to="/pending">Pending</Link>
        </li>
        <li className={location.pathname === '/completed' ? 'active' : ''}>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;