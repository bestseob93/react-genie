import React from 'react';
const NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

function GoodsTable() {
  const renderBoxes = () => {
    return NUMBER.map((i) => {
      // '#' +  Math.random().toString(16).substr(-6) 랜덤 칼라
      return <div className="goods_box" key={i}><p>{i}</p></div>;
    });
  };

  return (
    <section className="goods_wrapper">
      { renderBoxes() }
    </section>
  );
}

export default GoodsTable;