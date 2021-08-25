import React from 'react';
import {useState} from 'react';

import './App.css';

function App() {

const motamo =
['acteur', 'feutre', 'dessin', 'agenda', 'cadran', 'sudoku', 'casino', 'espace', 'danger', 'quiche',
'guidon', 'cerise', 'zenith', 'etoile', 'saphir', 'fiesta', 'sketch', 'argent', 'chaton', 'ananas',
'cheval', 'diable', 'citron', 'tomate', 'erreur', 'sphere', 'whisky', 'crypte', 'animal', 'zombie',
'donjon', 'beauté', 'nectar', 'puzzle', 'pedalo', 'basket', 'medium', 'italie', 'jaunir', 'karaté',
'parfum', 'banane', 'valise', 'maison', 'humour', 'idylle', 'jambon', 'oiseau', 'boxeur', 'hot-dog',
'litchi', 'orange', 'brunch', 'rythme', 'moulin', 'voyage','bonzaï', 'piment', 'loisir','projet']

let [letter, setLetter] = useState(0);
let [total, setTotal] = useState(0);

const handleYes = () => {
  if (letter < 6){
    setLetter(letter+1);
    setTotal(total+Math.pow(2,5-letter));
  }
}

const handleNo = () => {
  if (letter < 6){
    setLetter(letter+1);
  }
}

const handleReset = () => {
  setLetter(0);
  setTotal(0);
}

  return (
    <div className="App">
      <header className="App-header">
      {total < 61 && letter < 6 ? <div className = "total">{letter} ({total})</div> : <div className = "total">{motamo[total-1].toUpperCase()} ({total})</div>}
        <div className = "swipe">
          {letter < 6 &&
            <>
              <div className = "touch" onClick={handleYes}></div>
              <div className = "touch" onClick={handleNo}></div>
            </>
          }
        </div>
        <div onClick={handleReset}>Reset</div>
      </header>
    </div>
  );
}

export default App;
