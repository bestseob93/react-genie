import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoodsItem from '../GoodsItem';

class GoodsList extends Component {
  static defaultProps = {
    goods: []
  }

  static propTypes = {
    goods: PropTypes.object.isRequired
  }

  renderGoodsItem = (items) => {
    
    return items.map((item, index) => {
      const {
        id,
        GOODS_CATEGORY,
        GOODS_NO,
        IMG_URL,
        KEYWORD,
        PRIORITY_RANK
      } = item;
      return (
        <GoodsItem
          key={`item-${index}`}
          itemId={id}
          goodsCategory={GOODS_CATEGORY}
          goodsNo={GOODS_NO}
          imgUrl={IMG_URL}
          keywordType={KEYWORD}
          priorityRank={PRIORITY_RANK}
        />
      );
    });
  }

  render() {
    return (
      <ul className="goods_wrapper">
        { this.renderGoodsItem(this.props.goods) }
      </ul>
    );
  }
}

export default GoodsList;