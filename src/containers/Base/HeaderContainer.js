import React, { Component } from 'react';

import Logo from 'components/Base/Header/Logo';
import DeliverStore from 'components/Base/Header/DeliverStore';
import Menu from 'components/Base/Header/Menu';

class HeaderContainer extends Component {
  render() {
    return (
      <header>
        <section className="header_wrapper">
          <Logo />
          <DeliverStore />
          <Menu />
        </section>
      </header>
    );
  }
}

export default HeaderContainer;