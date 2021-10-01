import React from 'react';

// import Black from './Black'
import Google from './Google'

import './App.css';

function App() {

  return (
<<<<<<< HEAD
    <div className="App">
        {letter < 6
          ? <button className = "total">{letter} ({total})</button>
          : <button className = "total" onClick={wipeHistory}>
              {total > 0 && total < 61 &&
                motamo[total-1].toUpperCase()} ({total})
            </button>
        }
        <div className = "swipe">
          {letter < 6 &&
            <>
              <button className = "touch" onClick={handleYes}></button>
              <button className = "touch" onClick={handleNo}></button>
            </>
          }
        </div>
        <button className = "reset" onClick={handleReset}>RESET</button>
    </div>
=======
  <>
    <Google />
    {/* <Black /> */}
  </>
>>>>>>> dev
  );
}

export default App;
