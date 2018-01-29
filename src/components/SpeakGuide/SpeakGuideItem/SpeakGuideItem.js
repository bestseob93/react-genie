import React from 'react';

function SpeakGuideItem(props) {
  return (
    <li className="guide_item">
      <span>"{props.desc}"</span>
    </li>
  );
}

export default SpeakGuideItem;