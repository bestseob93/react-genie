import React, { Component } from 'react';
import MenuItem from './MenuItem';

class MenuList extends Component {
  // renderItems = () => {
  //   return <MenuItem />;
  // }

  render() {
    return (
      <ul className="menu_list">
        {/* { renderItems() } */}
        <MenuItem name="장바구니" />
        <MenuItem name="배송현황" />
        <MenuItem name="이용안내" />
      </ul>
    );
  }
}

export default MenuList;