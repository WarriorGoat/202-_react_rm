import React from "react";
// import { useState } from "react";
import "./Cards.css";

//This component imports the file data into a card
// const Cards = (props) => {
//   const [isActive, setIsActive] = useState(true);

// const ShowHide = () => {
//   setIsActive(!isActive);
// };
const Cards = (props) => {
  const active = props.active;
  const toggle = props.toggle;
  const cards = props.info.map((row, index) => {
    return (
      <div className="card col" key={index}>
        <div className="card-header">
          <h5 className="card-title">{row.name}</h5>
        </div>
        <div className="card-body" onClick={toggle}>
          <img src={row.image} className="card-img-top" alt="{row.name}" />
          <div className={active ? "show" : "hide"}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Gender: {row.gender}</li>
              <li className="list-group-item">Species: {row.species}</li>
              <li className="list-group-item">Status: {row.status}</li>
            </ul>
          </div>
          <div className={active ? "hide" : "show"}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Location: {row.location.name}</li>
              <li className="list-group-item">Origin: {row.origin.name}</li>
              <li className="list-group-item">
                Episodes: {row.episode.length}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  });
  return <div className="row align-items-start">{cards}</div>;
};
  // return <div className="row align-items-start">{cards}</div>;
// };

export default Cards;
