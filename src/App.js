import React, { useState } from "react";
import useTimer from "./useTimer";
import { formatTime } from "./formatTime";
import Lap from "./Lap";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);

  const [laps, setLaps] = useState([]);

  const handleLap = () => {
    const lapTime = formatTime(time);
    resetTimer();
    startTimer();

    setLaps((prevLaps) => [...prevLaps, lapTime]);
  };
  const handleResetLap = () => {
    setLaps([]);
  };

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" onClick={handleLap}>
            Lap
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button
            className="button"
            onClick={() => {
              resetTimer();
              handleResetLap();
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <Lap laps={laps} />
    </div>
  );
}

export default App;
