import React from "react";
import "./menu.css";

const Menu = (props) => {
  return (
    <div className="menu">
      <div>
        <img   src={props.img} alt="Menu image" />
      </div>
      <div className="desc">
        <div>{props.title}</div>
        <div>{props.desc}</div>
        <div>{props.money}</div>
      </div>
    </div>
  );
};
export default Menu;
