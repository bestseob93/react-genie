import React, { Component } from 'react';
import ArrowLeft from 'assets/images/arrow_left.png';
import ArrowRight from 'assets/images/arrow_right.png';

class LabelInput extends Component {
  render() {
    console.log(this.props.amount);
    return (
      <div className="row">
        <div className="label">
          <span style={{fontSize: '26px', color: 'black'}}>{this.props.name}</span>
          <p>(최소 2개 이상)</p>
        </div>
        <div className="infos">
          <img alt="수량 감소" src={ArrowLeft} className="cursor" onClick={(ev) => this.props.handleChange(ev, 'minus')} />
          <span style={{color: 'black', fontSize: '26px', display: 'inline-block', padding: '0 16px'}}>{this.props.amount}개</span>
          <img alt="수량 증가" src={ArrowRight} className="cursor" onClick={(ev) => this.props.handleChange(ev, 'plus')} />
        </div>
      </div>
    );
  }
}

export default LabelInput;
