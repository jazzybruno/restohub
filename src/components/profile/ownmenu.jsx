import React from "react";
import "./restaurant.css";

const RestMenu = () => {
  return (
    <div className="ownMenu">
      <div className="buttonsMenus flex gap-[8%]">
        <button className="menuoption">Drink</button>
        <button className="menuoption">Starter</button>
        <button className="menuoption">Appetizer</button>
        <button className="menuoption">Desert </button>
        <button className="menuoption">Main</button>
      </div>
      <form action="/overview" className="adding">
      <label htmlFor="">Name</label>
      <input className="longForms" type="text" placeholder="menu name" />
      <label htmlFor="">price</label>
      <input className="longForms" type="text" placeholder="RWF" />
      <label htmlFor="">menu  description</label>
      <input className="longForms" type="text" placeholder="ingredients" />
      <label htmlFor="">Image</label>
      <input className="longForms" type="text" placeholder="upload image" />
      <button className="gone" type="submit">Add more</button>
      </form>
    </div>
  );
};

export default RestMenu;
