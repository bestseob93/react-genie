import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainTitle from 'components/MainTitle';
import SearchList from 'components/Search/SearchList';

import { actionCreators as goodsActions } from 'ducks/goods.duck';
import { actionCreators as uiActions } from 'ducks/ui.duck';

class Search extends Component {
  state = {
    pageOfItems: [],
    paramsValue: ''
  }

  async componentDidMount() {
    this.initialize();
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevParams = prevProps.location.search.split('query=');
    const currentParams = this.props.location.search.split('query=');
    if(prevParams[1] !== currentParams[1]) {
      this.initialize();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress = (evt) => {
    const { searchResults, history } = this.props;

    const goodsNo = searchResults.toJS().find(data => data.PRIORITY_RANK  === parseInt(evt.key, 10)).GOODS_NO;
    let pathTo = `/static-root/image/gigagenie/lhstest/ShowDetail/${goodsNo}`;;
    // 1~5 키
    history.push(pathTo);
    console.log(evt);
    switch(evt.charCode) {
      case 49:
        history.push(pathTo);
        break;
      case 50:
        history.push(pathTo);
        break;
      case 51:
        history.push(pathTo);
        break;
      case 52:
        history.push(pathTo);
        break;
      case 53:
        history.push(pathTo);
        break;
      default:
        break;
    }
  }

  onChangePage = (pageOfItems) => {
    this.setState({
      ...this.state,
      pageOfItems: pageOfItems
    });
  }

  initialize = async () => {
    const { GoodsActions, UiActions, location } = this.props;
    const params = location.search.split('query=');

    this.setState({
      paramsValue: params
    });

    UiActions.setSpinnerVisible({ visiblity: true });

    try {
      await GoodsActions.getSearchResult(params[1]);
    } catch (e) {
      if(e) console.warn(e);
      UiActions.setSpinnerVisible({ visiblity: false });
    }

    UiActions.setSpinnerVisible({ visiblity: false });
  }

  render() {
    return (
      <Fragment>
        <MainTitle {...this.props} paramsValue={this.state.paramsValue} />
        <SearchList
          searchResults={this.props.searchResults}
          pageOfItems={this.state.pageOfItems}
          onChangePage={this.onChangePage}
        />
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    searchResults: state.goods.get('searchResults')
  }),
  dispatch => ({
    GoodsActions: bindActionCreators(goodsActions, dispatch),
    UiActions: bindActionCreators(uiActions, dispatch)
  })
)(Search);
