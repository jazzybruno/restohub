import React from "react";
import "./restaurant.css";
import { useState , useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const RestMenu = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const api = axios.create({
    baseURL : `https://backend.supamenu.rw`
   });

   const navigate = useNavigate()

  const dataHandler = (e) => {
    e.preventDefault();
    const data1 = props.Data1;
    const data2 = props.Data2;
    const data3 = {
      name: name,
      price: price,
      description: description,
    };
    const all = [data1, data2, data3];
    console.log(all);

    const token = localStorage.getItem("accessToken");
    const userData = jwtDecode(token);
  
    // const mobile = userData.user.mobile;

    api
    .post(
      "/supapp/api/service-providers",
      {
     
        address:  data2.location,
        category: data2.type,
        closingHour: data2.close,  
        completeName: data1.restcomp,
        email: data1.restemail,
        name: data1.restname,
        openingHour: data2.open,
        "customerBookTable": true,
        ownerEmail: "string",
        ownerNames: data1.restowner,
        ownerPhoneNumber: "0788909878",
        phone: data1.restnum,
        "status": "PENDING"
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "content-type": "application/json",
        },
      }
    )

    .then(function (response) {
      console.log(response.data.message);
      swal({
          title: "Great!!",
          text: response.data.message,
          icon: "success",
          }).then(() => {
              navigate("/clients")
          })
    })
    .catch(function (error) {
      console.log(error);
      swal({
        title: "Error",
        text: error.response.data.apierror.message,
        icon: "error",
      }).then(()=>{
        navigate("/profile")
      });
    });
  };

  return (
    <div className="ownMenu">
      <div className="buttonsMenus flex gap-[8%]">
        <button className="menuoption">Drink</button>
        <button className="menuoption">Starter</button>
        <button className="menuoption">Appetizer</button>
        <button className="menuoption">Desert </button>
        <button className="menuoption">Main</button>
      </div>
      <form action="/overview" className="adding" onSubmit={dataHandler}>
        <label htmlFor="">Name</label>
        <input
          className="longForms"
          type="text"
          placeholder="menu name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">price</label>
        <input
          className="longForms"
          type="text"
          placeholder="RWF"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="">menu description</label>
        <input
          className="longForms"
          type="text"
          placeholder="ingredients"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="">Image</label>
        <input className="longForms" type="text" placeholder=" image caption" />
        <button className="gone mb-10">Add more</button>
        <button className="gone ml-10" type="submit">
          Finish
        </button>
      </form>
    </div>
  );
};

export default RestMenu;
