import React from "react";
import "./overview.css";
import Data from "./data/Data";
import View from "../UI/view";
import Chart from "../UI/Barchat";
import Types from "../UI/types";
import Data_last from "./data/data_last";
import Data_last1 from "./data/data_last1";
import plus from "../images/plus.png";
import SideBar from "./sidebar";
import NavBar from "./navbar";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiDeliveryDrone } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";


const Overview = () => {
  return (
    <div className="overview">
       <SideBar/>
      <div className="otherbar">
        <NavBar />
        <div className="views flex gap-24 mx-28  mt-10">
          {Data.map((v) => (
            <View key={v.id} img={v.img} title={v.title} amount={v.amount} />
          ))}
        </div>
        <div className="chart  mt-10 ">
          <div className="chartreal w-[85%]">
            <Chart />
          </div>

       
        </div>

        <div className="overlast flex mx-32 w-[70%] ">
          <div className="mt-10 ml-10">
            <div className="types1 flex  gap-40 ">
              {Data_last.map((items) => (
                <Types
                key={items.id}
                  name={items.name}
                  sale={items.sale}
                  details={items.details}
                  type={items.type}
                  ex={items.ex}
                  num={items.num}
                />
              ))}
            </div>
            <div className="types2 flex gap-40 ">
              {Data_last1.map((items) => (
                <Types
                key={items.id}
                  name={items.name}
                  sale={items.sale}
                  details={items.details}
                  type={items.type}
                  ex={items.ex}
                  num={items.num}
                />
              ))}
            </div>

          </div>
      
          <div>
         <div className="flex gap-40 ml-20 mt-[3.7rem]">
         <div className="stats  mb-20 ">
           <GiDeliveryDrone className="iconsSide text-black mx-[auto] mt-5 mb-[-5px]" />
            <p className="mt-8 text-xl font-normal ">Orders</p>
            <p className="amount">67890</p>
            </div>
            <div className="stats  mb-20">
              <FaShoppingBag className="iconsSide text-black mx-[auto] mt-5" />
            <p className="mt-5 text-xl font-normal">Items</p>
            <p className="amount">67890</p>
            </div>
         </div>
            <div className="flex gap-40 ml-20">
            <div className="stats  mb-20">
              <AiOutlineUsergroupAdd className="iconsSide text-black mx-[auto] mt-5" />
            <p className="mt-5 text-xl font-normal">Clients</p>
            <p className="amount">67890</p>
            </div>
            <div className="stats  mb-20">
              <AiOutlineFieldTime className="iconsSide text-black mx-[auto] mt-5" />
            <p className="mt-5 text-xl font-normal">Order/Hour</p>
            <p className="amount">67890</p>
          </div>
            </div>
        </div>
        </div>
        {/* <div className="new w-[16vw] bg-white h-[47vh] ml-[23vh] mr-[-120px]  mt-10">
              <div className="flex ">
                  <p className="mr-auto ml-5 mt-7 font-bold  text-xl">Create</p>
                  <p className="mr-5 mt-7 font-light text-xl">View All</p>
              </div>
              <span className="font-light ml-5 ">Today</span>
              <div className="flex">
                  <p className="mr-auto ml-5 mt-7 font-light  text-xl">Create new</p>
                  <a href="/profile"><img className="h-8 mt-5 cursor-pointer mr-10" src={plus} alt="add new" /></a>
              </div>
              <div>
              <form action="" className="choose">
                  <div className="flex gap-8 mx-5 mt-8">
                  <input type="radio" name="type" />
                  <label htmlFor="">Restaurant</label>
                  </div>
                   
                    <div className="space"></div>

                  <div className="flex gap-8 mx-5 mt-8">
                  <input type="radio" name="type" />
                  <label htmlFor="">Pub</label>
                  </div>

                  <div className="space"></div>
                  <div className="flex gap-8 mx-5 mt-8">
                  <input type="radio" name="type" />
                  <label htmlFor="">Hotel</label>
                  </div>
              </form>
              </div>
          </div> */}
      </div>
    </div>
  );
};

export default Overview;
