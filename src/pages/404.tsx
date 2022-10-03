import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <div>404</div>
      <Link to="/">Home</Link>

      <div>This page does not exist</div>

      <div>The page you are looking for could not be found.</div>
    </div>
  );
}
