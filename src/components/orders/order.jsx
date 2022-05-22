import React from 'react';
import './order.css'
import SideBar from '../Dashboard/sidebar';
import NavBar from '../Dashboard/navbar';
import Odd from '../UI/order';
import Data from './data';
import add from '../images/add.png'


const Order = ( ) => {
    return (
        <div className="overview">
          <SideBar />
          <div className="othercontent">
           <NavBar />
           <div className="ordersList p-2 w-[94.7%]  bg-white mt-10 ml-20 flex">
               
               <div>
               <div className="min flex">
              <p className='ml-10 pt-5 font-bold text-3xl'>Orders</p>
                <div className="buttonOrder  ">
                    <button>New</button>
                    <button>Delivered</button>
                    <button>Rejected</button>
                    <button>All</button>
                </div>
                  </div>  
                  <div className="listOrder ml-44 ">
           {Data.map(v => <Odd  number={v.number} title={v.title} desc={v.desc} />)}
           </div>
               </div>

               <div className="sidethings ml-56  mt-20 ">
                 <p className='description '>Delivered</p>
                 <p className='numbersOrder ml-10'>6</p>
                 <div className="separeting"></div>
                 <p className='description'>Waiting</p>
                 <p className='numbersOrder ml-6'>12</p>
                 <div className="separeting"></div>
                  <p className='description'>Rejected</p>
                   <p className='numbersOrder ml-10'>1</p>
                 <div className="separeting"></div>
                   <p className='description ml-8'>All</p>
                   <p className='numbersOrder ml-10'>30</p>

                   <div className="addOrder">
                     <p className='addIt font-bold text-xl ml-10 pt-10'>Add Order</p>
                     <p className="manually text-xl ml-10 mt-5  ">manually</p>
                     <div className="flex">
                       <p className='ml-10 mt-6 text-xl '>Create New order</p>
                       <img className='h-7 w-7 ml-32 mt-5 cursor-pointer' src={add} alt="addOrder" />
               </div>

               <div className="inputOrder">
                 <form action="">
                   <div className="flex mt-5 ml-5">
                     <input className='mt-3' type="radio" name="order" id="" />
                     <label className='ml-10 text-[140%]' htmlFor="">Dessert</label>
                     <button className='orderButton  ml-36'>New</button>
                   </div>

                   <div className="flex mt-5 ml-5">
                     <input className='mt-3' type="radio" name="order" id="" />
                     <label className='ml-10 text-[140%]' htmlFor="">Dessert</label>
                     <button className='orderButton  ml-36'>New</button>
                   </div>

                   <div className="flex mt-5 ml-5">
                     <input className='mt-3' type="radio" name="order" id="" checked />
                     <label className='ml-10 text-[140%]' htmlFor="">Dessert</label>
                     <button className='orderButtonD  ml-36'>Default</button>
                   </div>

                   <div className="flex mt-5 ml-5">
                     <input className='mt-3' type="radio" name="order" id="" />
                     <label className='ml-10 text-[140%]' htmlFor="">Dessert</label>
                     <button className='orderButton  ml-36'>New</button>
                   </div>

                   <div className="flex mt-5 ml-5">
                     <input className='mt-3' type="radio" name="order" id="" />
                     <label className='ml-10 text-[140%]' htmlFor="">Dessert</label>
                     <button className='orderButton  ml-36'>New</button>
                   </div>

                   
                 </form>
               </div>

           </div>
           
          </div>
          </div>
          
        </div>
        </div>
    )
}

export default Order 

