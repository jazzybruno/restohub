import React from "react";
import logo from "../images/logo.png";
import "./overview.css";

import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiDeliveryDrone } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

const SideBar = () => {
  return (
    <div className="sidebar h-full">
      <div className="logo mx-10 ">
        <img src={logo} alt="The logo of the app" />
        <div></div>

        <div className="all ml-5">
          <a className="overlink " href="/overview">
            <span className="text-white  flex gap-3">
              {" "}
              <AiFillDashboard className="iconsSide" /> Overview
            </span>
          </a>

          <a className="overlink" href="/clients">
            <span className="text-white  flex gap-3">
              <AiOutlineUsergroupAdd className="iconsSide" /> Clients
            </span>
          </a>

          <a className="overlink" href="/menu">
            <span className="text-white  flex gap-3">
              <MdOutlineRestaurantMenu className="iconsSide" /> Menu
            </span>
          </a>

          <a className="overlink" href="/orders">
            <span className="text-white  flex gap-3">
              <GiDeliveryDrone className="iconsSide" /> Orders
            </span>
          </a>
        </div>

        <div className="downWard ml-5 ">
          <a className="overlink" href="#">
            <span className="text-white flex gap-3">
              <CgProfile className="iconsSide text-white" />
              Profile
            </span>
          </a>

          <a className="overlink" href="#">
            <span className="text-white flex gap-3">
              <FiSettings className="iconsSide text-white" />
              Settings
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
