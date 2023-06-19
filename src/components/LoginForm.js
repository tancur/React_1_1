import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (event) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
  };
  return (
    <>
      {/* <h1>LoginForm</h1> */}
      <form onSubmit={onLogin}>
        <label>
          UserName
          <input
            value={username}
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit" disabled={username && password ? false : true}>
          Login
        </button>
      </form>
    </>
  );
}
export default LoginForm;
