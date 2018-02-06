import React, { Component } from 'react';
import SpeakGuideItem from '../SpeakGuideItem';

class SpeakGuideList extends Component {
  render() {
    return (
      <ul className="guide_wrapper">
        <SpeakGuideItem desc={this.props.items[0]} />
        <div className="space"></div>
        <SpeakGuideItem desc={this.props.items[1]} />
        <div className="space"></div>
        <SpeakGuideItem desc={this.props.items[2]} />
      </ul>
    );
  }
}

export default SpeakGuideList;