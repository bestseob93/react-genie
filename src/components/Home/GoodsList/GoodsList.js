import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GoodsItem from '../GoodsItem';

const NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

class GoodsList extends Component {
  render() {
    const renderBoxes = () => {
      return NUMBER.map((i) => {
        // '#' +  Math.random().toString(16).substr(-6) 랜덤 칼라
        return <GoodsItem i={i} key={i} />
      });
    };

    return (
      <ul className="goods_wrapper">
        {/* { renderBoxes() } */}
        <li className="event goods_box">
          <Link to="/" className="border_t_l">
            <div className="event_label">
              <span>이벤트</span>
            </div>
            <p className="goods_title">100원 상품</p>
            <img alt="100원 상품" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/papertowel.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/">
            <p className="goods_title">전단상품</p>
            <img alt="전단상품" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/catalog_goods.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/">
            <p className="goods_title">자주 사는 상품</p>
            <img alt="자주 사는 상품" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/frequent_goods.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/">
            <p className="goods_title">인기상품</p>
            <img alt="인기상품" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/famous_goods.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/">
            <p className="goods_title">우유</p>
            <img alt="우유" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/milk.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/" className="border_t_r">
            <p className="goods_title">계란</p>
            <img alt="계란" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/eggs.png" />
          </Link>
        </li>
        <li className="goods_box" style={{marginLeft: '268px'}}>
          <Link to="/">
            <p className="goods_title">라면</p>
            <img alt="라면" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/ramen.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/">
            <p className="goods_title">요구르트</p>
            <img alt="요구르트" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/yogrut.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/">
            <p className="goods_title">생수</p>
            <img alt="생수" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/water.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/">
            <p className="goods_title">쌀</p>
            <img alt="쌀" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/rice.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/">
            <p className="goods_title">햇반</p>
            <img alt="햇반" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/instant_rice.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/" className="border_b_l">
            <p className="goods_title">치즈</p>
            <img alt="치즈" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/cheeze.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/">
            <p className="goods_title">커피</p>
            <img alt="커피" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/coffee.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/">
            <p className="goods_title">케찹</p>
            <img alt="케찹" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/ketchup.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/">
            <p className="goods_title">당근</p>
            <img alt="당근" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/carrot.png" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/">
            <p className="goods_title">고등어</p>
            <img alt="고등어" style={{width: '100px', height: '100px'}} src="http://image.lottesuper.co.kr/70/63/31/1/1316370_1_200.jpg" />
          </Link>
        </li>
        <li className="goods_box">
          <Link to="/" className="border_b_r">
            <p className="goods_title">돼지고기</p>
            <img alt="돼지고기" style={{width: '100px', height: '100px'}} src="http://image.lottesuper.co.kr/41/47/01/1/1014741_1_200.jpg" />
          </Link>
        </li>
      </ul>
    );
  }
}

export default GoodsList;