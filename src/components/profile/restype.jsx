import React from 'react'
import './restaurant.css'

const RestType = () =>{
    return (
        <div className="RestType">
            <form action="">
                <label htmlFor="" className="label">Restaurant Type</label>
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
                 <label htmlFor="" className="label">Opening time :</label>
                 <div className='flex gap-[15%]'>
                      <input className='smallOnes' type="text" name="" id="" placeholder='Start at | 6:30' />
                      <input className='smallOnes' type="text" name="" id="" placeholder='End at |10:30' />
                 </div>
                 <label htmlFor="" className="label">Upload Image (pictures or logo )  </label>
                 <input class="block w-full text-s text-gray-500 file:py-3  file:px-12 file:rounded file:border-none  file:bg-lime-400" type="file" id="myfile" name="myfile" multiple />
            </form>
        </div>
    )
}

export default RestType