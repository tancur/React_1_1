import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import styles from "./Timer2.module.css";

function TimerControl2() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seki, setSeki] = useState("");
  const ms = hours * 3600 + minutes * 60 + seki;
  const [newtimer, setNewTimer] = useState(ms);
  const [start, setStart] = useState(false);

  useEffect(() => {
    setNewTimer(ms);
  }, [hours, minutes, seki]);

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
      setHours("");
      setMinutes("");
      setSeki("");

      // setNewTimer(ms);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [start, newtimer]);

  const newHours = Math.floor(newtimer / 3600);
  const newMinute = Math.floor((newtimer % 3600) / 60);
  const newSecond = newtimer % 60;

  return (
    <div className={styles.divT}>
      <input
        placeholder={!start && " Введите часы"}
        type="text"
        value={start ? newHours.toString().padStart(2, "0") : hours}
        onChange={(e) => setHours(Number(e.target.value))}
        disabled={start}
      />

      <input
        placeholder={!start && " Введите минуты"}
        type="text"
        value={start ? newMinute.toString().padStart(2, "0") : minutes}
        onChange={(e) => setMinutes(Number(e.target.value))}
        disabled={start}
      />

      <input
        placeholder={!start && "Введите секунды"}
        type="text"
        value={start ? newSecond.toString().padStart(2, "0") : seki}
        onChange={(e) => setSeki(Number(e.target.value))}
        disabled={start}
      />

      <button onClick={() => setStart(!start)}>
        {start ? "Stop" : "Start"}{" "}
      </button>
    </div>
  );
}
export default TimerControl2;
