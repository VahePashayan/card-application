import { useState } from "react";

import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import Instructions from "../components/Instructions/Instructions";

import "./Container.css";

export default function Container() {
  const [cards, setCards] = useState([]);

  return (
    <div className="container">
      <Header cards={cards} setCards={setCards} />
      <div className="main-content">
        <CardsContainer cards={cards} setCards={setCards} />
        <Instructions />
      </div>
      <Footer />
    </div>
  );
}
