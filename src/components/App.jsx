import '../scss/App.scss';

function App() {
  return (
    <>
     <header>
      <h1 className="title">¡Cuidado con Grogu!</h1>
    <form className="form" action="">
      <label className="title_subtitle" htmlFor="name">Introduce tu nombre para jugar</label>
      <input className="input" type="text" name="name" id="name" placeholder="Tu nombre" />
    </form>

    </header>
    <main className="page">
      <section className="board">
        <div className="board__cell"><div className="grogu">👣</div></div>
        <div className="board__cell"></div>
        <div className="board__cell"></div>
        <div className="board__cell"></div>
        <div className="board__cell"></div>
        <div className="board__cell"></div>
        <div className="board__cell"></div>
      </section>

      <section>
        <button className="dice">Lanzar Dado</button>
        <div className="game-status">En curso</div>
      </section>

      <section className="goods__container">
        <div className="goods__item">🍪</div>
        <div className="goods__item">🍪</div>
        <div className="goods__item">🍪</div>
      </section>
      <section className="goods__container">
        <div className="goods__item">🥚</div>
        <div className="goods__item">🥚</div>
        <div className="goods__item">🥚</div>
      </section>
      <section className="goods__container">
        <div className="goods__item">🐸</div>
        <div className="goods__item">🐸</div>
        <div className="goods__item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    </>
  );
}

export default App;
