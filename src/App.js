import React from 'react'
import Die from './components/Die'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = React.useState(allNewDice());

  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log('You won!');
    }
  }, [dice])

  function generateNewDice() {
    return { 
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice())
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice(oldDice => {
        return oldDice.map(die => {
          return die.isHeld ? die : generateNewDice();
        })
      });
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice(prevDice => {
      return prevDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die;
      })
    })
  }

  const diceElements = dice.map(die => (
    <Die 
      key={die.id}
      value={die.value} 
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  )) 

  return (
    <main className="container">
      {tenzies && <Confetti />}
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
          onClick={rollDice}
        >
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </div>
    </main>
  );
}

export default App;
