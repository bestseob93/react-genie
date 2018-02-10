import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenieSDK from './GenieSDK';
import SpinnerContainer from './SpinnerContainer';
import CartAnimContainer from './CartAnimContainer';

import { actionCreators as genieActions } from 'ducks/genie.duck';
import { actionCreators as debugActions } from 'ducks/debug.duck';
import { actionCreators as goodsActions } from 'ducks/goods.duck';
import { actionCreators as authActions } from 'ducks/auth.duck';
import { actionCreators as uiActions } from 'ducks/ui.duck';

import { HOME_DATA } from 'services/JSONdata';

class Core extends Component {
  async componentDidMount() {
    const { GoodsActions } = this.props;
    try {
      await GoodsActions.setInitialData(HOME_DATA);
    } catch (e) {
      console.warn(e);
    }
  }
  
  render() {
    console.log(this.props);
    return [
      <GenieSDK key={1} {...this.props} />,
      <SpinnerContainer key={2} />,
      <CartAnimContainer key={3} />
    ];
  }
}

export default withRouter(connect(
  state => ({
    logged: state.auth.get('isLogged'),
    address: state.genie.get('address'),
    genieLoaded: state.genie.get('genieLoaded'),
    goods: state.goods.get('goodsThumbs'),
    searchResults: state.goods.get('searchResults')
  }),
  dispatch => ({
    GenieActions: bindActionCreators(genieActions, dispatch),
    DebugActions: bindActionCreators(debugActions, dispatch),
    GoodsActions: bindActionCreators(goodsActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch),
    UiActions: bindActionCreators(uiActions, dispatch)
  })
)(Core));
