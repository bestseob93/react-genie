import React from 'react';

/**
 * ReviewScore Functional Component
 * @param {number} score
 * @return {React.element}
 */
function ReviewScore({ score }) {
  return (
    <div className="review_item score">
      {score}
    </div>
  );
}

export default ReviewScore;
