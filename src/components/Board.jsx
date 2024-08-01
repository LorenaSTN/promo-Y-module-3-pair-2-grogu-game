import Grogu from "./Grogu";
import "../scss/components/Board.scss";

function Board(props) {
  const boardCells = Array(7).fill(null);

  boardCells[props.position] = <Grogu />;


  const renderBoard = () => {
    return boardCells.map((item, index) => {
      return <div key={index} className="board__cell">{item}</div>;
    });
  };

  return <section className="board">{renderBoard()}</section>;
}

export default Board;
