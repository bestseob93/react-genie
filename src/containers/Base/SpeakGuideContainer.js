import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getCurrentPage } from 'services/utils';

import SpeakGuideList from 'components/SpeakGuide/SpeakGuideList';
/**
 * SpeakGuide Container(SpeakGuide Business Logic)
 */
class SpeakGuideContainer extends Component {
  /**
   * change speak guide by page
   */
  state = {
    guideItem: ['우유 보여줘', '배송지 알려줘', '고객센터 알려줘']
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.handleSpeakGuide();
    }
  }

  handleSpeakGuide = () => {
    console.log('speakguide called');
    const { location } = this.props;
    switch(getCurrentPage(location.pathname)) {
      case 'ShowDetail':
        this.setState({
          guideItem: ['한개 담아줘', '이전 페이지', '주문해줘']      
        });
        break;
      case 'Search':
        this.setState({
          guideItem: ['1번 보여줘', '다음상품', '로그아웃해줘']      
        });
        break;
      case 'Home':
        this.setState({
          guideItem: ['우유 보여줘', '배송지 알려줘', '고객센터 알려줘']
        });
        break;
      default:
        break;
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
