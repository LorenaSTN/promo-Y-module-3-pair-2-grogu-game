import "../scss/components/Dice.scss";

function Dice(props) {
  const handleClickDice = () => {
    props.updateDice();
  };
  return (
    <>
      <button className="dice" onClick={handleClickDice}>
        Lanzar Dado
      </button>
    </>
  );
}

export default Dice;
