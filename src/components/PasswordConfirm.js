import { useState } from "react";

function PasswordConfirm({ min }) {
  const [password, setPassword] = useState("");
  const [confirmPas, setConfirmPas] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          password === confirmPas && password.length >= min
            ? setMessage("Добро пожаловать")
            : setMessage("Повторите попытку ввода");
          setPassword("");
          setConfirmPas("");
        }}
      >
        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="введите пароль"
          onChange={(event) => setPassword(event.target.value)}
        />

        <label>Confirm your Password</label>
        <input
          type="password"
          value={confirmPas}
          placeholder="введите пароль повторно"
          onChange={(event) => setConfirmPas(event.target.value)}
        />
        <button type="submit">Отправить</button>
        <h1>{message}</h1>
      </form>
    </>
  );
}
export default PasswordConfirm;
