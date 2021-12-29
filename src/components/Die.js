import React from 'react';

function Die(props) {
  return (
    <div className="die-face">
      <button className="die-num">{props.value}</button>
    </div>
  )
}

export default Die;
