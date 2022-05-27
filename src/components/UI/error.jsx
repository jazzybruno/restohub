import React from "react";
import './error.css'

function Error(props) {
  return (
     
        <div className=" mr-36 w-[35vw] ">
          <img className="imgNothing"  src={props.img}  alt=""nothing/>
            <h1 className="text-[#B3C10F] text-center  orders my-5 ">{props.title}</h1>
            
            <p className="text-center my-6">
              {props.message}
            </p>
        </div>
    
  )
}
export default Error