import React from "react";
import "./clients.css";

const Client = (props) => {
  return (
    <div className="client">
      <div className="first">
        <div>{props.name}</div>
        <div>{props.updated}</div>
      </div>
      <div className="second">
        <div>{props.money}</div>
        <div>{props.date}</div>
      </div>
      <div className="look">
        <img src={props.img} alt="client" />
      </div>
      <div className="type">
        <button className="button">{props.type}</button>
      </div>
    </div>
  );
};

export default Client;
