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
    pageOfItems: [{id: 1}],
    searchResults: []
  }

  state = {
    pager: {},
    isDataChanged: false
  }

  componentWillMount() {
    if(this.props.searchResults && this.props.searchResults.size) {
      this.setPage(1);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.searchResults !== nextProps.searchResults) {
      this.setState({
        isDataChanged: true
      });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    // 아이템 배열 값이 바꼈을 경우 page 초기화
    if(this.props.searchResults !== prevProps.searchResults) {
      console.log('componentdidupdate');
      this.setPage(1);
    }
  }

  componentWillUnmount() {
    this.setState({
      ...this.state,
      isDataChanged: false
    });
  }

  handleRemoteKeyEvent = (extra) => {
    if(extra.key === 'next') {
      this.setPage(this.state.pager.currentPage + 1);
    } else if(extra.key === 'prev') {
      this.setPage(this.state.pager.currentPage - 1);
    }
  }


  setPage = (page) => {
    const items = this.props.searchResults;
    let pager = this.state.pager;

    pager = this.getPage(items.size, page);

    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

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
    // if(items.size < 5) {
    //   item.concat()
    // }
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
    const { pager, isDataChanged } = this.state;
    if(!isDataChanged) {
      return (
        <section className="detail_wrapper">
          <Pagination pager={pager} />
          <ul className="search_wrapper">
            <PrevButton setPage={() => pager.currentPage === 1 ? {} : this.setPage(pager.currentPage - 1)} />
            <li className="search_item_wrapper">
              <a href="/">
              <img alt="로더" width="300" height="300" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/dimm300x300.gif" />
              <p className="goods_rate_price_wrapper">
                <span className="dc_rate"><strong>10</strong>%</span><span className="dc_price"><strong>1000</strong>원</span>
              </p>
              <p className="goods_nm">
                검색 결과 아이템
              </p>
              </a>
            </li>
            <li className="search_item_wrapper">
              <a href="/">
              <img alt="로더" width="300" height="300" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/dimm300x300.gif" />
              <p className="goods_rate_price_wrapper">
                <span className="dc_rate"><strong>10</strong>%</span><span className="dc_price"><strong>1000</strong>원</span>
              </p>
              <p className="goods_nm">
                검색 결과 아이템
              </p>
              </a>
            </li>
            <li className="search_item_wrapper">
              <a href="/">
              <img alt="로더" width="300" height="300" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/dimm300x300.gif" />
              <p className="goods_rate_price_wrapper">
                <span className="dc_rate"><strong>10</strong>%</span><span className="dc_price"><strong>1000</strong>원</span>
              </p>
              <p className="goods_nm">
                검색 결과 아이템
              </p>
              </a>
            </li>
            <li className="search_item_wrapper">
              <a href="/">
              <img alt="로더" width="300" height="300" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/dimm300x300.gif" />
              <p className="goods_rate_price_wrapper">
                <span className="dc_rate"><strong>10</strong>%</span><span className="dc_price"><strong>1000</strong>원</span>
              </p>
              <p className="goods_nm">
                검색 결과 아이템
              </p>
              </a>
            </li>
            <li className="search_item_wrapper">
              <a href="/">
              <img alt="로더" width="300" height="300" src="http://image.lottesuper.co.kr/static-root/image/gigagenie/lhstest/static/media/dimm300x300.gif" />
              <p className="goods_rate_price_wrapper">
                <span className="dc_rate"><strong>10</strong>%</span><span className="dc_price"><strong>1000</strong>원</span>
              </p>
              <p className="goods_nm">
                검색 결과 아이템
              </p>
              </a>
            </li>
            <NextButton setPage={() => pager.currentPage === pager.totalPages ? {} : this.setPage(pager.currentPage + 1)} />
          </ul>
        </section>
      );
    } else {

      return (
        <section className="detail_wrapper">
          <Pagination pager={pager} />
          <ul className="search_wrapper">
            <PrevButton setPage={() => pager.currentPage === 1 ? {} : this.setPage(pager.currentPage - 1)} />
            {this.renderSearchItem(this.props.pageOfItems)}
            <NextButton setPage={() => pager.currentPage === pager.totalPages ? {} : this.setPage(pager.currentPage + 1)} />
          </ul>
        </section>
      );
    }
  }
}

export default SearchList;
