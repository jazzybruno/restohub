import React from 'react'
import'./footer.css';
import logo from'../images/logo.png';
import { BsInstagram } from 'react-icons/bs';
import{FiFacebook} from 'react-icons/fi';
import {AiOutlineYoutube} from 'react-icons/ai';
import {BsTelephone} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {GoLocation} from 'react-icons/go';
import {GrApple} from 'react-icons/gr';
import {FaGooglePlay} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer">
        <div className="column12 ml-20">
        <img  className="logo12" src={logo} alt="no images" />
        <p>KG 031 St, Kigali, Kacyiru</p>
            <div className="flex ml-[-1.3%]">
            <BsInstagram className='instagram12'/>
            <BsFacebook className="facebook mt-4"/>
        <AiOutlineYoutube className="youtube mt-10" />
        </div>
        </div>

        <div className="column2 ml-28">
            <h3>Quick Links</h3>
            <ul>
                <a href='#' className="about">About us</a>
                <a href='#'>Shop</a>
                <a href='#'>Store</a>
                <a href='#' className="contact">Contact Us</a>
            </ul>
        </div>


        <div className="column3 ml-28">
            <h3>Contacts</h3>
            <ul>
                <BsTelephone className="tel" /><a href='#' className="phone">+250788332299</a>
                <HiOutlineMail className="mail"/><a href='#' className="email">RestoHub@gmail.com</a>
                <GoLocation className="locate"/><a href='#'className="location">Kigali, Rwanda</a>
            </ul>
        </div>

        <div className="column4 ml-28">
            <h3>Mobile App</h3>
            <p>Available on:</p>
            <GrApple className="apple"/><a href='#' className="app-store">App Store</a>
            <FaGooglePlay className="play-sto"/><a href='#'  className="play-store">Google Play</a>
        </div>
        <hr/>
        <p className="last-words">Alrights reserved@2022</p>
    </div>
  )
}

export default Footer;