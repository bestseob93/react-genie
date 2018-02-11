import React from 'react';
import { Link } from 'react-router-dom';

function SpeakGuideItem(props) {
  return (
    <li className="guide_item">
      <Link to="/"><span>"{props.desc}"</span></Link>
    </li>
  );
}

export default SpeakGuideItem;
