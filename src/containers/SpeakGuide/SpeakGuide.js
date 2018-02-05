import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

import SpeakGuideList from 'components/SpeakGuide/SpeakGuideList';
/**
 * SpeakGuide Container(SpeakGuide Business Logic)
 */
class SpeakGuide extends Component {
  /**
   * render
   * @return {ReactElement} SpeakGuideList Wrapper
   */
  render() {
    return (
      <section className="speak_guide">
        <SpeakGuideList />
      </section>
    );
  }
}

export default SpeakGuide;
