import { React  , useState}from "react";
import "./logIn.css";
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { AiFillPropertySafety } from "react-icons/ai";


function LogIn(props) {
  const navigate = useNavigate()

  const api = axios.create({
    baseURL: `https://backend.supamenu.rw`
  })

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const yetHandler = ()=>{
    swal({
      title: "Feature Missing!",
      text: "The resestting password feature is not available now but will be in future!",
      icon: "info",
    });
  }

  const loginHandler = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    }
  
    api.post("/supapp/api/auth/signin" , {
          
      "login": email,
      "password": password
    
  })
  .then(function (response){
    
    localStorage.setItem("accessToken", response.data.token.accessToken);
    localStorage.setItem("refreshToken", response.data.token.refreshToken);

    props.truthhandler(true);

    swal({
      title: "Great!!",
      text: "authanticated successfully",
      icon: "success",
    }).then(() => {
        navigate("/overview")
    });

  })
  .catch(function (error){
    const message = error.response.data.apierror.message
    JSON.stringify(message)
  
    props.falsehandler(false);

    swal({
      title: "Error",
      text: message,
      icon: "error",
      button: "Return"
    });
  })
}


  
  return (
    <div id="bgLogIn">
      <div className="logo">
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
        <form className=" mt-10 ml-10 " action="/overview" onSubmit={loginHandler} >
          <label className="login p-5">Email</label> <br />
          <input
            required
            className=" login1 px-5  py-[10px] mb-[5px] mt-2 text-xl  mx-10 border-2 md:w-[400px] sm:w-[30px] h-[50px] "
            name="fname"
            placeholder="Email Adress"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />{" "}
          <br />
          <label className="login p-5">Password</label>
          <br />
          <input
            required
            className="login1 px-5  py-[10px] mb-[5px] mt-2 text-xl  mx-10 border-2 md:w-[400px] sm:w-[30px] h-[50px] "
            name="fname"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
            <a href="#" ><span onClick={yetHandler} className="text-[#B3C10F] font-bold  text-xl">Reset</span></a>
          </h2>
         </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
