import React from 'react';
import './menu.css'
import NavBar from '../Dashboard/navbar';
import Sidebar from '../Dashboard/sidebar';
import MenuList from '../UI/menu';
import data from './data';
import plus from '../images/plus.png'

const Menu = ()=>{
    return (
        <div className="overview">
      <Sidebar />
      <div className="mainmenu">
        <NavBar />
        <div className="menus bg-white mt-20 ml-[10%]  rouded-xl ">
         <div className="upperpart flex" >
          <div>
          <p className="font-bold text-xl ml-10 pt-10">Menus</p>
         <p  className="font-light text-xl ml-10 mt-4">as of 25 May 2021</p>
          </div>
          <div className="theavailable flex mt-10 gap-5 ml-3">
              <button>Drink</button>
              <button>Starter</button>
              <button>Appetizer</button>
              <button>Dessert</button>
              <button>Main</button>
          </div>
         </div>
        <div className="flex">
        <div className="menulist ml-48 mt-10" >
         {data.map(v=> <MenuList img={v.img} title={v.title} desc={v.desc} money={v.money} />)}
          </div>

          <div className="newMenu h-96 w-[25%] ml-6 mt-20">
            <p className='font-bold text-xl text-left ml-10 mt-10'>Add Item</p>
            <div className="createit flex">
              <p className='ml-10 mt-10 font-light'>Create new menu item</p>
              <img className='mt-10 ml-20 h-5 cursor-pointer' src={plus} alt="addmenu" />
            </div>
            <div className="radios mx-10">
              <form action="">
                <div className="inputMenu mt-5">
                  <input className='inputRadio' type="radio" name="" id="" />
                  <label className='ml-5' htmlFor="">Dessert</label>
                </div>
                <div className="inputMenu mt-2">
                  <input type="radio" name="" id="" />
                  <label className='ml-5' htmlFor="">Main</label>
                </div>
                <div className="inputMenu mt-2">
                  <input type="radio" name="" id="" />
                  <label className='ml-5' htmlFor="">Drink</label>
                </div>
                <div className="inputMenu mt-2">
                  <input type="radio" name="" id="" />
                  <label className='ml-5' htmlFor="">Appertizer</label>
                </div>
                <div className="inputMenu mt-2">
                  <input type="radio" name="" id="" />
                  <label className='ml-5' htmlFor="">Starter</label>
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

export default Menu