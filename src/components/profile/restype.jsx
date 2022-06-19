import React from 'react'
import { useState } from 'react'
import './restaurant.css'

const RestType = (props) =>{
    const [ type , setType] = useState('');
    const [location , setLocation] = useState('');
    const [open , setOpen] = useState('');
    const [close , setClose] = useState('');

    const dataHandler = (e)=>{
        e.preventDefault()
        let num = 3;
        let data = {
            type : type,
            location : location,
            open : open,
            close : close
        }
        props.getSecond(data , num)
    }
    return (
        <div className="RestType">
            <form action="" onSubmit={dataHandler}>
                <label htmlFor="" className="label">Restaurant Type</label>
                 <select className='selecting' name="" id="" onChange={e=> setType(e.target.value)} >
                     <option value="2">Restaurant</option>
                     <option value="1">Hotel</option>
                     <option value="3">Motel</option>
                 </select>
                 <select className='selecting' name="" id="" onChange={e=> setLocation (e.target.value)}>
                     <option value="Africa">Africa</option>
                     <option value="America">America</option>
                     <option value="">Latin America</option>
                     <option value="">Europe</option>
                 </select>
                 <label htmlFor="" className="label">Opening time :</label>
                 <div className='flex gap-[15%]'>
                      <input className='smallOnes' type="text" name="" id="" placeholder='Start at | 6:30' onChange={e=> setOpen(e.target.value)} />
                      <input className='smallOnes' type="text" name="" id="" placeholder='End at |10:30' onChange={e=> setClose(e.target.value)} />
                 </div>
                 <label htmlFor="" className="label">Upload Image (pictures or logo )  </label>
                 <input className="block w-full text-s text-gray-500 file:py-3  file:px-12 file:rounded file:border-none  file:bg-lime-400" type="file" id="myfile" name="myfile" multiple />
                 <div className='buttonDiv'>  <button className='buttonProfile2' type='submit'  >Next</button></div>
            </form>
         
        </div>
    )
}

export default RestType