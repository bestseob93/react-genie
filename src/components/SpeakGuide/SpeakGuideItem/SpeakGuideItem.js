import React from 'react';

function SpeakGuideItem(props) {
  return (
    <li className="guide_item">
      <a href="#"><span>"{props.desc}"</span></a>
    </li>
  );
}

export default SpeakGuideItem;