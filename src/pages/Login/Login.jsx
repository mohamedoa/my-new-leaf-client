import "./Login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login({ checkUserIsLoggedIn }) {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const user = { username, password };

    try {
      const { data } = await axios.post(`${API_URL}/api/users/login`, user);

      sessionStorage.setItem("token", data.token);

      checkUserIsLoggedIn();
      navigate("/");
    } catch (error) {
      if (error.response.data.message === "Incorrect username or password") {
        return setErrorMessage("Incorrect username or password");
      }
    }
  };

  return (
    <main className="login">
      <article className="login__container">
        <h1 className="login__header">Login</h1>
        <form className="form" onSubmit={handleLogin}>
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            name="username"
            className="input"
            type="text"
            placeholder="Username"
          />

          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            className="input"
            type="password"
            placeholder="Password"
          />
          {errorMessage && <p className="login__error">{errorMessage}</p>}
          <button className="login__button">LOGIN</button>
        </form>
        <Link className="login__link" to="/register">
          or Create An Account
        </Link>
      </article>
    </main>
  );
}
