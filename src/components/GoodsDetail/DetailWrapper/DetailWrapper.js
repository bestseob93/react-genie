import React from 'react';
import GoodsImage from '../GoodsImage';
import ReviewCount from '../ReviewCount';
import ReviewScore from '../ReviewScore';
import Stars from '../Stars';
import GoodsSales from '../GoodsSales';

function DetailWrapper({ goods }) {
  console.log(goods);
  if(!goods) {
    return (
      <section className="detail_wrapper">
        <div className="animated-background">
          <div className="bar_loader">
            <div className="bg-masker header-top"></div>
            <div className="bg-masker first-padding-top"></div>
            <div className="bg-masker row-first"></div>
            <div className="bg-masker row-first-full"></div>
            <div className="bg-masker second-padding-top"></div>
            <div className="bg-masker row-second"></div>
            <div className="bg-masker row-second-full"></div>
            <div className="bg-masker third-padding-top"></div>
            <div className="bg-masker row-third"></div>
            <div className="bg-masker row-third-full"></div>
            <div className="bg-masker four-padding-top"></div>
            <div className="bg-masker row-four"></div>
            <div className="bg-masker row-four-full"></div>
            <div className="bg-masker five-padding-top"></div>
            <div className="bg-masker row-five"></div>
            <div className="bg-masker row-five-full"></div>
            <div className="bg-masker footer-top"></div>
            <div className="bg-masker star-left"></div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="detail_wrapper">
        <div className="detail_inner">
          <div className="image_review_wrapper">
            <GoodsImage imgUrl={goods.get('IMG_URL')} altInfo={goods.get('GOODS_NM')} />
            <div className="review_inner">
              <Stars score={goods.get('REVIEW_SCORE')} />
              <ReviewScore score={goods.get('REVIEW_SCORE')} />
              <ReviewCount count={goods.get('TOP_REVIEW_CNT')} />
            </div>
          </div>
          <GoodsSales
            price={goods.get('LIST_PRICE')}
            dcRate={goods.get('DC_RATE')}
            origin={goods.get('ORIGIN')}
            company={goods.get('COMPANY')}
            spec={goods.get('GOODS_SPEC')}
          />
        </div>
      </section>
    );
  }
}

export default DetailWrapper;
