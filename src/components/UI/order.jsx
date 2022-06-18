import React from "react";
import "./order.css";
import img from '../images/lemon.jpg'

const Odd = (props) => {
  return (
   
        <div className="container">
           <div > <img className="orderuimage" src={img} alt="orderlist" /> </div>
       
        <div className="container_2">
        <div className="ordersde">{`Orders`}</div>
          <div>{props.title} </div>
          <div className="desct font-bold">{props.desc} * {props.times}</div>
        </div>
        <div className="orderamount"> <p>{`RWF ${props.amount}`}</p></div>
      </div>
   
  );
};

export default Odd;