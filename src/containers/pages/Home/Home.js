import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GoodsTable from 'components/Home/GoodsTable';
import GenieHelp from 'components/Base/Footer/GenieHelp';
import MainTitle from 'components/MainTitle';

import { actionCreators as goodsActions } from 'ducks/goods.duck';

class Home extends Component {
  async componentDidMount() {
    const { GoodsActions } = this.props;
    try {
      console.log('api called');
      await GoodsActions.getGoodsThumbnails();
    } catch (e) {
      if(e) console.warn(e);
    }
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <MainTitle {...this.props} />
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
  dispatch => ({
    GoodsActions: bindActionCreators(goodsActions, dispatch)
  })
)(Home);
