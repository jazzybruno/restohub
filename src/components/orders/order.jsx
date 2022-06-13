import { React, useState , useEffect } from "react";
import "./order.css";
import SideBar from "../Dashboard/sidebar";
import NavBar from "../Dashboard/navbar";
import Odd from "../UI/order";
import data from "./data";
import add from "../images/add.png";
import img from '../images/empty.gif'
import Error from "../UI/error";
import axios from 'axios';
import swal from 'sweetalert'


const Order = () => {
  const [Data , setData] = useState([])
  const [order, setOrder] = useState(Data);
  const [orders , setOrders] = useState([]);
  const [newer  , setNewer] = useState(0)
  const [placed  , setPaced] = useState(0)
  const [rejected  , setRejected] = useState(0)
  const [all  , setAll] = useState(0)

  const api = axios.create({
    baseURL: `https://backend.supamenu.rw`
  })

  useEffect(()=>{
    api.get('/supapp/api/orders',{
      headers:{
        "Content-Type": "application/json",
        'accessToken': `Bearer ${localStorage.getItem('accessToken')}`,
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(function(response){
      setData(response.data.content)
      
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
    setOrder(Data.filter((v) => v.status === "ORDERING"));
    setNewer(Data.filter((v) => v.status === "ORDERING").length);
  };  

  const deliveredHandler = () => {
    setOrder(Data.filter((v) => v.status === "PLACED"));
    setPaced(Data.filter((v) => v.status === "PLACED").length);
  };

  const rejectedHandler = () => {
    setOrder(Data.filter((v) => v.status === "CANCELLED"));
    setRejected(Data.filter((v) => v.status === "CANCELLED").length);
  };

  const allHandler = () => {
    setOrder(Data);
    setAll(Data.length);
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
                <button onClick={newHandler}>New</button>
                <button onClick={deliveredHandler}>Delivered</button>
                <button onClick={rejectedHandler}>Rejected</button>
                <button onClick={allHandler}>All</button>
              </div>
            </div>
            <div className="listOrder ml-44 ">
              {order.length === 0 ? <Error img={img} title="Empty" message="There are no orders available of this type" /> : order.map((v) => (
                <Odd
                  key={v.id}
                  img={v.img}
                  number={v.numberOfProducts}
                  title={v.orderDetails.map(v=>v.item.name , )}
                  desc={v.customer.firstName}
                  times={v.numberOfProducts}
                />
              ))}
            </div>
          </div>

          <div className="sidethings ml-56  mt-20 ">
            <p className="description ">Delivered</p>
            <p className="numbersOrder ml-10">{newer}</p>
            <div className="separeting"></div>
            <p className="description">Waiting</p>
            <p className="numbersOrder ml-10">{placed}</p>
            <div className="separeting"></div>
            <p className="description">Rejected</p>
            <p className="numbersOrder ml-10">{rejected}</p>
            <div className="separeting"></div>
            <p className="description ml-8">All</p>
            <p className="numbersOrder ml-10">{all}</p>

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
