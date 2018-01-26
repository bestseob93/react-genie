import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GigaGenie from 'components/GigaGenie';
import GenieHelp from 'components/Base/Footer/GenieHelp';

import { actionCreators as debugActions } from 'ducks/debug.duck';
import { showButton as homeActions } from 'ducks/home.duck';

class Home extends Component {
  handleChange = (ev) => {
    const { DebugActions } = this.props;
    DebugActions.handleDebugValue({
      value: ev.target.value
    });
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <GigaGenie {...this.props} />
        <GenieHelp genieMsg={this.props.genieMsg} />
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    genieMsg: state.debug.get('genieMsg')
  }),
  dispatch => ({
    DebugActions: bindActionCreators(debugActions, dispatch),
    HomeActions: bindActionCreators(homeActions, dispatch)
  })
)(Home);