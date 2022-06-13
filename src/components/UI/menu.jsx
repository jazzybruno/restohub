import React from "react";
import "./menu.css";

const Menu = (props) => {
  return (
    <div className="menuui">
      <div>
        <img src={props.img} alt="Menu picture   "/>
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
  