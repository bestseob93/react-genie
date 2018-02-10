import React, { PureComponent } from 'react';

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
    console.log(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.countDown === 0) {
      this.props.history.goBack();
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="error_page">
        <div>
          <img alt="error" src="http://image.lottesuper.co.kr/static-root/image/mobile/images/common/error.png" />
          <p>쇼핑에 불편을 드려 죄송합니다.</p>
          {this.state.countDown}초 후 이전 페이지로 돌아갑니다.
        </div>
      </div>
    );
  }
}

export default NoMatch;
