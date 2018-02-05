import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoodsItem from '../GoodsItem';
import AnimatedItem from '../GoodsItem/AnimatedItem';

class GoodsList extends Component {
  static defaultProps = {
    goods: []
  }

  static propTypes = {
    goods: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
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
      const isFirstAnimation = (i) => {
        if(i === 7 || i === 9 || i === 12 || i === 14) {
          
        // console.log(items[i]);
          return true;
        } else {
          return false;
        }
      }
      
      if(isFirstAnimation(index) && KEYWORD === '검색') {
        return (
          <AnimatedItem
            key={`item-${index}`}
            index={index}
            itemId={id}
            goodsCategory={GOODS_CATEGORY}
            goodsNo={GOODS_NO}
            imgUrl={IMG_URL}
            keywordType={KEYWORD}
            priorityRank={PRIORITY_RANK}
            swapped={this.props.swapped}
          />
        );
      } else {
        return (
          <GoodsItem
            key={`item-${index}`}
            index={index}
            itemId={id}
            goodsCategory={GOODS_CATEGORY}
            goodsNo={GOODS_NO}
            imgUrl={IMG_URL}
            keywordType={KEYWORD}
            priorityRank={PRIORITY_RANK}
          />
        );
      }
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