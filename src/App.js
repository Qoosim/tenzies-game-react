import React from 'react'
import Die from './components/Die'

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
          <Die number={1} />
          <Die number={5} />
          <Die number={1} />
          <Die number={3} />
          <Die number={1} />
          <Die number={2} />
          <Die number={1} />
          <Die number={4} />
          <Die number={6} />
          <Die number={1} />
        </div>
        <button className="btn-roll">Roll</button>
      </div>
    </main>
  );
}

export default App;
