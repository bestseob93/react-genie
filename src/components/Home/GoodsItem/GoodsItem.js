import React from 'react';

function GoodsItem({i}) {
  const borderTopLeft = 'border_t_l';
  const borderTopRight = 'border_t_r';
  const borderBottomLeft = 'border_b_l';
  const borderBottomRight = 'border_b_r';
  
  return (
    <li className={i === 1 || i === 7 ? 'event_goods goods_box' : 'goods_box'}>
      {i}
    </li>
  );
}

export default GoodsItem;