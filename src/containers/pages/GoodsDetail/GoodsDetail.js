import React, { Component, Fragment } from 'react';
import MainTitle from 'components/MainTitle';
import DetailWrapper from 'components/GoodsDetail/DetailWrapper';

class GoodsDetail extends Component {
  render() {
    return (
      <Fragment>
        <MainTitle {...this.props} GOODS_NM={'초L 세이브우유 930ML *2입 기획'} />
        <DetailWrapper />
      </Fragment>
    );
  }
}

export default GoodsDetail;
