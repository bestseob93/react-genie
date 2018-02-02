import React from 'react';

function GoodsImage({ imgUrl, altInfo }) {
  return imgUrl === '' ?
          <div className="bar_loader img_ld"></div> :
          <img alt={altInfo} src={imgUrl} />;
}

export default GoodsImage;