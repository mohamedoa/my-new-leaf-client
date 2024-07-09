import "./Register.scss";
import { Link } from "react-router-dom";

export default function Register() {
  const handleRegister = () => {
    console.log("Register");
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
            name="register-username"
            className="input"
            type="text"
            placeholder="JaneDoe"
          />

          <label className="label" htmlFor="register-password">
            Password
          </label>
          <input
            id="register-password"
            name="register-password"
            className="input"
            type="password"
            placeholder="Password"
          />

          <label className="label" htmlFor="register-confirm">
            Confirm Password
          </label>
          <input
            id="register-confirm"
            name="register-confirm"
            className="input"
            type="password"
            placeholder="Password"
          />
          <button className="register__button">REGISTER</button>
        </form>
        <Link className="register__link" to="/login">
          or Login
        </Link>
      </article>
    </main>
  );
}
