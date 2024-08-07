import React from "react";
import useTimer from "./useTimer";
import { formatTime } from "./formatTime";
import Lap from "./Lap";

function App() {
  const { time, laps, active, startTimer, stopTimer, resetTimer, lapTimer } =
    useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        {/* <div
          className="lap__timer_display"
          style={{ display: laps?.length ? "block" : "none" }}
        >
          {formatTime(time)}
        </div> */}
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" onClick={lapTimer}>
            Lap
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
      <Lap laps={laps} />
    </div>
  );
}

export default App;
