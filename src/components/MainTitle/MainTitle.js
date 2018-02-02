import React from 'react';

function MainTitle(props) {
  const regx = /GoodsDetail/g;
  const isDetailPage = regx.test(props.match.path);
  if(isDetailPage) {
    return (
      <h1 className="main_title">
        {props.GOODS_NM ? props.GOODS_NM : <div className="mini_loader"></div>}
      </h1>
    );
  } else {
    return (
      <h1 className="main_title">
        <span className="mic_icon"></span>지니야, 계란 <strong>찾아줘<i>!</i></strong>
      </h1>
    );
  }
}

export default MainTitle;