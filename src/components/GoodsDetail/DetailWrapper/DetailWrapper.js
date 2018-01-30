import React from 'react';
import GoodsImage from '../GoodsImage';
import ReviewCount from '../ReviewCount';
import ReviewScore from '../ReviewScore';
import Stars from '../Stars';
import GoodsSales from '../GoodsSales';

function DetailWrapper() {
  return (
    <section className="detail_wrapper">
      <div className="detail_inner">
        <div className="image_review_wrapper">
          <GoodsImage />
          <div className="review_inner">
            <Stars />
            <ReviewScore />
            <ReviewCount />
          </div>
        </div>
        <GoodsSales />
      </div>
    </section>
  );
}

export default DetailWrapper;
