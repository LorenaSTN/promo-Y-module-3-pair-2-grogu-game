import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";

function App() {
  // const [userName, setUserName] = useState("");
  const [dice, setDice] = useState(null);
  const [groguPosition, setGroguPosition] = useState(0);
  // const [wonGame, setWonGame] = useState (false);
  // const [gameOver, setGameOver] = useState (false);
  const [gameStatus, setGameStatus] = useState("en curso");

  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);

  // const handleChangeUserName = (event) => {
  //   const valueUserName = event.target.value;
  //   setUserName(valueUserName);
  // };

  const handleClickDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    setDice(randomNumber);

    if (randomNumber === 1) {
      setCookies((cookies) => cookies - "");
    } else if (randomNumber === 2) {
      console.log("el numero es 2");
    } else if (randomNumber === 3) {
      console.log("el numero es 3");
    } else {
      setGroguPosition((groguPosition) => groguPosition + 1);
    }
  };

  const handleClickReset = () => {
    setUserName("");
    setDice(null);
    setGroguPosition(0);
    setCookies(["🍪", "🍪", "🍪"]);
    setEggs(["🥚", "🥚", "🥚"]);

    // setWonGame(false);
    // setGameOver(false);
  };

  return (
    <>
      <Header />
      <main className="page">
        <Board />
        <section>
          <button className="dice" onClick={handleClickDice}>
            Lanzar Dado
          </button>

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
          <button className="restart-button" onClick={handleClickReset}>
            Reiniciar Juego
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
