import React, { Component } from 'react';
import SpeakGuideItem from '../SpeakGuideItem';

class SpeakGuideList extends Component {
  render() {
    return (
      <ul className="guide_wrapper">
        <SpeakGuideItem desc="100원 상품 보여줘" />
        <div className="space"></div>
        <SpeakGuideItem desc="우유 찾아줘" />
        <div className="space"></div>
        <SpeakGuideItem desc="장바구니 보여줘" />
      </ul>
    );
  }
}

export default SpeakGuideList;