import React from 'react';
import star from 'assets/images/full_star.png';

function Stars() {
  return (
    <div className="review_item">
      <img alt="별점" src={star} width={26} height={26} />
      <img alt="별점" src={star} width={26} height={26} />
      <img alt="별점" src={star} width={26} height={26} />
      <img alt="별점" src={star} width={26} height={26} />
      <img alt="별점" src={star} width={26} height={26} />
    </div>
  );
}

export default Stars;