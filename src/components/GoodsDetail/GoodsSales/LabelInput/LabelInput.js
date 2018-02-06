import React, { Component } from 'react';
import ArrowLeft from 'assets/images/arrow_left.png';
import ArrowRight from 'assets/images/arrow_right.png';

/**
 * GoodsInfo Label with Input Functional Component
 * @param {string} name - label name
 * @param {function} handleChange - handle goods amount
 * @param {number} amount - goods amount
 * @return {React.element}
 */
function LabelInput({ name, handleChange, amount }) {
  return (
    <div className="row">
      <div className="label">
        <span style={{fontSize: '26px', color: 'black'}}>{name}</span>
        <p>(최소 2개 이상)</p>
      </div>
      <div className="infos">
        <img alt="수량 감소" src={ArrowLeft} className="cursor" onClick={(ev) => handleChange(ev, 'minus', amount - 1)} />
        <span style={{color: 'black', fontSize: '26px', display: 'inline-block', padding: '0 16px'}}>{amount}개</span>
        <img alt="수량 증가" src={ArrowRight} className="cursor" onClick={(ev) => handleChange(ev, 'plus', amount + 1)} />
      </div>
    </div>
  );
}

export default LabelInput;
