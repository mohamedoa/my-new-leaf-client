import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <Link to="/" className="footer__link">
            Home
          </Link>
        </li>
        <li className="footer__item">
          <Link to="/habits" className="footer__link">
            My Garden
          </Link>
        </li>
        <li className="footer__item">
          <Link to="/community" className="footer__link">
            Community
          </Link>
        </li>
        <li className="footer__item">
          <Link to="/users/1" className="footer__link">
            Profile
          </Link>
        </li>
      </ul>
    </footer>
  );
}
