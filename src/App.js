import React from 'react'
import Die from './components/Die'

function App() {

  const [dice, setDice] = React.useState(allNewDice());

  const diceElements = dice.map(die => 
    <Die 
      value={die} 
    />
  ) 

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  return (
    <main className="container">
      <div className="box_container">
        <h1 className="game-title">Tenzies</h1>
        <p className="content">
          Roll until all dice are the same. Click each die to freeze 
          it at its current value between rolls.
        </p>
        <div className="boxes">
          {diceElements}
        </div>
        <button 
          className="roll-btn"
          onClick={() => setDice(allNewDice())}
        >
          Roll
        </button>
      </div>
    </main>
  );
}

export default App;
