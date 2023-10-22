import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [previousTime, setPreviousTime] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => tick(), 100);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const tick = () => {
    if (isRunning) {
      const now = Date.now();
      setPreviousTime(now);
      setElapsedTime(
        (prevElapsedTime) => prevElapsedTime + (now - previousTime)
      );
    }
  };

  const handleStopwatch = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setPreviousTime(Date.now());
    }
  };

  const handleReset = () => {
    setElapsedTime(0);
  };

  const seconds = Math.floor(elapsedTime / 1000);

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{seconds}</span>
      <button onClick={handleStopwatch}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
