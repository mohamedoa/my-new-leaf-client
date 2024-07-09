import "./Login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <main className="login">
      <article className="login__container">
        <h1 className="login__header">Login</h1>
        <form className="form" onSubmit={handleLogin}>
          <label className="label" htmlFor="login-username">
            Username
          </label>
          <input
            id="login-username"
            name="login-username"
            className="input"
            type="text"
            placeholder="Username"
          />

          <label className="label" htmlFor="login-password">
            Password
          </label>
          <input
            id="login-password"
            name="login-password"
            className="input"
            type="password"
            placeholder="Password"
          />
          <button className="login__button">LOGIN</button>
        </form>
        <Link className="login__link" to="/register">
          or Create An Account
        </Link>
      </article>
    </main>
  );
}
