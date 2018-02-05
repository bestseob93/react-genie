import React from 'react';

/**
 * ReviewCount Functional Component
 * @param {number} count
 * @return {React.element}
 */
function ReviewCount({ count }) {
  return (
    <div className="review_item count">
      ({count}건)
    </div>
  );
}

export default ReviewCount;
