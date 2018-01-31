import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GoodsTable from 'components/Home/GoodsTable';
import GenieHelp from 'components/Base/Footer/GenieHelp';
import MainTitle from 'components/MainTitle';

import { actionCreators as goodsActions } from 'ducks/goods.duck';
import { actionCreators as uiActions } from 'ducks/ui.duck';
import HOME_DATA from 'services/JSONdata';

class Home extends Component {

  async componentDidMount() {
    const { UiActions, GoodsActions } = this.props;
    UiActions.setSpinnerVisible({ visiblity: true });
    try {
      console.log('api called');
      await GoodsActions.getGoodsThumbnails(HOME_DATA);
    } catch (e) {
      UiActions.setSpinnerVisible({ visiblity: false });
      if(e) console.warn(e);
    }
    
    UiActions.setSpinnerVisible({ visiblity: false });
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <MainTitle {...this.props} />
        <GoodsTable goods={this.props.stuffs} />
        <GenieHelp genieMsg={this.props.genieMsg} />
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    genieMsg: state.debug.get('genieMsg'),
    stuffs: state.goods.get('goodsThumbs')
  }),
  dispatch => ({
    UiActions: bindActionCreators(uiActions, dispatch),
    GoodsActions: bindActionCreators(goodsActions, dispatch)
  })
)(Home);
