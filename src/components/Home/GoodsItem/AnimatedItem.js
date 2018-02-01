import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { borderRadius, isScaleRequired } from 'services/utils';

class AnimatedItem extends Component {
  componentDidMount() {
    this.goodTitle.addEventListener('animationend', () => {
      this.goodTitle.classList.remove("animated");
      this.goodTitle.classList.remove("fadeInDown");
    });
    this.goodImage.addEventListener('animationend', () => {
      this.goodImage.classList.remove("animated");
      this.goodImage.classList.remove("fadeInDown");
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // this.setState({
    //   swappedValue: this.props.swapped
    // });
  }

  componentWillUnmount() {
    console.group("AnimatedItem: componentWillUnmount");
    console.groupEnd();
  }

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

    const PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH || '';
    
    return (
      <li className="goods_box">
        <Link to={`${PUBLIC_PATH}/GoodsDetail/${goodsNo}`} className={borderRadius(index)}>
          <p
            ref={(goodTitle) => this.goodTitle = goodTitle}
            className={`animated fadeInDown ${isScaleRequired(imgUrl, true) === 'a' ? 'a' : ''} goods_title`}
          >{goodsCategory}
          </p>
          <img
            ref={(goodImage) => this.goodImage = goodImage}
            alt={goodsCategory}
            src={imgUrl}
            className={`animated fadeInDown ${isScaleRequired(imgUrl, true) === 'a' ? 'img_scale_down' : ''}`}
          />
        </Link>
      </li>
    );
  }
}

export default AnimatedItem;