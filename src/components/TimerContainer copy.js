import React from "react";
import { useState, useRef } from "react";
import { useEffect } from "react";
function TimerContainer({ seconds, refresh, Render }) {
  const [timer, setTimer] = useState(seconds);

  const [start, setStart] = useState(false);
  const intervalRef = useRef();

  console.log(start, seconds, refresh);
  useEffect(() => {
    if (timer > 0 && start === true) {
      const startTime = Date.now();

      intervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        // ========================================
        // в консоли ПУСТО!!!!

        console.log("почему ничего не выводится");
        // ======================================

        const updateTime = seconds - Math.floor(elapsedTime / 1000);
        // здесь какая то лажа изза замыкания как правильно я не пойму
        setTimer(updateTime);
      }, refresh);
    }
    if (timer === 0) {
      setStart(false);
      setTimer(0);
    }
    return clearInterval(intervalRef.current);
  }, [start, seconds, timer, refresh]);

  return (
    <>
      <Render seconds={timer} />
      <button onClick={() => setStart(!start)}>
        {start ? "Stop" : "Start"}{" "}
      </button>
    </>
  );
}

export default TimerContainer;
