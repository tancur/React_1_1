import { useEffect, useState } from "react";
import React from "react";
import styles from "./Timer.module.css";
import Timer from "./Timer";

function TimerControl() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seki, setSeki] = useState("");
  const ms = hours * 3600 + minutes * 60 + seki;
  return (
    <>
      <input
        placeholder=" Введите часы"
        type="text"
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
      />

      <input
        placeholder=" Введите минуты"
        type="text"
        value={minutes}
        onChange={(e) => setMinutes(Number(e.target.value))}
      />

      <input
        placeholder={"Введите секунды"}
        type="text"
        value={seki}
        onChange={(e) => setSeki(Number(e.target.value))}
      />
      <Timer ms={ms} />
    </>
  );
}
export default TimerControl;
