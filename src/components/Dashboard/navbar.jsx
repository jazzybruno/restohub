import prof from "../images/bruno.jpg";
// import notification from "../images/not.png";
// import search from "../images/search.png";
import './overview.css'
import {MdNotifications} from 'react-icons/md';
import {React , useEffect} from 'react';
import axios from 'axios';
import {FiLogOut} from 'react-icons/fi';

const NavBar =()=>{

  const logoutHandler = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
  window.location.href = '/login';
  }

  const api = axios.create({
    baseURL: `https://backend.supamenu.rw`
  })


  const user = localStorage.getItem('user')

  return(
<div className="navbar flex">
  

  <input
    type="text"
    className="serch text-sm  pl-10"
    placeholder="Enter what to search........."
  />
  <div className="notificate mt-1">
    <MdNotifications className="helloNotifer" />
   {/* <img className=" h-10 mr-10 ml-7 " src={notification} alt="note" /> */}
   </div>
  <div className="info flex ml-auto mr-10 mt-2">
    <p className="text-xl mt-3 mr-10">{user}</p>
    <img className="profilepic " src={prof} alt="note" />
    <FiLogOut className="logout text-3xl mt-3 ml-10 cursor-pointer" onClick={logoutHandler} />
  </div>
</div>
  );
}

export default NavBar