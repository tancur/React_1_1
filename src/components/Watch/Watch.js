import React from "react";

import styles from "./Watch.module.css";
function Watch({ seconds, minutes, hours }) {
  return (
    <div className={styles.container}>
      <div className={styles.clock}>
        <img
          src="http://draw.asmer.fe.a-level.com.ua/ClockFace/ClockFace.png"
          alt="циферблат"
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "50%",
            height: "50%",

            transform: `translate(-50%, -100%) rotate(${hours}deg)`,
            transformOrigin: "center bottom ",
          }}
        >
          <img
            src="http://draw.asmer.fe.a-level.com.ua/ClockFace/ClockFace_H.png"
            alt="часовая стрелка"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "50%",
            height: "50%",

            transform: `translate(-50%, -100%) rotate(${minutes}deg)`,
            transformOrigin: "center bottom",
          }}
        >
          <img
            src="http://draw.asmer.fe.a-level.com.ua/ClockFace/ClockFace_M.png"
            alt="стрелка"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "50%",
            height: "50%",

            transform: `translate(-50%, -100%) rotate(${seconds}deg)`,
            transformOrigin: "center bottom",
          }}
        >
          <img
            src="http://draw.asmer.fe.a-level.com.ua/ClockFace/ClockFace_S.png"
            alt="стрелка"
          />
        </div>
      </div>
    </div>
  );
}
export default Watch;
