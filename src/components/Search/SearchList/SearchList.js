import React,  { Component } from 'react';
import PropTypes from 'prop-types';

import Pagination from 'components/Common/Pagination';
import PrevButton from 'components/Common/PrevButton';
import NextButton from 'components/Common/NextButton';
import SearchItem from '../SearchItem';

class SearchList extends Component {
  static propTypes = {
    onChangePage: PropTypes.func.isRequired,
    pageOfItems: PropTypes.object.isRequired,
    searchResults: PropTypes.object
  }

  static defaultProps = {
    onChangePage: () => {},
    pageOfItems: [],
    searchResults: []
  }

  state = {
    pager: {}
  }

  componentWillMount() {
    if(this.props.searchResults && this.props.searchResults.size) {
      this.setPage(1);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // 아이템 배열 값이 바꼈을 경우 page 초기화
    if (this.props.searchResults !== prevProps.searchResults) {
        this.setPage(1);
    }
  }

  setPage = (page) => {
    const items = this.props.searchResults;
    let pager = this.state.pager;

    pager = this.getPage(items.size, page);

    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    console.log(pageOfItems.toJS());
    this.setState({
      ...this.state,
      pager
    });

    this.props.onChangePage(pageOfItems);
  }

  getPage = (totalItems, currentPage, amountOfItems) => {
    currentPage = currentPage || 1;
    amountOfItems = amountOfItems || 5;

    const totalPages = Math.ceil(totalItems / amountOfItems);

    const startIndex = (currentPage - 1) * amountOfItems;
    const endIndex = Math.min(startIndex + amountOfItems - 1, totalItems - 1);
    return {
      totalItems,
      currentPage,
      amountOfItems,
      totalPages,
      startIndex,
      endIndex
    };
  }

  renderSearchItem = (items) => {
    console.log(items);
    return items.map((item, index) => {
      return (
        <SearchItem
          key={index}
          index={item.get('PRIORITY_RANK')}
          GOODS_NM={item.get('GOODS_NM')}
          goodsCategory={item.get('GOODS_CATEGORY')}
          goodsNo={item.get('GOODS_NO')}
          imgUrl={item.get('IMG_URL')}
          dcPrice={item.get('LIST_PRICE')}
          dcRate={item.get('DC_RATE')}
        />
      );
    });
  }

  render() {
    let { pager } = this.state;
    console.log(pager);
    if(!this.props.pageOfItems) {
      return (
        <section className="detail_wrapper">
          <Pagination pager={pager} />
          <ul className="search_wrapper">
            <PrevButton setPage={() => this.setPage(pager.currentPage - 1)} disabled={pager.currentPage === 1 ? true : false} />
            <li className="search_item_wrapper">
              <div className="num_circle">
                <span>1</span>
              </div>
              <img alt={''} width="300" height="300" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/dimm300x300.gif" />
              <p className="goods_rate_price_wrapper">
                <span className="dc_rate"><strong>{15}</strong>%</span><span className="dc_price"><strong>{3000}</strong>원</span>
              </p>
              <p className="goods_nm">
                ""
              </p>
            </li>
            <NextButton setPage={() => this.setPage(pager.currentPage + 1)} disabled={pager.currentPage === pager.totalPages ? true : false} />
          </ul>
        </section>
      )
    } else {
      return (
        <section className="detail_wrapper">
          <Pagination pager={pager} />
          <ul className="search_wrapper">
            <PrevButton setPage={() => this.setPage(pager.currentPage - 1)} disabled={pager.currentPage === 1 ? true : false} />
            {this.renderSearchItem(this.props.pageOfItems)}
            <NextButton setPage={() => this.setPage(pager.currentPage + 1)} disabled={pager.currentPage === pager.totalPages ? true : false} />
          </ul>
        </section>
      );
    }
  }
}

export default SearchList;
