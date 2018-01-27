import React from 'react';
import { Link } from 'react-router-dom';

function MenuItem({ name }) {
  return (
    <li>
      <Link to="/">{ name }</Link>
    </li>
  );
}

export default MenuItem;