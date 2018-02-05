import React from 'react';
import star from 'assets/images/full_star.png';

/**
 * Stars Functional Component
 * @param {number} score
 * @return {React.element}
 */
function Stars({ score }) {
  /**
   * score에 따라 다른 별 갯수 출력
   * @param {number} score
   * @return {Array[React.element]} 
   */
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
