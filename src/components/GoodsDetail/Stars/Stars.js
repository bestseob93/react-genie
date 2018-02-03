import React from 'react';
import star from 'assets/images/full_star.png';

function Stars({ score }) {
  const renderStarIcon = (score) => {
    const n = Math.ceil(score) / 2;
    let i;
    let resultArr = [];

    for(i = 0; i < n; i++) {
      resultArr.push(<img key={i} alt="별점" src={star} width={26} height={26} />);
    }

    return resultArr;
  }

  return (
    <div className="review_item">
      {renderStarIcon(score)}
    </div>
  );
}

export default Stars;