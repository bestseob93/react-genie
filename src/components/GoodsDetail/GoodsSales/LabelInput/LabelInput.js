import React, { Component } from 'react';
import ArrowLeft from 'assets/images/arrow_left.png';
import ArrowRight from 'assets/images/arrow_right.png';

class LabelInput extends Component {
  render() {
    return (
      <div className="row">
        <div className="label">
          <span style={{fontSize: '26px', color: 'black'}}>{this.props.name}</span>
          <p>(최소 2개 이상)</p>
        </div>
        <div className="infos">
          <img alt="수량 감소" src={ArrowLeft} />
          <span style={{color: 'black', fontSize: '26px', display: 'inline-block', verticalAlign: 'top', padding: '0 16px'}}>2개</span>
          <img alt="수량 증가" src={ArrowRight} />
        </div>
      </div>
    );
  }
}

export default LabelInput;
