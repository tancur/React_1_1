import { useState } from "react";

import { useEffect } from "react";
import React from "react";
import styles from "./WatchTC.module.css";
import WatchClock from "./WatchClockTCC";
function TimerWatch({ ms }) {
  const [newtimer, setNewTimer] = useState(ms);
  const [start, setStart] = useState(false);

  //  значения таймера попадают из инпута в Стейт и в пропсы

  useEffect(() => {
    setNewTimer(ms);
  }, [ms]);
  // если значение таймера больше нуля и НЕ пауза- отсчет идет, стейт меняется при смене секунд и при переходе на паузу
  useEffect(() => {
    let intervalId;
    if (newtimer > 0 && start === true) {
      intervalId = setInterval(
        () => setNewTimer((newtimer) => newtimer - 1),
        1000
      );
    } else if (newtimer === 0) {
      setStart(false);
      setNewTimer(0);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [start, newtimer]);

  // Определение часов минут и секунд

  const hours = Math.floor(newtimer / 3600);
  const minute = Math.floor((newtimer % 3600) / 60);
  const second = newtimer % 60;

  const secondsRotation = (second / 60) * 360;
  const minutesRotation = (minute / 60) * 360;
  const hoursRotation = (hours % 12) * 30 + minute / 2;

  return (
    <>
      <WatchClock
        seconds={secondsRotation}
        minutes={minutesRotation}
        hours={hoursRotation}
      />
      <div>
        <button className={styles.btn} onClick={() => setStart(!start)}>
          {start ? "Stop" : "Start"}
        </button>
      </div>
    </>
  );
}
export default TimerWatch;
