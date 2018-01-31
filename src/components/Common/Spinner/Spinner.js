import React from 'react';

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