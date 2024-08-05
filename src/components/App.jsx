
import "../scss/App.scss";
import {Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import Form from "./Form";
import GameStatus from "./GameStatus";
import Footer from "./Footer";
import Instrucciones from "./Instrucciones";
import Options from "./Options";

function App() {
  const [name, setName] = useState("");
  const [dice, setDice] = useState(null);
  const [groguPosition, setGroguPosition] = useState(0);
  // const [wonGame, setWonGame] = useState (false);
  // const [gameOver, setGameOver] = useState (false);
  const [gameStatus, setGameStatus] = useState("en curso");

  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);

  const handleChangeName = (valueName) => {
    setName(valueName);
  };

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    setDice(randomNumber);
    console.log(randomNumber);

    if (randomNumber === 1) {
      setCookies(cookies.slice(1));
    } else if (randomNumber === 2) {
      setEggs(eggs.slice(1));
    } else if (randomNumber === 3) {
      setFrogs(frogs.slice(1));
    } else {
      setGroguPosition((groguPosition) => groguPosition + 1);
    }
  };

  useEffect(() => {
    const allGoodsCollected =
      cookies.length === 0 && eggs.length === 0 && frogs.length === 0;
    const groguWin = groguPosition >= 6;

    if (allGoodsCollected) {
      setGameStatus("Ganaste, Mando completa la misión");
    } else if (groguWin) {
      setGameStatus("¡¡Grogu se ha comido el cargamento!! Has perdido");
    }
  }, [cookies, eggs, frogs, gameStatus]);

  const handleClickReset = () => {
    setName("");
    setDice(null);
    setGroguPosition(0);
    setCookies(["🍪", "🍪", "🍪"]);
    setEggs(["🥚", "🥚", "🥚"]);
    setFrogs(["🐸", "🐸", "🐸"]);
    setGameStatus("En curso");
  };

  return (
    <>
      <Header nameInput={name} />
      <Form changeInputName={handleChangeName} inputValue={name} />
      <main className="page">
      <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/instructions" element={<Instrucciones/>}> </Route>
      <Route path="/options" element={<Options/>}> </Route>

  
      </Routes>

        <Board position={groguPosition} />
        <section>
          <Dice updateDice={rollDice} />
        </section>
        <section>
          <GameStatus statusName={gameStatus} />
        </section>

        <section className="goods__container">
          {cookies.map((item, index) => (
            <div key={index} className="goods__item">
              🍪
            </div>
          ))}
        </section>
        <section className="goods__container">
          {eggs.map((item, index) => (
            <div key={index} className="goods__item">
              🥚
            </div>
          ))}
        </section>
        <section className="goods__container">
          {frogs.map((item, index) => (
            <div key={index} className="goods__item">
              🐸
            </div>
          ))}
        </section>
        <section>
          <button className="restart-button" onClick={handleClickReset}>
            Reiniciar Juego
          </button>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;
