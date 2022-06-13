import React from "react";
import "./clients.css";
import eye from "../images/Eye.png";




const Client = (props) => {
  let money=  "50 000 frw"
 let  date =  "on 18.05.2022"

  return (
    <div className="client">
      <div className="first">
        <div>{props.name}</div>
        <div>{props.updated}</div>
      </div>
      <div className="second">
        <div>{money}</div>
        <div>{date}</div>
      </div>
      <div className="look">
        <img src={eye} alt="client" />
      </div>
      <div className="type">
        <button className="button">{props.type}</button>
      </div>

    </div>
  );
};

export default Client;
