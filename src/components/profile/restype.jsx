import React from 'react'
import './restaurant.css'

const RestType = () =>{
    return (
        <div className="RestType">
            <form action="">
                <label htmlFor="">Restaurant Type</label>
                 <select className='selecting' name="" id="">
                     <option value="">Restaurant</option>
                     <option value="">Pub</option>
                     <option value="">Coffeeshop</option>
                     <option value="">Others</option>
                 </select>
                 <select className='selecting' name="" id="">
                     <option value="">Africa</option>
                     <option value="">America</option>
                     <option value="">Latin America</option>
                     <option value="">Europe</option>
                 </select>
                 <label htmlFor="">Opening time :</label>
                 <div className='flex gap-[15%]'>
                      <input className='smallOnes' type="text" name="" id="" placeholder='Start at | 6:30' />
                      <input className='smallOnes' type="text" name="" id="" placeholder='End at |10:30' />
                 </div>
                 <label htmlFor="">Upload Image (pictures or logo )  </label>
                 <input className='file' type="file" id="myfile" name="myfile" multiple />
            </form>
        </div>
    )
}

export default RestType