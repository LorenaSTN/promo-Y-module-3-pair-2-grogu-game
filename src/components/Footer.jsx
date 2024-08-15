import { NavLink } from "react-router-dom";
import "../scss/components/Footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer">
        <nav>
          <ul className="footer__ul">
            <li className="footer__menu-item">
              <NavLink to="/">A jugar 🐸</NavLink>
            </li>

            <li className="footer__menu-item">
              <NavLink to="/instructions">¿Cómo se juega? 🍪</NavLink>
            </li>
            <li className="footer__menu-item">
              <NavLink to="/options">Más Opciones 🥚</NavLink>
            </li>
          </ul>
        </nav>
        <small className="footer__copy">© Adalab</small>
      </footer>
    </>
  );
}

export default Footer;
