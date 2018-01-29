import React, { Component } from 'react';
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
        <li className="event goods_box"><p className="border_t_l">1</p></li>
        <li className="goods_box"><p>2</p></li>
        <li className="goods_box"><p>3</p></li>
        <li className="goods_box"><p>4</p></li>
        <li className="goods_box"><p>5</p></li>
        <li className="goods_box"><p className="border_t_r">6</p></li>
        <li className="goods_box" style={{marginLeft: '268px'}}><p>7</p></li>
        <li className="goods_box"><p>8</p></li>
        <li className="goods_box"><p>9</p></li>
        <li className="goods_box"><p>10</p></li>
        <li className="goods_box"><p>11</p></li>
        <li className="goods_box"><p className="border_b_l">12</p></li>
        <li className="goods_box"><p>13</p></li>
        <li className="goods_box"><p>14</p></li>
        <li className="goods_box"><p>15</p></li>
        <li className="goods_box"><p>16</p></li>
        <li className="goods_box"><p className="border_b_r">17</p></li>
      </ul>
    );
  }
}

export default GoodsList;