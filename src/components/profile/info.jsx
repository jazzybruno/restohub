import React from 'react'
import './restaurant.css'

const Info = ()=>{
        return(
            <div className='ownMenu' id='res-info-container'>
               <form action="" className='res-info'>
                   <div>
                   <label className='res-info-label'  htmlFor="">Restaurant Information</label>
                   <input className='longOnes' type="text" name="" id="" placeholder='Restaurant name' />
                   <input className='longOnes' type="text" name="" id="" placeholder='Restaurant complete name' />
                   <label className='res-info-label' htmlFor="">Contact number @ Restaurant</label>
                   <input className='longOnes' type="text" name="" id="" placeholder='+250       mobile number' />
                   <div className="flex gap-24">
                       <input className='shortOnes' type="text" name="" id="" placeholder='owner name' />
                       <input className='shortOnes' type="text" name="" id="" placeholder='Restaurant email name' />
                   </div>
                   </div>
               </form>
            </div>
        )
}

export default Info