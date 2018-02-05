import React from 'react';

/**
 * CSS Spinner Functional Component (isSpin boolean 값에 따라 Spinner Display or not)
 * @param {boolean} isSpin - Control Spinner
 * @return {React.element}
 */
function Spinner({ isSpin }) {
  console.log(isSpin);
  if(!isSpin) return null;

  return (
    <div className="sp_wrapper">
      <div className="sp sp_3balls">
      </div>
    </div>
  );
}

export default Spinner;