import {React , useState } from "react";
import "./logIn.css";
import axios from 'axios';
import swal from 'sweetalert';

function SignUp() {

    const api = axios.create({
      baseURL: `https://backend.supamenu.rw`
    })

   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const dataHandler = (e) => {
        e.preventDefault();
        const data={
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            phone: phone
        }

        api.post("/supapp/api/auth/admin/signup" , {
          
            "email": email,
            "firstName": firstName,
            "lastName": lastName,
            "mobile": phone,
            "password": password
          
        })
        .then(function (response){
          setEmail("")
        setPhone("")
        setFirstName("")
        setLastName("")
        setPassword("")
        const message = response.data.message
            JSON.stringify(message)
            swal({
              title: "Great!!",
              text: message,
              icon: "success",
            });
            console.log(response.data.message);

        })
        .catch(function (error){
          let password = error.response.data.apierror.details.password
          let email = error.response.data.apierror.details.email
          let phone = error.response.data.apierror.details.mobile
          JSON.stringify(password)
          JSON.stringify(email)
          JSON.stringify(phone)
           if(password){
            swal({
              title: "Error",
              text: password,
              icon: "error",
            });
           }  

           if(email){
            swal({
              title: "Error",
              text: email,
              icon: "error",
            });
           }

           if(phone){
            swal({
              title: "Error",
              text: phone,
              icon: "error",
            });
           }
         
           console.log(error.response.data.apierror.details);

        })

        
    }

  return (
    <div id="bgSignUp" className=" flex justify-between w-full h-[100vh] ">
      <div>
        <h1 className="text-6xl text-white  font-[bold] pl-[300px]">
          Resto<span className="text-[#B3C10F]">Hub</span>
        </h1>
      </div>
      <div className=" bgForm2">
        <div className="flexStuff">
          <h4 className="font-bold py-[5px] text-[#527a7a] text-center  text-4xl">
            Welcome
          </h4>
          <h2 className="pb-2 pt-1 mt-5 mb-5 text-center  text-2xl">
            Sign Up to Resto<span>Hub</span>
          </h2>
        </div>
        <form className="" action="/overview" onSubmit={dataHandler}>
          <label className=" login2 px-5 py-2 ">First Name</label> <br />
          <input
          required
          value={firstName}
             onChange={(e) => setFirstName(e.target.value)}
            className="login3 border-2   mx-[15%] px-5 py-2 mb-[2%] mt-[5px] md:w-[400px] sm:w-[30px]"
            name="fname"
            placeholder="Enter First Name"
          />{" "}
          <br />
          <label className=" login2 px-5  ">Last Name</label>
          <br />
          <input
          required
          value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="login3 px-5 h-14 py-[5px] mb-[2%]   mx-[15%] mt-[5px] border-2 md:w-[400px] sm:w-[30px] "
            name="fname"
            placeholder="Enter Last Name"
          />
          <label  className=" login4   ">Phone</label> <br />
          <input
          required
          value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className=" login3 border-2 h-14  mx-[15%] px-5 py-2 mb-[2%] mt-[5px] w-[400px] "
            name="fname"
            placeholder="Enter Phone Number"
          />{" "}
          <br />
          <label className=" login4   ">Email</label>
          <br />
          <input
          required
          value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" login5 px-5 h-14 py-[5px]  mx-[15%] mb-[2%]  mt-[5px] border-2 w-[400px]"
            name="fname"
            placeholder="Email Adress"
          />
          <label className=" login2 ml-[5rem] ">Password</label>
          <br />
          <input
          required
          value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" login3 px-5 h-14 py-[5px] mb-[2%]  mx-[15%] mt-[5px] border-2  w-[400px] "
            name="fname"
            placeholder="Enter your Password"
          />
          <div className=" flex justify-center content-center  ">
            <input
             action="/overview"
              type="submit"
              className=" login3 bg-[#B3C10F] h-14  text-xl    text-white text-1.5xl mt-[25px] mb-[10px]  w-[400px] "
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
