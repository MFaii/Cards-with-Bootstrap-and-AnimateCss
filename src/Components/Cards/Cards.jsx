import React from "react";
import Card from "../Card/Card";
import stich from "../../imgs/stich.jpg";
import squirtle from "../../imgs/squirtle.jpg";
import weso from "../../imgs/weso.jpg";
import "./Cards.css";

const cards = [
  {
    id: 1,
    title: "Title 1",
    image: stich,
    /* text: "This is a website", */
  },
  {
    id: 2,
    title: "Title 2",
    image: squirtle,
  },
  {
    id: 3,
    title: "Title 3",
    image: weso,
  },
];

const Cards = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card
              title={card.title}
              imageSource={card.image}
              text={card.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
