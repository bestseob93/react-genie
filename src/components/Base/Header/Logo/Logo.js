import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';

/**
 * Logo Functional Component (Display Logo)
 * @return {React.element}
 */
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
