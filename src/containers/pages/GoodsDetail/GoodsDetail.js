import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainTitle from 'components/MainTitle';
import DetailWrapper from 'components/GoodsDetail/DetailWrapper';

import { actionCreators as goodsActions } from 'ducks/goods.duck';

/**
 * GoodsDetail Component
 * @class
 */
class GoodsDetail extends Component {
  async componentDidMount() {
    const { GoodsActions, match } = this.props;
    try {
      await GoodsActions.getGoodsDetail(match.params.goods_no); 
    } catch (e) {
      if(e) console.warn(e);
    }
  }
  
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <MainTitle {...this.props} GOODS_NM={'초L 세이브우유 930ML *2입 기획'} />
        <DetailWrapper />
      </Fragment>
    );
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({
    GoodsActions: bindActionCreators(goodsActions, dispatch)
  })
)(GoodsDetail);
