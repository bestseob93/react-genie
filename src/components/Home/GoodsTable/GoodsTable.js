import React from 'react';
import GoodsList from '../GoodsList';

function GoodsTable({ goods, swapped }) {
  return (
    <section>
      <GoodsList goods={goods} swapped={swapped} />
    </section>
  );
}

export default GoodsTable;
