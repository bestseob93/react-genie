import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SpeakGuideList from 'components/SpeakGuide/SpeakGuideList';

class SpeakGuide extends Component {
  render() {
    return (
      <section className="speak_guide">
        <SpeakGuideList />
      </section>
    );
  }
}

export default SpeakGuide;