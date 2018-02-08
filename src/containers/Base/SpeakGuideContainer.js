import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

import SpeakGuideList from 'components/SpeakGuide/SpeakGuideList';
/**
 * SpeakGuide Container(SpeakGuide Business Logic)
 */
class SpeakGuideContainer extends Component {
  /**
   * change speak guide by page
   */
  state = {
    guideItem: ['우유 보여줘', '장바구니 보여줘', '고객센터 알려줘']
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.handleSpeakGuide();
    }
  }

  handleSpeakGuide = () => {
    console.log('speakguide called');
    const { location } = this.props;
    const regx = /ShowDetail/g;
    const isDetailPage = regx.test(location.pathname);
    if(isDetailPage) {
      this.setState({
        guideItem: ['이 상품 두 개 담아줘', '수량변경 해줘', '로그아웃해줘']      
      });
    } else {
      this.setState({
        guideItem: ['우유 보여줘', '장바구니 보여줘', '고객센터 알려줘']
      });
    }
  }
  /**
   * render
   * @return {ReactElement} SpeakGuideList Wrapper
   */
  render() {
    return (
      <section className="speak_guide">
        <SpeakGuideList items={this.state.guideItem} />
      </section>
    );
  }
}

export default withRouter(SpeakGuideContainer);
