import React, { useState, useRef } from 'react';
import './App.css';

function Timer() {
  const [seconds, setSeconds] = useState(0);  // Timer in seconds
  const intervalRef = useRef(null);  // Ref to store the interval ID
  const isRunningRef = useRef(false);  // Ref to track if the timer is running

  const startTimer = () => {
    if (!isRunningRef.current) {
      isRunningRef.current = true;  // Set the timer as running
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (isRunningRef.current) {
      clearInterval(intervalRef.current);  // Stop the interval
      isRunningRef.current = false;  // Set the timer as not running
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);  // Clear the interval
    isRunningRef.current = false;  // Set the timer as not running
    setSeconds(0);  // Reset seconds to 0
  };

  return (
    <div className="timer">
      <h1>React Timer</h1>
      <div className="timer-display">
        <p>{seconds}s</p>
      </div>
      <div className="controls">
        <button onClick={startTimer} className="start-btn">Start</button>
        <button onClick={pauseTimer} className="pause-btn">Pause</button>
        <button onClick={resetTimer} className="reset-btn">Reset</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App; 