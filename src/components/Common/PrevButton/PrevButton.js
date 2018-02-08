import React from 'react';

function PrevButton(props) {
  const { setPage, disabled } = props;
  return (
      <li className={`menu_item ${disabled ? 'disalbed' : ''}`}>
      <div className="btn" onClick={setPage}>
        <div className="triangle-left"></div>
        <span>이전</span>
      </div>
    </li>
  );
}

export default PrevButton;
