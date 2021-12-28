import React from 'react'

function App() {
  return (
    <main className="container">
      <div className="box_container">
        <h1 className="game-title">Tenzies</h1>
        <p className="content">
          Roll until all dice are the same. Click each die to freeze 
          it at its current value between rolls.
        </p>
        <div className="boxes">
          <div className="box-1">1</div>
          <div className="box-2">2</div>
          <div className="box-3">1</div>
          <div className="box-4">4</div>
          <div className="box-5">5</div>
          <div className="box-6">3</div>
          <div className="box-7">3</div>
          <div className="box-8">5</div>
          <div className="box-9">6</div>
          <div className="box-10">1</div>
        </div>
        <button className="btn-roll">Roll</button>
      </div>
    </main>
  );
}

export default App;
