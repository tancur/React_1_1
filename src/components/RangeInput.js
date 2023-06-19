import { useState } from "react";

function RangeInput({ min = 2, max = 10 }) {
  const [value, setValue] = useState([]);

  const inputHandler = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <input
        value={value}
        onChange={inputHandler}
        type="text"
        className={value.length >= min && value.length <= max ? "" : "crimson"}
      />
    </div>
  );
}
export default RangeInput;
