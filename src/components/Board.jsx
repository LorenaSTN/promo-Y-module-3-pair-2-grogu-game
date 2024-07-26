import Grogu from "./Grogu";
import "../scss/components/Board.scss";

function Board() {
  return (
    <section className="board">
      <div className="board__cell">
        <Grogu />
      </div>
      <div className="board__cell"></div>
      <div className="board__cell"></div>
      <div className="board__cell"></div>
      <div className="board__cell"></div>
      <div className="board__cell"></div>
      <div className="board__cell"></div>
    </section>
  );
}

export default Board;
