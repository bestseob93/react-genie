import React from 'react';

/**
 * GoodsImage Functional Component (Display Goods Image)
 * @param {string} imgUrl - 보여줄 이미지 주소값
 * @param {string} altInfo - 이미지 alt에 들어갈 값
 * @return {React.element} 
 */
function GoodsImage({ imgUrl, altInfo }) {
  return imgUrl === '' ?
          <div className="bar_loader img_ld"></div> :
          <img alt={altInfo} src={imgUrl} />;
}

export default GoodsImage;
