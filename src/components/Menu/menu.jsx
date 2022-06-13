import {React , useState } from 'react';
import './menu.css'
import NavBar from '../Dashboard/navbar';
import Sidebar from '../Dashboard/sidebar';
import MenuList from '../UI/menu';
import datas from './data';
import plus from '../images/plus.png'
import Error from '../UI/error';
import img from '../images/empty.gif'
import axios from 'axios';
import { useEffect } from 'react';
import swal from 'sweetalert'

const Menu = ()=>{
  
  const [data , setData] = useState(datas)

  const api = axios.create({
    baseURL: `https://backend.supamenu.rw`
  })


  useEffect( ()=>{
    api.get('/supapp/api/menu-items',{
      headers:{
        'accessToken': `Bearer ${localStorage.getItem('token')}`,
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(function(response){
      let array = response.data.content;
      console.log(response.data)
      setData(array)
      
    })
    .catch(function(error){
      console.log(error);
      swal({
        title: "Error!!",
        text: error.message,
        icon: "error",
      })
    })
    

  } , [])

const [menu , setMenu] = useState(data)
const [type , setType] = useState("");

  
function sortDrink() {
  setType("Drink")
   setMenu(data.filter(v=> v.type==="Drink"))
}

function sortStarter() {
  setType("Starter")
  setMenu(data.filter(v=> v.type==="Starter"))

}

function sortAppertizer() {
  setType("Appertizer")
  setMenu(data.filter(v=> v.type==="Appertizer"))
}

function sortDessert() {
  setType("Dessert")
  setMenu(data.filter(v=> v.type==="Dessert"))
  
}


function sortAll() {
  setType("All")
  setMenu(data)
}
    return (
        <div className="overview">
      <Sidebar />
      <div className="mainmenu">
        <NavBar />
        <div className="menus bg-white mt-20 ml-[5%]  rouded-xl ">
         <div className="upperpart flex" >
          <div>
          <p className="font-bold text-xl ml-10 pt-10">Menus</p>
         <p  className="font-light text-xl ml-10 mt-4">As of 25 May 2021</p>
          </div>  
          <div className="theavailable flex mt-10 gap-5 ml-3">
              <button onClick={sortDrink}>Drinks</button>
              <button onClick={sortStarter}>Starter</button>
              <button  onClick={sortAppertizer}>Appetizer</button>
              <button  onClick={sortDessert}>Dessert</button>
              <button onClick={sortAll}>All</button>
          </div>
         </div>
        <div className="flex">
        <div className="menul ist ml-48 mt-10" >
         {data.length === 0 ? <Error img={img} title="Empty" message="There are no menus available of this type" /> : data.map(v=> <MenuList key={v.id} img={v.defaultPicturePath} title={v.name} desc={v.description} money={v.unitPrice  } />)}
          </div>

          <div className="newMenu h-96 w-[25%] mb-10 ml-6 mt-20 float-left">
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