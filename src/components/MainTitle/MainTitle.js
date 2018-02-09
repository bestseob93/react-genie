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
    const regx = /ShowDetail/g;
    const searchRegx = /Search/g;
    const isDetailPage = regx.test(this.props.match.path);
    const isSearchPage = searchRegx.test(this.props.match.path);
    console.log(this.props);
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
    } else if(isSearchPage) {
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
          <span className="mic_icon"></span>지니야, 계란 <strong>보여줘<i>!</i></strong>
        </h1>
      );
    }
  }
}

export default MainTitle;