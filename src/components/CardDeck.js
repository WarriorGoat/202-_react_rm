import React from "react";
import { useState } from "react";
import "./CardDeck.css";
import Cards from "./Cards";

const CardDeck = (props) => {
  const [isActive, setIsActive] = useState(true);
  const ShowHide = () => {
    setIsActive(!isActive);
  };
  const cards = props.data;
  return (
    <div>
      <Cards info={cards} toggle={ShowHide} active={isActive} />
      {/* <div className="row align-items-start">{cards}</div> */}
    </div>
  );
};

export default CardDeck;
