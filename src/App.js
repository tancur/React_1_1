import { useState } from "react";
import "./App.css";
import Spoiler from "./components/Spoiler";
import RangeInput from "./components/RangeInput";
import LoginForm from "./components/LoginForm";
import PasswordConfirm from "./components/PasswordConfirm";
import Timer from "./components/Timer";
import TimerControl from "./components/TimerControl";
import TimerControl2 from "./components/Timer2";

import SecondTimer from "./components/SecondTimer";
import TimerContainer from "./components/TimerContainer";

import TimerPresentation from "./components/TimerPresentation/TimerPresentation";
import TimerContainerPresentation from "./components/TimerPresentation/TimerContainerPresentation";
import Button from "./components/button";

import TimerContainerProps from "./components/TimerPresProps/TimerContainerProps";
import TimerPreProps from "./components/TimerPresProps/TimerPreProps";

import WatchContainer from "./components/Watch/WatchContainer";

import TimerControlTC from "./components/TCC/TimerControlTCC";
function App() {
  const [ms, setMs] = useState("");

  // ==============================
  // для TimerContainerProps
  // =================================
  const [seconds, setSecond] = useState(0);
  // ====================================
  return (
    <div className="App">
      <Spoiler header={<h1>Заголовок</h1>} open>
        <h2>Контент 1</h2>
        <p>лорем іпсум тралівалі і тп.</p>
      </Spoiler>
      <Spoiler>
        <h2>Контент 2</h2>
        <p>лорем іпсум тралівалі і тп.</p>
      </Spoiler>
      <hr />
      <h2>RangeInput</h2>
      <RangeInput min={2} max={10} />
      <hr />
      <h2>LoginForm</h2>
      <LoginForm />
      <hr />
      <h2>PasswordConfirm</h2>
      <PasswordConfirm min={2} />
      <hr />
      <h2>Timer не обновляется плейсхолдер</h2>
      <div>
        <input
          placeholder="Введите секунды"
          value={ms}
          onChange={(e) => setMs(Number(e.target.value))}
        />
      </div>

      <Timer ms={ms} />
      <hr />
      <h2>TimerControl не обновляется плейсхолдер</h2>

      <TimerControl />
      <hr />
      <h2>TimerControl 2 адекватно не обновл плейсхолдер</h2>
      <TimerControl2 />
      <hr />
      <h2>TimerContainer</h2>
      <TimerContainer seconds={4} refresh={100} Render={SecondTimer} />

      <h2>TimerContainerPresentation</h2>
      <TimerContainerPresentation refresh={100} Render={TimerPresentation} />

      <h2>
        TimerContainerProps как передать пропсы от дочернего к родит компоненту?
      </h2>
      <div>
        <input
          placeholder="Введите секунды"
          value={seconds}
          onChange={(e) => setSecond(Number(e.target.value))}
        />
      </div>
      <TimerContainerProps
        seconds={seconds}
        refresh={100}
        Render={TimerPreProps}
      />
      <hr />
      <WatchContainer />
      <hr />
      <h2>TimerControlTC тормозит</h2>
      <TimerControlTC />
    </div>
  );
}

export default App;
