import { useState, useRef } from "react";
import { formatTime } from "./formatTime";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const [laps, setLaps] = useState([]);

  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
    active.current.disabled = true;
  };
  const lapTimer = () => {
    const lapTime = formatTime(time);
    setLaps((prevLaps) => [...prevLaps, lapTime]);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime(0);
    setLaps([]);
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };

  return { time, laps, active, startTimer, stopTimer, resetTimer, lapTimer };
};
export default useTimer;
