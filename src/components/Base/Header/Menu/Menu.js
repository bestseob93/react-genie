import React from 'react';

import MenuList from './MenuList';

/**
 * Menu Functional Component (navigation wrapper)
 * @return {React.element}
 */
function Menu() {
  return (
    <nav className="navigation">
      <MenuList />
    </nav>
  );
}

export default Menu;
