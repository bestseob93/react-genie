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
  
  handleChange = (ev, amountInput) => {
    ev.preventDefault();
    if(this.state.amount < 2) {
      this.setState({
        amount: 2
      });
      alert("최소 2개 이상 선택하셔야 합니다.");
    } else {
      if(amountInput === 'plus') {
        this.setState({
          amount: this.state.amount + 1
        });
      } else if(amountInput === 'minus') {
        this.setState({
          amount: this.state.amount - 1
        });
      }
    }
  }
  
  render() {
    console.log(this.props);
    const { goods } = this.props;
    return (
      <Fragment>
        <MainTitle {...this.props} GOODS_NM={goods && goods.get('GOODS_NM')} />
        <DetailWrapper goods={goods} handleChange={this.handleChange} amount={this.state.amount} />
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
