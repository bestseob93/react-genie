import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainTitle from 'components/MainTitle';
import SearchList from 'components/Search/SearchList';

import { actionCreators as goodsActions } from 'ducks/goods.duck';
import { actionCreators as uiActions } from 'ducks/ui.duck';

class Search extends Component {
  state = {
    wholeItems: this.props.searchResults,
    pageOfItems: []
  }

  async componentDidMount() {
    this.initialize();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      wholeItems: nextProps.searchResults
    });
  }

  onChangePage = (pageOfItems) => {
    const { UiActions } = this.props;
    console.log('pageChanged');
    console.log(pageOfItems.toJS());
    this.setState({
      ...this.state,
      pageOfItems
    });
  }

  initialize = async () => {
    const { GoodsActions, UiActions, location } = this.props;
    const params = location.search.split('query=');

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
        <MainTitle {...this.props} />
        <SearchList
          searchResults={this.state.wholeItems}
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
