import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
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

     const rollDice = () => {
      const randomNumber = Math.floor(Math.random() * 4) + 1;
      setDice(randomNumber);
      console.log(randomNumber)

      if (randomNumber === 1) {
            cookies.pop(); //con el metodo pop eliminamos el elemento del arry
          } else if (randomNumber === 2) {
            eggs.pop();
          } else if (randomNumber === 3) {
            frogs.pop();
          } else {
            setGroguPosition((groguPosition) => groguPosition + 1);
          }
        };
    

  //   if (randomNumber === 1) {
  //     cookies.pop(); //con el metodo pop eliminamos el elemento del arry
  //   } else if (randomNumber === 2) {
  //     eggs.pop();
  //   } else if (randomNumber === 3) {
  //     frogs.pop();
  //   } else {
  //     setGroguPosition((groguPosition) => groguPosition + 1);
  //   }
  // };

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
          <Dice  updateDice={rollDice}/>

          {/* Esto hay que cambiarlo con el mensaje que da cada cara: */}
          <div className="game-status"></div>
        </section>

        <section className="goods__container">
          {cookies.map(() => <div className="goods__item">🍪</div>)}  {/* map pinta el hmtl con la cantidad de elementos del arry*/}
        </section>
        <section className="goods__container">
        {eggs.map(() => <div className="goods__item">🥚</div>)}
        </section>
        <section className="goods__container">
         {frogs.map(() => <div className="goods__item">🐸</div> )} 
        </section>
        <section>
          <button className="restart-button" onClick={handleClickReset}>
            Reiniciar Juego
          </button>
        </section>
      </main>
    </>
  );
};

export default App;
