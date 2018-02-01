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
      swapped: false,
      first: true
    };
  }

  async componentDidMount() {
    const { UiActions, GoodsActions } = this.props;
    UiActions.setSpinnerVisible({ visiblity: true });
    console.group("componentDidMount");
    try {
      console.log('api called');
      console.log(this.props);
      await GoodsActions.getGoodsThumbnails(HOME_DATA);
      console.time();
      this.timeTravel().then(() => {
        this.toggleGoodsList(true);
        console.log('setTimeout started for 3secs');
        this.setState({
          ...this.state,
          first: false
        });
      });
      console.timeEnd();
      console.log('setTimeout end');
      console.log('await');
    } catch (e) {
      UiActions.setSpinnerVisible({ visiblity: false });
      if(e) console.warn(e);
    }
    
    UiActions.setSpinnerVisible({ visiblity: false });
    console.groupEnd();
  }

  componentWillReceiveProps(nextProps) {
    console.group('componentWillReceiveProps');
    console.time();
    console.log(this.props);
    console.log(nextProps);
    this.setState({
      ...this.state,
      stuffs: nextProps.stuffs
    });
    console.timeEnd();
    console.groupEnd();
  }

  componentDidUpdate(prevProps, prevState) {
    console.group("componentDidUpdate");
    console.log('update started');
    if(!this.state.first) {
      console.log('if 문 들어온 케이스');
      setTimeout(() => {
        this.toggleGoodsList(this.state.swapped);
      }, 5000);
    }
    console.groupEnd();
  }

  timeTravel = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }

  toggleGoodsList = (secondary) => {
    console.group('toggleGoodsList called');
    console.log('toggled: ', secondary);
    let a = this.state.stuffs;
    const oldIndexes = [7, 9, 12, 14];
    const newIndexes = [17, 18, 19, 20];
    let i = 0;
    let arrLen = oldIndexes.length;
    for(i = 0; i < arrLen; i++) {
      console.warn(a[oldIndexes[i]]);
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
    console.group('render');
    console.log(this.state);
    console.groupEnd();
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
    stuffs: state.goods.get('goodsThumbs')
  }),
  dispatch => ({
    UiActions: bindActionCreators(uiActions, dispatch),
    GoodsActions: bindActionCreators(goodsActions, dispatch)
  })
)(Home);
