import "./CardItem.css";

export default function CardItem({ cards, setCards, number }) {
  const handleClickDelete = () => {
    const filteredCards = cards.filter((cardNum) => cardNum !== number)
    setCards(filteredCards);
  };
  return (
    <div className="cardItem">
      <div className="deleteIcon" onClick={() => handleClickDelete()} />
      <p className="cardNumber">{number}</p>
    </div>
  );
}
