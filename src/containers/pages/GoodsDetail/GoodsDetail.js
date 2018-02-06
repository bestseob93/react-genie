import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainTitle from 'components/MainTitle';
import DetailWrapper from 'components/GoodsDetail/DetailWrapper';

import { actionCreators as goodsActions } from 'ducks/goods.duck';
import { actionCreators as uiActions } from 'ducks/ui.duck';

/**
 * GoodsDetail Component
 * @class
 */
class GoodsDetail extends Component {
  state = {
    amount: 2
  };
  
  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.goods_no !== this.props.match.params.goods_no) {
      this.initialize();
    }
  }

  initialize = async () => {
    const { GoodsActions, UiActions, match } = this.props;
    UiActions.setSpinnerVisible({ visiblity: true });
    try {
      await GoodsActions.getGoodsDetail(match.params.goods_no);
    } catch (e) {
      if(e) console.warn(e);
      UiActions.setSpinnerVisible({ visiblity: false });
    }

    UiActions.setSpinnerVisible({ visiblity: false });
  }
  
  handleChange = (ev, amountInput, amount) => {
    ev.stopPropagation();
    this.setState({
      ...this.state,
      amount
    });

    if(amount < 2) {
      alert("상품은 최소 2개 이상 선택하셔야 합니다.");
      this.setState({
        amount: 2
      });
    }
  }
  
  render() {
    const { goods } = this.props;
    return (
      <Fragment>
        <MainTitle {...this.props} GOODS_NM={goods && goods.get('GOODS_NM')} />
        <DetailWrapper goods={goods} handleChange={this.handleChange} amount={this.state.amount} {...this.props} />
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    goods: state.goods.get('goodsDetail')
  }),
  dispatch => ({
    GoodsActions: bindActionCreators(goodsActions, dispatch),
    UiActions: bindActionCreators(uiActions, dispatch)
  })
)(GoodsDetail);
