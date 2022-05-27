import React from "react";
import "./clients.css";
import Sidebar from "../Dashboard/sidebar";
import NavBar from "../Dashboard/navbar";
import plus from '../images/plus.png'
import Data from './data'
import Client from "../UI/clients";

const Clients = () => {
  return (
    <div className="overview">
      <Sidebar />
      <div className="otherClients">
        <NavBar />
        <div className="newClient mt-20 ml-40">
          <div>
            {" "}
            {/* <p className="text-3xl font-light ">Overview</p>{" "} */}
          </div>
          <div>
            {" "}
            <form>
              <label className="   " htmlFor="">New Client</label>
               <div className="flex  mt-5 ">
              <input className="text-client" type="text" placeholder="Add New Client"/>
              <a href="/clients/new"> <img className="h-8 ml-6 cursor-pointer" src={plus} alt="add him/her" /></a>
               </div>
            </form>{" "}
          </div>
        </div>
        <div className="allclients bg-white  w-[90%] ml-[10%] mt-10 rounded-xl">
            <p className="ml-20 pt-10 text-[150%] ">Clients</p>
            <div className="header flex font-light text-xl ml-[6%] mt-7">
                <p>Client Details</p>
                <p className="ml-[25%]">Sales</p>
                <p className="ml-[22%]">Detailed Report</p>
                <p className="ml-[15%]">Category</p>
            </div>
            {Data.map(v=> <Client name={v.name} updated={v.updated}  money={v.money} date={v.date} img={v.img} type={v.type} />)}
        </div>
      </div>
    </div>
  );
};

export default Clients;
