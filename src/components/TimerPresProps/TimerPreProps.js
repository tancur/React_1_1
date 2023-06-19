import { useEffect, useState } from "react";
import React from "react";
import styles from "./TimerPreProps.module.css";
function TimerPreProps({ seconds, hours, minute }) {
  return (
    <>
      <div className={styles.timer}>
        <div className={styles.container}>
          <div className={styles.inside}>
            Hour:{hours.toString().padStart(2, "0")}
          </div>
          <div className={styles.inside}>
            Min:{minute.toString().padStart(2, "0")}
          </div>
          <div className={styles.inside}>
            Sec:{seconds.toString().padStart(2, "0")}
          </div>
        </div>
      </div>
    </>
  );
}
export default TimerPreProps;
