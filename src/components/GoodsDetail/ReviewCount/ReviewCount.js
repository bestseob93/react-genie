import React from 'react';

function ReviewCount({ count }) {
  return (
    <div className="review_item count">
      ({count}건)
    </div>
  );
}

export default ReviewCount;
