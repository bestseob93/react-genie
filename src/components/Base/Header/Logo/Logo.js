import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';

function Logo() {
  return (
    <h1 className="logo">
      <Link to="/">
        <img src={logo} alt="롯데슈퍼" />
      </Link>
    </h1>
  );
}

export default Logo;
