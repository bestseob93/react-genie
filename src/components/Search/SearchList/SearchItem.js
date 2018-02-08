import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchItem extends Component {

  render() {
    const {
      index,
      GOODS_NM,
      goodsCategory,
      goodsNo,
      imgUrl,
      dcPrice,
      dcRate
    } = this.props;
    console.log(this.props);
    return (
      <li className="search_item_wrapper">
        <div className="num_circle">
          <span>{index}</span>
        </div>
        <img alt={GOODS_NM} width="300" height="300" src={imgUrl} />
        <p className="goods_rate_price_wrapper">
          <span className="dc_rate"><strong>{dcRate}</strong>%</span><span className="dc_price"><strong>{dcPrice}</strong>원</span>
        </p>
        <p className="goods_nm">
          {GOODS_NM}
        </p>
      </li>
    );
  }
}

export default SearchItem;
