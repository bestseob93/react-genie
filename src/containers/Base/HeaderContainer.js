import React, { Component } from 'react';

import Logo from 'components/Base/Header/Logo';
import Menu from 'components/Base/Header/Menu';

class HeaderContainer extends Component {
  render() {
    return (
      <header>
        <section>
          <Logo />
          <Menu />
        </section>
      </header>
    );
  }
}

export default HeaderContainer;