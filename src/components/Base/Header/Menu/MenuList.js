import React, { Component } from 'react';
import MenuItem from './MenuItem';

class MenuList extends Component {
  // renderItems = () => {
  //   return <MenuItem />;
  // }

  render() {
    const { renderItems } = this;
    return (
      <ul>
        {/* { renderItems() } */}
        <MenuItem name="홈" />
        <MenuItem name="전단상품" />
        <MenuItem name="장바구니" />
        <MenuItem name="이용안내" />
      </ul>
    );
  }
}

export default MenuList;