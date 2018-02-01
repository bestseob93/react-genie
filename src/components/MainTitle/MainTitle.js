import React from 'react';

function MainTitle(props) {
  const regx = /detail/g;
  const isDetailPage = regx.test(props.match.path);
  if(isDetailPage) {
    return (
      <h1 className="main_title">
        {props.GOODS_NM}
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