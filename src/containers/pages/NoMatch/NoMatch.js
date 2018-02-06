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
      <div>
        현재 준비중인 기능입니다!
        {this.state.countDown}
      </div>
    );
  }
}

export default NoMatch;