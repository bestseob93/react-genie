import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Logo from 'components/Base/Header/Logo';
import DeliverStore from 'components/Base/Header/DeliverStore';
import Menu from 'components/Base/Header/Menu';

class HeaderContainer extends Component {
  render() {
    return (
      <header>
        <section className="header_wrapper">
          <Logo />
          <DeliverStore {...this.props} />
          <Menu />
        </section>
      </header>
    );
  }
}

export default connect(
  state => ({
    username: state.genie.get('username'),
    address: state.genie.get('address')
  }),
  dispatch => ({

  })
)(HeaderContainer);