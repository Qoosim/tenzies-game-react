import React from 'react';

function Die(props) {
  return (
    <div className="btn-div">
      <button>{props.number}</button>
    </div>
  )
}

export default Die;
