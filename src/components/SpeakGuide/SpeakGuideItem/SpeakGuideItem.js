import React from 'react';
import { Link } from 'react-router-dom';

function SpeakGuideItem({ desc }) {
  return (
    <li className="guide_item">
      <Link to="/"><span>"{desc}"</span></Link>
    </li>
  );
}

export default SpeakGuideItem;
