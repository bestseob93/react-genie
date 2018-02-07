import React from 'react';

function NextButton(props) {
  const { onChangePage } = props;

  return (
    <li className="menu_item">
      <a href="" onClick={onChangePage}>
        <span>다음</span>
        <div className="triangle-right"></div>
      </a>
    </li>
  );
}

export default NextButton;
