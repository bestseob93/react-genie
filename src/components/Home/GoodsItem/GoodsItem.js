import React from 'react';
import { Link } from 'react-router-dom';

import AnimatedItem from './AnimatedItem';

/**
 * Functional Component for single item of Goods
 * @param {number} itemId index of datas
 * @param {string} goodsCategory category
 * @param {number} goodsNo index of goods
 * @param {string} imgUrl image url
 * @param {string} keywordType lottesuper search keyword type
 * @param {number} priorityRank priority rank
 */
function GoodsItem({
  itemId,
  goodsCategory,
  goodsNo,
  imgUrl,
  keywordType,
  priorityRank
}) {
  const borderRadius = (id) => {
    switch(id) {
      case 1:
        return 'border_t_l';
      case 6:
        return 'border_t_r';
      case 12:
        return 'border_b_l';
      case 17:
        return 'border_b_r';
      default:
        return;
    }
  }

  /* 실제 서비스에선 필요 없음 */
  const isScaleRequired = (url) => {
    let cn = '';
    const regex = /jpg/g;
    if(regex.test(url)) {
      cn += 'img_scale_down';
    }
    return cn;
  }

  const isFirstAnimation = (priorityRank) => {
    if(priorityRank === 4 || priorityRank === 6 || priorityRank === 9 || priorityRank === 11) {
      return true;
    } else {
      return false;
    }
  }

  const PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH || '';
  
  /**
   * 1. 이벤트 상품
   * 2 ~ 4. 매장 상품
   * 5 ~. 검색 상품
   * 7. marginLeft 268px
   * 17 ~. 차순위는 애니메이션으로
   */

  if(itemId === 1) {
    return (
      <li className="event goods_box">
        <Link to={`${PUBLIC_PATH}/detail`} className={borderRadius(itemId)}>
          <div className="event_label">
            <span>이벤트</span>
          </div>
          <p className="goods_title">{goodsCategory}</p>
          <img alt={goodsCategory} src={imgUrl} className={isScaleRequired(imgUrl)} />
        </Link>
      </li>
    );
  } else if(itemId >= 2 && itemId <= 4) {
    return (
        <li className="goods_box">
          <Link to="/" className={borderRadius(itemId)}>
            <p className="goods_title">{goodsCategory}</p>
            <img alt={goodsCategory} src={imgUrl} className={isScaleRequired(imgUrl)} />
          </Link>
        </li>
    );
  } else if(itemId === 7) {
    return (
      <li className="goods_box" style={{marginLeft: '268px'}}>
        <Link to="/" className={borderRadius(itemId)}>
          <p className="goods_title">{goodsCategory}</p>
          <img alt={goodsCategory} src={imgUrl} className={isScaleRequired(imgUrl)} />
        </Link>
      </li>
    )
  } else if(isFirstAnimation(priorityRank)) {
    return (
      <li className="goods_box">
        <Link to="/" className={borderRadius(itemId)}>
          <p className="goods_title animated fadeInDown">{goodsCategory}</p>
          <img alt={goodsCategory} src={imgUrl} className={`animated fadeInDown ${isScaleRequired(imgUrl)}`} />
        </Link>
      </li>
    );
  } else if(priorityRank > 13) {
    return (
      <li className="goods_box hide">
        <Link to="/" className={borderRadius(itemId)}>
          <p className="goods_title animated fadeInDown">{goodsCategory}</p>
          <img alt={goodsCategory} src={imgUrl} className={`animated fadeInDown ${isScaleRequired(imgUrl)}`} />
        </Link>
      </li>
    );
  } else if(itemId > 17) {
    return null;
  }
  return (
    <li className="goods_box">
      <Link to="/" className={borderRadius(itemId)}>
        <p className="goods_title">{goodsCategory}</p>
        <img alt={goodsCategory} src={imgUrl} className={`${isScaleRequired(imgUrl)}`} />
      </Link>
    </li>
  );
}

export default GoodsItem;