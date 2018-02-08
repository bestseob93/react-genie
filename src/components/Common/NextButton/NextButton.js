import React from 'react';

function NextButton(props) {
  const { setPage, disabled } = props;
  return (
    <li className={`menu_item ${disabled ? 'disalbed' : ''}`}>
      <div className="btn" onClick={setPage}>
        <span>다음</span>
        <div className="triangle-right"></div>
      </div>
    </li>
  );
}

export default NextButton;
