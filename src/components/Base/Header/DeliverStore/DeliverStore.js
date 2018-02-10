import React from 'react';

/**
 * DeliverStore Functional Component (배송매장 및 출발, 장바구니 간단히 Display)
 * @return {React.element}
 */
function DeliverStore(props) {
  if(props.logged) { 
    return (
      <span className="delivery_store">
        배송매장
        <strong> 안양점</strong>
        <span className="circle"></span>
        출발
        <strong> 오늘 오후 1시</strong>
        <span className="circle"></span>
        장바구니
        <strong> {props.cart.size}건</strong>
      </span>
    );
  } else {
    // TODO: logged가 false일 때 다른 페이지 뷰 뿌려주기
    return (
      <span className="delivery_store">
        로그인이 필요한 서비스입니다.
      </span>
    );
  }
}

export default DeliverStore;
