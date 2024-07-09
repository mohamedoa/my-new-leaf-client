import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/images/mynewleaf.png";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="logo">
        <NavLink to="/" className="logo__link">
          <img className="logo__image" src={logoIcon} alt="" />
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink to="/login" className="nav__link nav__cta">
          Login
        </NavLink>
      </div>
    </nav>
  );
}
