import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GenieSDK from './GenieSDK';
import SpinnerContainer from './SpinnerContainer';

import { actionCreators as genieActions } from 'ducks/genie.duck';
import { actionCreators as debugActions } from 'ducks/debug.duck';
import { actionCreators as goodsActions } from 'ducks/goods.duck';

import HOME_DATA from 'services/JSONdata';

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
    return [
      <GenieSDK key={1} {...this.props} />,
      <SpinnerContainer key={2} />
    ];
  }
}

export default connect(
  state => ({
    genieLoaded: state.genie.get('genieLoaded')
  }),
  dispatch => ({
    GenieActions: bindActionCreators(genieActions, dispatch),
    DebugActions: bindActionCreators(debugActions, dispatch),
    GoodsActions: bindActionCreators(goodsActions, dispatch)
  })
)(Core);
