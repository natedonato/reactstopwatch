import React from 'react';
import './App.css';
import Stopwatch from './stopwatch';
import StopwatchesContainer from './stopwatchesContainer';

function App() {
  return (
    <div className="App">
      <StopwatchesContainer />
      <div className = "footer">
        <span style={{padding: '5px'}}> Simple React timers by Nate Donato</span>
        < a href = "https://github.com/natedonato/reactstopwatch/"> View source on Github</a>
      </div>
    </div>
  );
}

export default App;
