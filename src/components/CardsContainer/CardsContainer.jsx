import CardItem from "../CardItem/CardItem";
import "./CardsContainer.css";

export default function CardsContainer({ cards, setCards }) {
  return (
    <div className="cards-container">
      {cards.map((cardNum) => (
        <CardItem
          key={cardNum}
          cards={cards}
          setCards={setCards}
          number={cardNum}
        />
      ))}
    </div>
  );
}
