import React from "react";
import { useState, useRef } from "react";
import { useEffect } from "react";

function TimerContainerProps({ refresh, Render, seconds }) {
  const [second, setSecond] = useState(seconds);
  const [start, setStart] = useState(false);
  // const [ms, setMs] = useState("");
  useEffect(() => {
    setSecond(seconds);
  }, [seconds]);

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
      setSecond("");
    }

    return () => {
      clearInterval(interval);
    };
  }, [second, refresh, start]);

  const hours = Math.floor(second / 3600);
  const minute = Math.floor((second % 3600) / 60);
  const sec = second % 60;

  return (
    <div>
      {/* <div>
        {!start && (
          <input
            placeholder="Введите секунды"
            value={second}
            onChange={(e) => setSecond(Number(e.target.value))}
          />
        )}
      </div> */}
      <Render seconds={sec} hours={hours} minute={minute} />
      <button onClick={() => setStart(!start)}>
        {start ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default TimerContainerProps;
