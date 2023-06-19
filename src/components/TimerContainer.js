import React from "react";
import { useState, useRef } from "react";

import { useEffect } from "react";
function TimerContainer({ seconds, refresh, Render }) {
  const [second, setSecond] = useState(seconds);
  const [start, setStart] = useState(false);

  // const intervalRef = useRef();

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const updateTime = Math.floor((Date.now() - startTime) / 1000);
      if (second > 0 && start === true) {
        setSecond(second - updateTime);
      }
    }, refresh);
    if (second === 0) {
      setStart(false);
      setSecond(seconds);
    }

    return () => {
      clearInterval(interval);
    };
  }, [second, refresh, start]);

  // вариант с рефами НЕ РАБОТАЕТ ПОЧЕМУУУ

  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     const startTime = Date.now();
  //     if (second > 0 && start === true) {
  //       const updateTime = Math.floor((Date.now() - startTime) / 1000);
  //       setSecond(second - updateTime);
  //     }
  //   }, refresh);

  //   if (second === 0) {
  //     setStart(false);
  //     setSecond(seconds);
  //   }
  //   return clearInterval(intervalRef.current);
  // }, [start, second, refresh]);

  return (
    <div>
      <Render seconds={second} />
      <button onClick={() => setStart(!start)}>
        {start ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default TimerContainer;
