import React from "react";
import "./home.css";

const Landing = (props) => {
  return (
    <div className="landing">
      <img className="img" src={props.img} alt="signup" />

      <h4 className="h4">{props.title}</h4>

      <p className="p">{props.desc}</p>
    </div>  
  );
};

export default Landing;

