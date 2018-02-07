import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GoodsTable from 'components/Home/GoodsTable';
// import GenieHelp from 'components/Base/Footer/GenieHelp';
import MainTitle from 'components/MainTitle';

import { actionCreators as goodsActions } from 'ducks/goods.duck';
import { actionCreators as uiActions } from 'ducks/ui.duck';

class Home extends Component {
  constructor(props) {
    super(props);

    this.timerId_3 = null;
    this.timerId_5 = null;

    this.state = {
      stuffs: this.props.stuffs.toJS(),
      swapped: false,
      first: true
    };
  }

  async componentDidMount() {
    const { UiActions, GoodsActions } = this.props;
    UiActions.setSpinnerVisible({ visiblity: true });
    try {
      await GoodsActions.getGoodsThumbnails();
      console.time();
      this.timeTravel().then(() => {
        this.toggleGoodsList(true);
        this.setState({
          ...this.state,
          first: false
        });
      });
    } catch (e) {
      UiActions.setSpinnerVisible({ visiblity: false });
      if(e) console.warn(e);
    }
    
    UiActions.setSpinnerVisible({ visiblity: false });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      stuffs: nextProps.stuffs.toJS()
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(!this.state.first) {
      this.timerId_5 = setTimeout(() => {
        this.toggleGoodsList(this.state.swapped);
      }, 5000);
    }
  }

  componentWillUnmount() {
    if(this.timerId_3 || this.timerId_5) {
      clearTimeout(this.timerId_3);
      clearTimeout(this.timerId_5);
    };
  }

  timeTravel = () => {
    const self = this;
    return new Promise((resolve, reject) => {
      self.timerId_3 = setTimeout(() => {
        resolve();
      }, 3000);
    });
  }

  toggleGoodsList = (secondary) => {
    let a = this.state.stuffs;
    const oldIndexes = [7, 9, 12, 14];
    const newIndexes = [17, 18, 19, 20];
    let i = 0;
    let arrLen = oldIndexes.length;
    for(i = 0; i < arrLen; i++) {
      a.swap(oldIndexes[i], newIndexes[i]);
    }

    if(secondary) {
      this.setState({
        ...this.state,
        stuffs: a,
        swapped: true
      });
    } else {
      this.setState({
        ...this.state,
        stuffs: a,
        swapped: false
      });
    }
    console.groupEnd();
  }

  render() {
    return (
      <Fragment>
        <MainTitle {...this.props} />
        <GoodsTable goods={this.state.stuffs} swapped={this.state.swapped} />
        {/* <GenieHelp genieMsg={this.props.genieMsg} /> */}
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    stuffs: state.goods.get('goodsThumbs')
  }),
  dispatch => ({
    UiActions: bindActionCreators(uiActions, dispatch),
    GoodsActions: bindActionCreators(goodsActions, dispatch)
  })
)(Home);
