import React from "react";
import "./order.css";

const Odd = (props) => {
  return (
   
        <div className="container">
           <div > <img className="orderuimage" src={props.img} alt="orderlist" /> </div>
       
        <div className="container_2">
        <div className="ordersde">{`Order |${props.number}`}</div>
          <div>{props.title}</div>
          <div className="desct">{props.desc}</div>
        </div>
      </div>
   
  );
};

export default Odd;