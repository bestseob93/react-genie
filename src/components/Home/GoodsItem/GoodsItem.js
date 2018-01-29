import React from 'react';

function GoodsItem({i}) {
  return (
    <li className={i === 1 || i === 7 ? 'event_goods goods_box' : 'goods_box'}>
      {i}
    </li>
  );
}

export default GoodsItem;