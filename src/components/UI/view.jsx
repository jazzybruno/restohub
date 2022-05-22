import React from 'react';
import './view.css'
    
const View = (props)=>{
    return(
        <div className="view">
           <div>
               <img src={props.img} alt="sees" />
           </div>
           <div>{props.title}</div>
           <div>{props.amount}</div>
        
        </div>
    )
}

export default View

