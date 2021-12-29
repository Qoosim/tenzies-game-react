import React from 'react';

function Die({value, isHeld, holdDice}) {

  const bgColor = {
    backgroundColor: isHeld ? '#59E391' : '#ffffff'
  }

  return (
    <div 
      className="die-face" 
      style={bgColor}
      onClick={holdDice}
    >
      <h1 className="die-num">{value}</h1>
    </div>
  )
}

export default Die;
