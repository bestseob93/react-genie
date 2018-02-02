import React from 'react';
import GoodsList from '../GoodsList';

function GoodsTable({ goods, swapped }) {
  console.log(goods);
  return (
    <section>
      <GoodsList goods={goods} swapped={swapped} />
    </section>
  );
}

export default GoodsTable;
