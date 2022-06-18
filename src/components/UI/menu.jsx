import React from "react";
import "./menu.css";
import menu from "../images/menupic.webp";

const Menu = (props) => {
  return (
    <div className="menuui">
      <div>
        <img src={menu} alt="Menu picture   "/>
      </div>
      <div className="desc">
        <div>{props.title}</div>
        <div>{props.desc}</div>
        <div>{`RWF ${props.money}`}</div>
      </div>
    </div>
  );
};
export default Menu;
  