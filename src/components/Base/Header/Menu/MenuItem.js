import React from 'react';
import { Link } from 'react-router-dom';

/**
 * MenuItem Functional Component (display MenuItem list)
 * @param {string} name - menu item ex) 장바구니, 배송현황, 이용안내
 * @return {React.element}
 */
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
