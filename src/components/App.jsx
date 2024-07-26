import '../scss/App.scss';
import { useState } from 'react';

function App() {

  const [userName, setUserName] = useState("");
  const [dice, setDice] = useState(null);
  const [groguPosition, setGroguPosition] = useState (0);
  const [wonGame, setWonGame] = useState (false);
  const [gameOver, setGameOver] = useState (false);
  const [gameStatus, setGameStatus] = useState("en curso");

  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);



  const handleChangeUserName = (event) => {
    const valueUserName = event.target.value;
    setUserName(valueUserName);
  }

  const handleClickDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    setDice(randomNumber);

    if (randomNumber === 1){
    console.log("el numero es 1")
    }else if (randomNumber === 2){
    console.log("el numero es 2")
    }else if (randomNumber === 3){
    console.log("el numero es 3")
    }else{
    console.log("El numero es 4")
    };
  };


  const handleClickReset = () => {
   setUserName("");
   setDice(null);
   setGroguPosition(0);
   setWonGame(false);
   setGameOver(false);
  };

  


  return (
    <>
     <header>
      <h1 className="title">¡Cuidado con Grogu {userName}!</h1>
    <form className="form" action="">
      <label className="title_subtitle" htmlFor="name">Introduce tu nombre para jugar</label>
      <input className="input" type="text" name="name" id="name" placeholder="Tu nombre" onChange={handleChangeUserName} />
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
        <button className="dice"  onClick={handleClickDice}>Lanzar Dado</button>

        {/* Esto hay que cambiarlo con el mensaje que da cada cara: */}
        <div className="game-status">{dice}</div>
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
        <button className="restart-button" onClick={handleClickReset}>Reiniciar Juego</button>
      </section>
    </main>
    </>
  );
}

export default App;
