import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchList extends Component {
  render() {
    return (
      <section className="detail_wrapper">
        <span className="pagination">1/5</span>
        <ul className="search_wrapper">
          <li className="menu_item">
            <Link to="/">
              <div className="triangle-left"></div>
              <span>이전</span>
            </Link>
          </li>
          <li className="search_item_wrapper">
            <div className="num_circle">
              <span>1</span>
            </div>
            <img alt="롯데우유" width="300" height="300" src="http://image.lottesuper.co.kr/34/71/04/1/1047134_1_400.jpg" />
            <p className="goods_rate_price_wrapper">
              <span className="dc_rate"><strong>30</strong>%</span><span className="dc_price"><strong>4900</strong>원</span>
            </p>
            <p className="goods_nm">
              롯데)초L세이브 우유 930ML 2입 기획전
            </p>
          </li>
          <li className="search_item_wrapper">
            <div className="num_circle">
              <span>2</span>
            </div>
            <img alt="롯데우유" width="300" height="300" src="http://image.lottesuper.co.kr/69/59/00/1/1005969_1_400.jpg" />
            <p className="goods_rate_price_wrapper">
              <span className="dc_rate"><strong>30</strong>%</span><span className="dc_price"><strong>4900</strong>원</span>
            </p>
            <p className="goods_nm">
              롯데)초L세이브 우유 930ML 2입 기획전
            </p>
          </li>
          <li className="search_item_wrapper">
            <div className="num_circle">
              <span>3</span>
            </div>
            <img alt="롯데우유" width="300" height="300" src="http://image.lottesuper.co.kr/95/89/00/1/1008995_1_400.jpg" />
            <p className="goods_rate_price_wrapper">
              <span className="dc_rate"><strong>30</strong>%</span><span className="dc_price"><strong>4900</strong>원</span>
            </p>
            <p className="goods_nm">
              롯데)초L세이브 우유 930ML 2입 기획전
            </p>
          </li>
          <li className="search_item_wrapper">
            <div className="num_circle">
              <span>4</span>
            </div>
            <img alt="롯데우유" width="300" height="300" src="http://image.lottesuper.co.kr/47/53/00/1/1005347_1_400.jpg" />
            <p className="goods_rate_price_wrapper">
              <span className="dc_rate"><strong>30</strong>%</span><span className="dc_price"><strong>4900</strong>원</span>
            </p>
            <p className="goods_nm">
              서울) 나 100% 1L
            </p>
          </li>
          <li className="search_item_wrapper">
            <div className="num_circle">
              <span>5</span>
            </div>
            <img alt="롯데우유" width="300" height="300" src="http://image.lottesuper.co.kr/69/80/21/1/1218069_1_400.jpg" />
            <p className="goods_rate_price_wrapper">
              <span className="dc_rate"><strong>30</strong>%</span><span className="dc_price"><strong>4900</strong>원</span>
            </p>
            <p className="goods_nm">
              롯데)초L세이브 우유 930ML 2입 기획전
            </p>
          </li>
          <li className="menu_item">
            <Link to="/">
              <span>다음</span>
              <div className="triangle-right"></div>
            </Link>
          </li>
        </ul>
      </section>
    );
  }
}

export default SearchList;
