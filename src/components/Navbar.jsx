import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onFilterOpen }) {
  return (
    <div id="navbar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/feed/world">World</Link></li>
          <li><Link to="/feed/germany">Germany</Link></li>
          <li><Link to="/feed/entertainment">Entertainment</Link></li>
          <li><Link to="/feed/tech">Technology</Link></li>
          <li><Link to="/feed/business">Business</Link></li>
        </ul>
      </nav>
      <div style={{marginRight:30}}>
        <button onClick={onFilterOpen}>
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20M4 5H20M4 19H20" stroke="#4A5568" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          Filter
        </button>
      </div>
    </div>
  );
}

export default Navbar;
