import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GoodsTable from 'components/Home/GoodsTable';
import GenieHelp from 'components/Base/Footer/GenieHelp';
import HomeTitle from 'components/Home/HomeTitle';

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <HomeTitle />
        <GoodsTable />
        <GenieHelp genieMsg={this.props.genieMsg} />
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    genieMsg: state.debug.get('genieMsg')
  }),
  null
)(Home);
