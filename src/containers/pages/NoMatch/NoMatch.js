import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators as genieActions } from 'ducks/genie.duck';

class NoMatch extends PureComponent {
  state = {
    countDown: 5
  }

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        countDown: this.state.countDown - 1
      })
    }, 1000);
    this.props.GenieActions.toggleNotFound(true);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.countDown === 0) {
      this.props.history.goBack();
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    this.props.GenieActions.toggleNotFound(false);
  }

  render() {
    return (
      <div className="error_page">
        <div>
          <img alt="error" src="http://image.lottesuper.co.kr/static-root/image/mobile/images/common/error.png" />
          <p>쇼핑에 불편을 드려 죄송합니다.</p>
          <p>준비중인 페이지입니다.</p>
          {this.state.countDown}초 후 이전 페이지로 돌아갑니다.
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    GenieActions: bindActionCreators(genieActions, dispatch)
  })
)(NoMatch);
