import { React, useState } from "react";
import "./order.css";
import SideBar from "../Dashboard/sidebar";
import NavBar from "../Dashboard/navbar";
import Odd from "../UI/order";
import data from "./data";
import add from "../images/add.png";
import img from '../images/empty.gif'
import Error from "../UI/error";
import { useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert'


const Order = () => {
  const [Data , setData] = useState(data)
  const [order, setOrder] = useState(Data);
  const [style, setStyle] = useState(1)

  const api = axios.create({
    baseURL: `https://backend.supamenu.rw`
  })

  useEffect(()=>{
    api.get('/supapp/api/orders',{
      headers:{
        // 'Access-Control-Allow-Origin': 'http://localhost:3000',
        "Content-Type": "application/json",
        'accessToken': `Bearer ${localStorage.getItem('token')}`,
        'Auhorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(function(response){
      console.log(response.data);
      setData(response.data)
      swal({
        title: "Error!!",
        text: "Fetched the data successfully",
        icon: "error",
      })
    })
    .catch(function(error){
      console.log(error);
      swal({
        title: "Error!!",
        text: error.message,
        icon: "error",
      })
    })
  }, [])

  const newHandler = () => {
    setOrder(Data.filter((v) => v.status === "new"));
  };

  const deliveredHandler = () => {
    setOrder(Data.filter((v) => v.status === "delivered"));
  };

  const rejectedHandler = () => {
    setOrder(Data.filter((v) => v.status === "rejected"));
  };

  const allHandler = () => {
    setOrder(Data);
  };
  return (
    <div className="overview">
      <SideBar />
      <div className="othercontent">
        <NavBar />
        <div className="ordersList p-2 w-[94.7%]  bg-white mt-[5rem] ml-10 flex rounded-xl">
          <div>
            <div className="min flex">
              <p className="ml-10 pt-5 font-bold text-3xl">Orders</p>
              <div className="buttonOrder">
                <button onClick={()=>{ newHandler(); setStyle(1);}} style={{backgroundColor:style===1 ? "#b3c10f":"transparent"}}>New</button>
                <button onClick={()=>{deliveredHandler();setStyle(2);}} style={{backgroundColor:style===2 ? "#b3c10f":"transparent"}}>Delivered</button>
                <button onClick={()=>{rejectedHandler();setStyle(3);}}  style={{backgroundColor:style===3 ? "#b3c10f":"transparent"}}>Rejected</button>
                <button onClick={()=>{allHandler();setStyle(4);}}  style={{backgroundColor:style===4 ? "#b3c10f":"transparent"}}>All</button>
              </div>
            </div>
            <div className="listOrder ml-44 ">
              {order.length === 0 ? <Error img={img} title="Empty" message="There are no orders available of this type" /> : order.map((v) => (
                <Odd
                  key={v.number}
                  img={v.img}
                  number={v.number}
                  title={v.title}
                  desc={v.desc}
                />
              ))}
            </div>
          </div>

          <div className="sidethings ml-56  mt-20 ">
            <p className="description ">Delivered</p>
            <p className="numbersOrder ml-10">6</p>
            <div className="separeting"></div>
            <p className="description">Waiting</p>
            <p className="numbersOrder ml-6">12</p>
            <div className="separeting"></div>
            <p className="description">Rejected</p>
            <p className="numbersOrder ml-10">1</p>
            <div className="separeting"></div>
            <p className="description ml-8">All</p>
            <p className="numbersOrder ml-10">{Data.length}</p>

            <div className="addOrder text-lg  ">
              <p className="addIt font-bold text-xl ml-10 pt-10">Add Order</p>
              <p className="manually text-xl ml-10 mt-5  ">manually</p>
              <div className="flex">
                <p className="ml-10 mt-6 text-xl ">Create New order</p>
                <img
                  className="h-7 w-7 ml-32 rounded-md mt-5 cursor-pointer"
                  src={add}
                  alt="addOrder"
                />
              </div>

              <div className="inputOrder">
                <form action="">
                  <div className="flex mt-5 ml-5">
                    <input className="mt-3" type="radio" name="order" id="" />
                    <label className="ml-10 text-[140%]" htmlFor="">
                      Dessert
                    </label>
                    <button className="orderButton  ml-36 rounded-md">New</button>
                  </div>

                  <div className="flex mt-5 ml-5">
                    <input className="mt-3" type="radio" name="order" id="" />
                    <label className="ml-10 text-[140%]" htmlFor="">
                      Dessert
                    </label>
                    <button className="orderButton  ml-36 rounded-md">New</button>
                  </div>

                  <div className="flex mt-5 ml-5">
                    <input
                      className="mt-3"
                      type="radio"
                      name="order"
                      id=""
                      checked
                    />
                    <label className="ml-10 text-[140%]" htmlFor="">
                      Dessert
                    </label>
                    <button className="orderButtonD  ml-36 rounded-md">Default</button>
                  </div>

                  <div className="flex mt-5 ml-5">
                    <input className="mt-3" type="radio" name="order" id="" />
                    <label className="ml-10 text-[140%]" htmlFor="">
                      Dessert
                    </label>
                    <button className="orderButton  ml-36 rounded-md">New</button>
                  </div>

                  <div className="flex mt-5 ml-5">
                    <input className="mt-3" type="radio" name="order" id="" />
                    <label className="ml-10 text-[140%]" htmlFor="">
                      Dessert
                    </label>
                    <button className="orderButton mb-5 ml-36 rounded-md">New</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
