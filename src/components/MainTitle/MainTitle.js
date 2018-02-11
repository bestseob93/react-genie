import React, { Component } from 'react';
import { getCurrentPage } from 'services/utils';

class MainTitle extends Component {
  state = {
    isDataChanged: false
  };

  componentDidMount() {
    this.setState({
      isDataChanged: false
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isDataChanged: true
    });
  }

  componentWillUnmount() {
    this.setState({
      isDataChanged: false
    });
  }

  render() {
    let { match, GOODS_NM } = this.props;
    if(getCurrentPage(match.path) === 'ShowDetail') {
      return (
        <h1 className="main_title">
          {
            this.state.isDataChanged ?
              GOODS_NM :
              <div className="mini_loader"></div>
          }
        </h1>
      );
    } else if(getCurrentPage(match.path) === 'Search') {
      return (
        <h1 className="main_title">
          {decodeURI(this.props.paramsValue, 'UTF-8').replace('?,', '')} 검색결과 {this.props.searchResults.size}건
        </h1>
      )
    } else {
      return (
        <h1 className="main_title">
          <div className="mini_dot one"></div>
          <div className="mini_dot two"></div>
          <div className="mini_dot three"></div>
          <span className="mic_icon"></span>지니야, 계란 <strong>찾아줘<i>!</i></strong>
        </h1>
      );
    }
  }
}

export default MainTitle;
