import React from 'react';

/**
 * 
 */
function DeliverStore(props) {
  return (
    <span className="delivery_store">
      {props.username}
      배송매장
      <strong> 안양점</strong>
      <span className="circle"></span>
      {props.address}
      출발
      <strong> 오늘 오후 1시</strong>
      <span className="circle"></span>
      장바구니
      <strong> 0건</strong>
    </span>
  );
}

export default DeliverStore;
