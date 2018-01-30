import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GenieSDK from 'components/GenieSDK';

import { actionCreators as genieActions } from 'ducks/genie.duck';
import { actionCreators as debugActions } from 'ducks/debug.duck';

class Core extends Component {
  render() {
    return (
      <GenieSDK {...this.props} />
    );
  }
}

export default connect(
  state => ({
    genieLoaded: state.genie.get('genieLoaded')
  }),
  dispatch => ({
    GenieActions: bindActionCreators(genieActions, dispatch),
    DebugActions: bindActionCreators(debugActions, dispatch)
  })
)(Core);
