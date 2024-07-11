import "./Register.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await axios.post(import.meta.env.VITE_API_URL + "/users", {
        username: event.target.email.value,
        password: event.target.password.value,
      });

      navigate("/login");
      event.target.reset();
    } catch (error) {
      setErrorMessage("Please try again");
      event.target.reset();
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
