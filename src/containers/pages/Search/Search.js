import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainTitle from 'components/MainTitle';
import SearchList from 'components/Search/SearchList';

import { actionCreators as goodsActions } from 'ducks/goods.duck';
import { actionCreators as uiActions } from 'ducks/ui.duck';

class Search extends Component {
  render() {
    return (
      <Fragment>
        <MainTitle {...this.props} />
        <SearchList />
      </Fragment>
    );
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({
    GoodsActions: bindActionCreators(goodsActions, dispatch),
    UiActions: bindActionCreators(uiActions, dispatch)
  })
)(Search);
