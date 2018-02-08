import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const { pager } = this.props;
    const { currentPage, totalPages } = pager;
    return (
      <div>
        <span className="pagination">{currentPage}/{totalPages}</span>
      </div>
    );
  }
}

export default Pagination;
