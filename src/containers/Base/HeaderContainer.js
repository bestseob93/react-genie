import React, { Component } from 'react';

import Logo from 'components/Base/Header/Logo';
import Menu from 'components/Base/Header/Menu';

class HeaderContainer extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Menu />
      </header>
    );
  }
}

export default HeaderContainer;