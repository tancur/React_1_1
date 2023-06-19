import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Watch from "./Watch";
function WatchContainer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();

  const secondsRotation = (seconds / 60) * 360;
  const minutesRotation = (minutes / 60) * 360;
  const hoursRotation = (hours % 12) * 30 + minutes / 2;
  return (
    <div>
      <Watch
        seconds={secondsRotation}
        minutes={minutesRotation}
        hours={hoursRotation}
      />
    </div>
  );
}
export default WatchContainer;
