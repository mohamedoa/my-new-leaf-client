import "./Login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    if (!event.target.username.value || !event.target.password.value) {
      return false;
    }

    navigate("/");
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
          <button className="login__button">LOGIN</button>
        </form>
        <Link className="login__link" to="/register">
          or Create An Account
        </Link>
      </article>
    </main>
  );
}
