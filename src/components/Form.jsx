function Form({ changeInputName, inputValue }) {
  const handleChangeUserName = (event) => {
    changeInputName(event.target.value);
  };

  return (
    <form className="form" action="">
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
        value={inputValue}
      />
    </form>
  );
}

export default Form;
