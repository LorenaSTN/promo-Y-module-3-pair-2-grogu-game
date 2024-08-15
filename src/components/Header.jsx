import "../scss/components/Header.scss";

function Header({ nameInput }) {
  return (
    <header>
      <h1 className="title">¡Cuidado con Grogu {nameInput}!</h1>
    </header>
  );
}

export default Header;
