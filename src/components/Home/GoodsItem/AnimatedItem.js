import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { borderRadius, isScaleRequired } from 'services/utils';

class AnimatedItem extends Component {
  render() {
    const {
      index,
      itemId,
      goodsCategory,
      goodsNo,
      imgUrl,
      keywordType,
      priorityRank
    } = this.props;

    if(this.props.swapped) {
      return null;
    } else {

      return (
        <li className="goods_box">
          <Link to="/" className={borderRadius(index)}>
            <p className="goods_title animated fadeInDown">{goodsCategory}</p>
            <img alt={goodsCategory} src={imgUrl} className={`animated fadeInDown ${isScaleRequired(imgUrl)}`} />
          </Link>
        </li>
      );
    }
  }
}

export default AnimatedItem;