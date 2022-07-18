import { React, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/home";
import LogIn from "./components/forms/LogIn";
import SignUp from "./components/forms/signUp";
import AddClient from "./components/forms/addClient";
import Overview from "./components/Dashboard/overview";
import Clients from "./components/clients/clients";
import Menu from "./components/Menu/menu";
import Order from "./components/orders/order";
import Profile from "./components/profile/restaurant";
// import Footer from "./components/UI/footer";
import "./App.css";
import jwtDecode from "jwt-decode";
import axios from 'axios'
import { GiExitDoor } from "react-icons/gi";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const api = axios.create({
    baseURL: `https://backend.supamenu.rw`
  })

  const authorize=()=>{

     if(localStorage.getItem('accessToken') == ''){
      return;
     }
    
    const token = localStorage.getItem('accessToken');
    if(token){
        setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }

  }

  const isValid = () => {
     const token = localStorage.getItem('accessToken');
     if(token){
      setIsLoggedIn(true)
  }else{
    setIsLoggedIn(false)
    
  }
     const decoded = jwtDecode(token);
     const time = decoded.exp * 1000;
     const human = new Date(time)
     const read = human.toUTCString()
     const date = new Date(Date.now());
     const now = date.toUTCString()

     if(read < now){
      const refresh = localStorage.getItem('refreshToken');
      api.post("/supapp/api/auth/refreshToken" , {
        "refreshToken": refresh
      } , {
        headers:{
          "Content-Type": "application/json",
          'accessToken': `Bearer ${localStorage.getItem('accessToken')}`,
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      } )
      .then(function (response) {
        localStorage.setItem('accessToken', response.data.accessToken)
        localStorage.setItem('refreshToken', response.data.refreshToken)
      })
      .catch(function (error){
        console.log(error)
      })
     }else{
      console.log("it is still valid");
     }
     console.log(now);
     console.log(read);
  }

  useEffect(()=>{
    authorize();
    // isValid();
  },[])

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={<LogIn />}
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/clients/new"
          element={isLoggedIn ? <AddClient />  :  <Navigate to="/login" />}
        ></Route>
        <Route
          path="/overview"
          element={isLoggedIn  ? <Overview /> :   <Navigate to="/login" />}
        ></Route>
        <Route
          path="/clients"
          element={isLoggedIn ? <Clients /> :  <Navigate to="/login" />}
        ></Route>
        <Route
          path="/menu"
          element={isLoggedIn ? <Menu /> :  <Navigate to="/login" />}
        ></Route>
        <Route
          path="/orders"
          element={isLoggedIn ? <Order />  :   <Navigate to="/login" />}
        ></Route>
        <Route
          path="/profile"
          element={isLoggedIn ?  <Profile /> :  <Navigate to="/login" />}
        ></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
