import "./Register.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(event.target.username.value);
    console.log(event.target.password.value);
    // const confirmPassword = event.target.confirmPassword.value;

    const newUser = { username, password };

    try {
      await axios.post(`${API_URL}/api/users/register`, newUser);
      navigate("/login");
    } catch (error) {
      setErrorMessage("Please try another username");
    }
  };

  return (
    <main className="register">
      <article className="register__container">
        <h1 className="register__header">Register</h1>
        <form className="form" onSubmit={handleRegister}>
          <label className="label" htmlFor="register-username">
            Username
          </label>
          <input
            id="register-username"
            name="username"
            className="input"
            type="text"
            placeholder="JaneDoe"
          />

          <label className="label" htmlFor="register-password">
            Password
          </label>
          <input
            id="register-password"
            name="password"
            className="input"
            type="password"
            placeholder="Password"
          />

          {/* <label className="label" htmlFor="register-confirm">
            Confirm Password
          </label>
          <input
            id="register-confirm"
            name="confirm"
            className="input"
            type="password"
            placeholder="Password"
          /> */}
          <button className="register__button">REGISTER</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        <Link className="register__link" to="/login">
          or Login
        </Link>
      </article>
    </main>
  );
}
