import "../scss/components/Header.scss";

function Header({nameInput}) {
  // const [userName, setUserName] = useState("");

  // const handleChangeUserName = (event) => {
  //   const valueUserName = event.target.value;
  //   setUserName(valueUserName);
  // };

  return (
    <header>
      <h1 className="title">¡Cuidado con Grogu {nameInput}!</h1>
      {/* <form className="form" action="">
        <label className="title_subtitle" htmlFor="name">
          Introduce tu nombre para jugar
        </label>
        <input
          className="input"
          type="text"
          name="name"
          id="name"
          placeholder="Tu nombre"
          onChange={handleChangeUserName}
        />
      </form> */}
    </header>
  );
}

export default Header;
