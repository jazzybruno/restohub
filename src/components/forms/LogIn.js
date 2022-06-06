import React from "react";
import "./logIn.css";
function LogIn() {
  return (
    <div id="bgLogIn">
      <div classname="logo">
        <h1 className="text-6xl text-white  font-[bold] pl-[300px] md:display-none">
          Resto<span className="text-[#B3C10F]">Hub</span>
        </h1>
      </div>
      <div className=" bgForm  ">
        <div className="flexStuff">
          <h4 className="font-bold text-center">Welcome</h4>
          <h2 className=" text-center  p-2 text-2xl mx-14 sm:text-5 ">
            Log In to Resto<span>Hub</span>
          </h2>
        </div>
        <form className=" mt-10 ml-10 " action="/overview" >
          <label className="login p-5">Email</label> <br />
          <input
            className=" login1 px-5  py-[10px] mb-[5px] mt-2 text-xl  mx-10 border-2 md:w-[400px] sm:w-[30px] h-[50px] "
            name="fname"
            placeholder="Email Adress"
          />{" "}
          <br />
          <label className="login p-5">Password</label>
          <br />
          <input
            className="login1 px-5  py-[10px] mb-[5px] mt-2 text-xl  mx-10 border-2 md:w-[400px] sm:w-[30px] h-[50px] "
            name="fname"
            placeholder="Enter your Password"
          />
          <div className=" flex justify-center content-center  ">
            <input
              type="submit"
              className="bg-[#B3C10F] mr-[10%] rounded-md mt-10 text-white text-2xl my-[30px]  md:w-[400px] sm:w-[50px] h-[50px] "
              value="Log In"
            />
          </div>
         <div className="mr-[15%]">
         <h2 className="text-center text-xl mt-5">
            Don't have an Account?{" "}
            <a href="/signup" > <span className="text-[#B3C10F] font-bold ">Sign Up</span></a>
          </h2>
          <h2 className="text-center pb-5 pt-3 text-xl">
            Forgot Password{" "}
            <a href="/reset" ><span className="text-[#B3C10F] font-bold  text-xl">Reset</span></a>
          </h2>
         </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
