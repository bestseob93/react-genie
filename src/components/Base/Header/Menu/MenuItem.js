import React from 'react';
import { Link } from 'react-router-dom';

function MenuItem({ name }) {
  return (
    <li className="menu_item">
      <Link to="/">
        <span>{ name }</span>
      </Link>
    </li>
  );
}

export default MenuItem;