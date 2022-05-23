import React from "react";
import "./logIn.css";
function SignUp() {
  return (
    <div id="bgSignUp" className=" flex justify-between w-full h-[100vh]">
      <div>
        <h1 className="text-6xl text-white  font-[bold] pl-[300px]">
          Resto<span className="text-[#B3C10F]">Hub</span>
        </h1>
      </div>
      <div className=" bgForm2">
        <div className="flexStuff">
          <h4 className="font-bold p-[10px] text-[#527a7a] mx-48  text-4xl">
            Welcome
          </h4>
          <h2 className="pb-2 pt-1  mx-32   text-xl w-[100%] ">
            Sign Up to Resto<span>Hub</span>
          </h2>
        </div>
        <form className="" action="/overview">
          <label className=" login2 px-5 py-2 ">First Name</label> <br />
          <input
            className="login3 border-2   mx-20 px-5 py-2 mb-[10px] mt-[5px] w-[73%] "
            name="fname"
            placeholder="Enter First Name"
          />{" "}
          <br />
          <label className=" login2 px-5 py-2 ">Last Name</label>
          <br />
          <input
            className="login3 px-5 h-14 py-[5px] mb-[10px]  mx-20 mt-[5px] border-2  w-[73%] "
            name="fname"
            placeholder="Enter Last Name"
          />
          <label  className=" login4  py-2 ">Phone</label> <br />
          <input
            className=" login3 border-2 h-14 mx-20 px-5 py-2 mb-[10px] mt-[5px]  w-[73%]"
            name="fname"
            placeholder="Enter Phone Number"
          />{" "}
          <br />
          <label className=" login4  py-2 ">Email</label>
          <br />
          <input
            className=" login5 px-5 h-14 py-[5px] mx-20 mb-[10px]  mt-[5px] border-2  w-[73%]"
            name="fname"
            placeholder="Email Adress"
          />
          <label className=" login2 p-5 ">Password</label>
          <br />
          <input
            className=" login3 px-5 h-14 py-[5px] mb-[10px] mx-20 mt-[5px] border-2   w-[73%] "
            name="fname"
            placeholder="Enter your Password"
          />
          <div className=" flex justify-center content-center  ">
            <input
              type="submit"
              className=" login3 bg-[#B3C10F] h-14  text-xl    text-white text-1.5xl mt-[30px] mb-[10px]  w-[73%] "
              value="Sign Up"
            />
          </div>
          <h2 className="text-center text-xl">
            Already have an Account?{" "}
           <a href="/login" className=""> <span className="text-[#B3C10F] font-bold ">Log In</span></a>
          </h2>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
