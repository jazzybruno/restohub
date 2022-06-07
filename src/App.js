import { React, useState } from "react";
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
import Footer from "./components/UI/footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const loggedInHandlerfalse = (val) => {
    setIsLoggedIn(val);
    console.log(val);
  };

  const loggedInHandlertrue = (val) => {
    setIsLoggedIn(val);
    console.log(val);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={<LogIn truthhandler={loggedInHandlertrue} falsehandler={loggedInHandlerfalse} />}
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/clients/new"
          element={isLoggedIn ? <AddClient />  :  <Navigate to="/" />}
        ></Route>
        <Route
          path="/overview"
          element={isLoggedIn  ? <Overview /> :   <Navigate to="/" />}
        ></Route>
        <Route
          path="/clients"
          element={isLoggedIn ? <Clients /> :  <Navigate to="/" />}
        ></Route>
        <Route
          path="/menu"
          element={isLoggedIn ? <Menu /> :  <Navigate to="/" />}
        ></Route>
        <Route
          path="/orders"
          element={isLoggedIn ? <Order />  :   <Navigate to="/" />}
        ></Route>
        <Route
          path="/profile"
          element={isLoggedIn ?  <Profile /> :  <Navigate to="/" />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
