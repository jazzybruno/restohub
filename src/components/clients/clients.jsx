import {React , useEffect , useState} from "react";
import "./clients.css";
import Sidebar from "../Dashboard/sidebar";
import NavBar from "../Dashboard/navbar";
import plus from '../images/plus.png'
import Data from './data'
import Client from "../UI/clients";
import axios from 'axios';
import swal from 'sweetalert'

const Clients = () => {

  const api = axios.create({
    baseURL: `https://backend.supamenu.rw`
  })

  const [data , setData] = useState([]) 
  const [category , setCategory] = useState([])

  useEffect( ()=>{
    api.get('/supapp/api/service-providers',{
      headers:{
        'accessToken': `Bearer ${localStorage.getItem('accessToken')}`,
        'Auhorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(function(response){
      let array = response.data.content;
      console.log(response.data)
      setData(array)
     
      
    })
    .catch(function(error){
      console.log(error);
      swal({
        title: "Error!!",
        text: error.message,
        icon: "error",
      })
    })
    

  } , [])


  useEffect( ()=>{
    api.get('/supapp/api/service-provider-categories',{
      headers:{
        'accessToken': `Bearer ${localStorage.getItem('accessToken')}`,
        'Auhorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(function(response){
      let array = response.data.content;
      console.log(response.data)
      setCategory(array[0])
     
      
    })
    .catch(function(error){
      console.log(error);
      swal({
        title: "Error!!",
        text: error.message,
        icon: "error",
      })
    })
    

  } , [])


  return (
    <div className="overview">
      <Sidebar />
      <div className="otherClients">
        <NavBar />
        <div className="newClient mt-20 ml-80">
          <div>
            {" "}
            {/* <p className="text-3xl font-light ">Overview</p>{" "} */}
          </div>
          <div>
            {" "}
            <form>
              <label className="   " htmlFor="">New Client</label>
               <div className="flex  mt-5 ">
              <input className="text-client" type="text" placeholder="Add New Client"/>
              <a href="/clients/new"> <img className="h-8 ml-6 cursor-pointer" src={plus} alt="add him/her" /></a>
               </div>
            </form>{" "}
          </div>
        </div>
        <div className="allclients bg-white   w-[90%] ml-[5%] mt-10 rounded-xl">
            <p className="ml-20 pt-10 text-[150%] ">Clients</p>
            <div className="header flex font-light text-xl ml-[4%] mt-7">
                <p>Client Details</p>
                <p className="ml-[25%]">Sales</p>
                <p className="ml-[22%]">Detailed Report</p>
                <p className="ml-[15%]">Category</p>
            </div>
           <div className="listClients mb-10">
           {data.map(v=> <Client name={v.name} updated={v.updatedAt} date={v.date}  type={v.serviceCategory.name} />)}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
