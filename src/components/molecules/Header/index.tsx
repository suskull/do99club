import React from 'react';
import { Link } from 'react-router-dom';

const headers = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Posts', link: '/posts' },
];

function Header() {
  return (
    <div className="flex">
      {headers.map((h, index) => (
        <div key={index} className="mr-4">
          <Link to={h.link}>{h.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Header;
