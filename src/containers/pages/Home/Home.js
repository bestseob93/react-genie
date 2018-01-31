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
  constructor(props) {
    super(props);

    this.state = {
      stuffs: this.props.stuffs,
      swapped: false
    };
  }

  async componentDidMount() {
    const { UiActions, GoodsActions } = this.props;
    UiActions.setSpinnerVisible({ visiblity: true });
    try {
      console.log('api called');
      await GoodsActions.getGoodsThumbnails(HOME_DATA);
      setTimeout(() => {
        this.toggleGoodsList(true);
      }, 3000);
    } catch (e) {
      UiActions.setSpinnerVisible({ visiblity: false });
      if(e) console.warn(e);
    }
    
    UiActions.setSpinnerVisible({ visiblity: false });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      stuffs: nextProps.stuffs
    });
  }

  toggleGoodsList = (secondary) => {
    let a = this.state.stuffs;
    console.log(a);
    let oldDataIndex_1 = 7;
    let oldDataIndex_2 = 9;
    let oldDataIndex_3 = 12;
    let oldDataIndex_4 = 14;
    let newDataIndex_1 = 17;
    let newDataIndex_2 = 18;
    let newDataIndex_3 = 19;
    let newDataIndex_4 = 20;
    a.swap(oldDataIndex_1, newDataIndex_1);
    a.swap(oldDataIndex_2, newDataIndex_2);
    a.swap(oldDataIndex_3, newDataIndex_3);
    a.swap(oldDataIndex_4, newDataIndex_4);
    console.log(a);
    if(secondary) {
      this.setState({
        ...this.state,
        stuffs: a,
      });
    } else {
      this.setState({
        ...this.state,

      })
    }
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <MainTitle {...this.props} />
        <GoodsTable goods={this.state.stuffs} swapped={this.state.swapped} />
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
