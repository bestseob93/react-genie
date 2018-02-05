import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
    console.log(this.props);
    return (
      <section className="speak_guide">
        <SpeakGuideList />
      </section>
    );
  }
}

export default withRouter(SpeakGuide);
