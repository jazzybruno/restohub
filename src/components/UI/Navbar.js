import React from 'react';
import {BiSearch} from 'react-icons/bi';
import {FaRegUserCircle} from 'react-icons/fa';
import {MdNotificationsActive} from 'react-icons/md';
// import '../../pages/styles_pages.css'
import './navbar.css'



function Nav() {
  return (
    <div className ="nav_bar">

        <input type="text" className="nav_input" placeholder="Enter keywords" />

        <BiSearch 
        className="search"
        />
       
        <MdNotificationsActive 
        className="notification"
        />
        <h1 className="text">Jazzy Bruno</h1>

                <FaRegUserCircle
                className="user"
                        />

    </div>
  )
}

export default Nav