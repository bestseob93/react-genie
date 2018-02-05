import React from 'react';
import { Link } from 'react-router-dom';
import { borderRadius, isScaleRequired } from 'services/utils';

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
  index,
  itemId,
  goodsCategory,
  goodsNo,
  imgUrl,
  keywordType,
  priorityRank
}) {
  const PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH || '';
  
  /**
   * 1. 이벤트 상품
   * 2 ~ 4. 매장 상품
   * 5 ~. 검색 상품
   * 7. marginLeft 268px
   * 17 ~. 차순위는 애니메이션으로
   */

   console.log('generalItem: ', goodsCategory);
  if(index === 0) {
    return (
      <li className="event goods_box">
        <Link to={`${PUBLIC_PATH}/ShowDetail/${goodsNo}`} className={borderRadius(index)}>
          <div className="event_label">
            <span>이벤트</span>
          </div>
          <p className="goods_title">{goodsCategory}</p>
          <img alt={goodsCategory} src={imgUrl} className={isScaleRequired(imgUrl)} />
        </Link>
      </li>
    );
  } else if(index >= 1 && index <= 3) {
    return (
        <li className="goods_box">
          <Link to={`${PUBLIC_PATH}/ShowDetail/${goodsNo}`} className={borderRadius(index)}>
            <p className="goods_title">{goodsCategory}</p>
            <img alt={goodsCategory} src={imgUrl} className={isScaleRequired(imgUrl)} />
          </Link>
        </li>
    );
  } else if(index === 6) {
    return (
      <li className="goods_box" style={{marginLeft: '268px'}}>
        <Link to={`${PUBLIC_PATH}/ShowDetail/${goodsNo}`} className={borderRadius(index)}>
          <p className="goods_title">{goodsCategory}</p>
          <img alt={goodsCategory} src={imgUrl} className={isScaleRequired(imgUrl)} />
        </Link>
      </li>
    );
  } else if(index > 16) {
    return null;
  } else {
    return (
      <li className="goods_box">
        <Link to={`${PUBLIC_PATH}/ShowDetail/${goodsNo}`} className={borderRadius(index)}>
          <p className="goods_title">{goodsCategory}</p>
          <img alt={goodsCategory} src={imgUrl} className={`${isScaleRequired(imgUrl)}`} />
        </Link>
      </li>
    );
  }
}

export default GoodsItem;