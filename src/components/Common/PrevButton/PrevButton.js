import React from 'react';

function PrevButton(props) {
  const { onChangePage } = props;

  return (
    <li className="menu_item">
      <a href="" onClick={onChangePage}>
        <div className="triangle-left"></div>
        <span>이전</span>
      </a>
    </li>
  );
}

export default PrevButton;