import { useState } from "react";
import React from "react";

import TimerWatch from "./TimerWatch";

function TimerControlTC() {
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
      <TimerWatch ms={ms} />
    </>
  );
}
export default TimerControlTC;
