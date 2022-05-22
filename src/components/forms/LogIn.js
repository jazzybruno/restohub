import React from "react";
import "./logIn.css";
function LogIn() {
  return (
    <div id="bgLogIn">
      <div classname="logo">
        <h1 className="text-6xl text-white  font-[bold] pl-[300px]">
          Resto<span className="text-[#B3C10F]">Hub</span>
        </h1>
      </div>
      <div className=" bgForm  ">
        <div className="flexStuff">
          <h4 className="font-bold mx-44">Welcome</h4>
          <h2 className="pb-2 pt-2 text-2xl mx-28 ">
            Log In to Resto<span>Hub</span>
          </h2>
        </div>
        <form className=" mt-10" action="/overview">
          <label className="login p-5">Email</label> <br />
          <input
            className=" login1 border-2 mx-24 px-5 text-xl py-5 mb-[30px] mt-[10px] w-[400px] h-[50px]"
            name="fname"
            placeholder="Email Adress"
          />{" "}
          <br />
          <label className="login p-5">Password</label>
          <br />
          <input
            className="login1 px-5  py-[20px] mb-[30px] mt-10 text-xl  mx-24 mt-[10px] border-2 w-[400px] h-[50px]"
            name="fname"
            placeholder="Enter your Password"
          />
          <div className=" flex justify-center content-center  ">
            <input
              type="submit"
              className="bg-[#B3C10F]  mt-10 text-white text-2xl my-[30px]  w-[400px] h-[50px]"
              value="Log In"
            />
          </div>
          <h2 className="text-center text-xl mt-5">
            Don't have an Account?{" "}
            <a href="/signup" > <span className="text-[#B3C10F] font-bold ">Sign Up</span></a>
          </h2>
          <h2 className="text-center pb-5 pt-3 text-xl">
            Forgot Password{" "}
            <a href="/reset" ><span className="text-[#B3C10F] font-bold  text-xl">Reset</span></a>
          </h2>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
