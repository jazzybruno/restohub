import React from "react";
import logo from "../images/logo.png";
import "./overview.css";
import overview from "../images/over.png";
import menu from "../images/menu.png";
import orders from "../images/orders.png";
import profile from "../images/profile.png";
import users from "../images/users.png";
import table from "../images/table.png";
import settings from "../images/Settings.png";
import clients from "../images/clients.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo mx-10">
        <img src={logo} alt="The logo of the app" />

        <a href="/overview">
          <div className="over flex">
            {" "}
            <img src={overview} alt="" />{" "}
            <p className="text-white my-auto  mx-auto text-xl">Overview</p>
          </div>
        </a>

        <a href="/clients">
          <div className="over flex">
            {" "}
            <img src={clients} alt="" />{" "}
            <p className="text-white my-auto  mx-auto text-xl">Clients</p>
          </div>
        </a>

       
          <div className="over flex">
            {" "}
            <img src={table} alt="" />{" "}
            <p className="text-white my-auto  mx-auto text-xl">Table</p>
          </div>
       

        <a href="/menu">
          <div className="over flex">
            {" "}
            <img src={menu} alt="" />{" "}
            <p className="text-white my-auto  mx-auto text-xl">Menu</p>
          </div>
        </a>

      
          <div  className=" over flex mt-5">
            {" "}
            <img src={users} alt="" />{" "}
            <p className="text-white my-auto  mx-auto text-xl">Users</p>
          </div>
       

        <a href="/orders">
          <div className="over flex mt-5">
            {" "}
            <img src={orders} alt="" />{" "}
            <p className="text-white my-auto  mx-auto text-xl">Orders</p>
          </div>
        </a>

       
          <div className="over flex">
            {" "}
            <img src={profile} alt="" />{" "}
            <p className="text-white my-auto  mx-auto text-xl">Profile</p>
          </div>
        

        
          <div className="over flex">
            {" "}
            <img src={settings} alt="" />{" "}
            <p className="text-white my-auto  mx-auto text-xl">Settings</p>
          </div>
         
      </div>
    </div>
  );
};

export default SideBar;
