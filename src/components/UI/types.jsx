import React from 'react'
import './types.css'

const Types = (props) =>{
    
    return(
       <div className="types">
           <div className='types_name'>
               <div className='types_name_first'>
                   <p>{props.name}</p>
                   <p>{props.sale}</p>
               </div>
               <div className='types_name_second'>
                   <p>{props.details}</p>
               </div>
           </div>
           <div className='types_price'>

               <div className='types_price_first'>
                   <p>{props.type}</p>
                   <p>{props.number}</p>
                   </div>               
  
           </div>

           <div className='line1'></div>
           <div className='bottom'>
               <p>{props.ex}</p>
               <p>{props.num}</p>
           </div>
       </div>
    )
}

export default Types

