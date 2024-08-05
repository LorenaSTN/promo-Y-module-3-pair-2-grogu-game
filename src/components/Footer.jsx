import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
    <footer class="footer">
  <nav>
    <ul>
      <li class="footer__menu-item">

      <NavLink to="/" 
        className={`${({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : "" } footer__menu-link`}>A jugar</NavLink>
      </li>
      
      <li class="footer__menu-item">
      <NavLink to="/instructions" className={`${({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : "" } footer__menu-link active`}>¿Cómo se juega?</NavLink>
        
    

      </li>
      <li class="footer__menu-item">
      <NavLink to="/options" className={`${({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : "" } footer__menu-link`}    >Más Opciones</NavLink>
      
        
      </li>
    </ul>
  </nav>
  <small class="footer__copy">© Adalab</small>
</footer>
</>
  )
};

export default Footer;
