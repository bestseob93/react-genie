import React from 'react';

/**
 * CSS Spinner Functional Component (isSpin boolean 값에 따라 Spinner Display or not)
 * @param {boolean} isSpin - Control Spinner
 * @return {React.element}
 */
function CartAnim({ isCartShow }) {
  if(!isCartShow) return null;
  return (
    <div class="animatedBounce bounceOutUp basket_ani_image">
        <img alt="cart" src="http://skysky9301.diskn.com/36lHZI3Lfu" />
    </div>
  );
}

export default CartAnim;
