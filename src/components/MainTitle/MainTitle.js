import React, { Component } from 'react';

class MainTitle extends Component {
  state = {
    isDataChanged: false
  };

  componentWillReceiveProps(nextProps) {
    if(this.props.GOODS_NM !== nextProps.GOODS_NM) {
      this.setState({
        isDataChanged: true
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      isDataChanged: false
    });
  }

  render() {
    const regx = /GoodsDetail/g;
    const isDetailPage = regx.test(this.props.match.path);
    if(isDetailPage) {
      return (
        <h1 className="main_title">
          {
            this.state.isDataChanged ?
              this.props.GOODS_NM :
              <div className="mini_loader"></div>
          }
        </h1>
      );
    } else {
      return (
        <h1 className="main_title">
          <span className="mic_icon"></span>지니야, 계란 <strong>찾아줘<i>!</i></strong>
        </h1>
      );
    }
  }
}

export default MainTitle;