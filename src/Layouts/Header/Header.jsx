import { generateRandomNumber } from "../../helpers/generateRandomNumber";
import "./Header.css";

export default function Header({ cards, setCards }) {

  const handleClickAdd = () => {
    setCards(generateRandomNumber(cards));
  };

  const handleClickSort = () => {
    if (cards.length) {
      let cardsCopy = [...cards];
      cardsCopy.sort((a, b) => a - b);
      setCards(cardsCopy);
    }
  };
  return (
    <div className="header">
      <button onClick={handleClickAdd} disabled={cards.length > 1000}>add card</button>
      <button onClick={handleClickSort}>sort cards</button>
    </div>
  );
}
