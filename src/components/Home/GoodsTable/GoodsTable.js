import React from 'react';
import GoodsList from '../GoodsList';

function GoodsTable({ goods }) {
  return (
    <section>
      <GoodsList goods={goods} />
    </section>
  );
}

export default GoodsTable;
