import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoodsItem from '../GoodsItem';
import AnimatedItem from '../GoodsItem/AnimatedItem';

class GoodsList extends Component {
  static defaultProps = {
    goods: []
  }

  // componentDidMount() {
  //   const { GoodsActions } = this.props;
  //   setTimeout(() => {
  //     GoodsActions.toggleDatas();
  //   }, 3000);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { GoodsActions } = this.props;
  //   setTimeout(() => {
  //     GoodsActions.toggleDatas();
  //   });
  // }

  static propTypes = {
    goods: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
  }

  renderGoodsItem = (items) => {
    console.log(items);
    return items.map((item, index) => {
      const {
        id,
        GOODS_CATEGORY,
        GOODS_NO,
        IMG_URL,
        KEYWORD,
        PRIORITY_RANK
      } = item;
      console.log(index + GOODS_CATEGORY);
      const isFirstAnimation = (i) => {
        if(i === 7 || i === 9 || i === 12 || i === 14) {
          
        // console.log(items[i]);
          return true;
        } else {
          return false;
        }
      }
      
      if(isFirstAnimation(index) && KEYWORD === '검색') {
        
        console.log(items[index]);
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
    console.log(this.props);
    return (
      <ul className="goods_wrapper">
        { this.renderGoodsItem(this.props.goods) }
      </ul>
    );
  }
}

export default GoodsList;