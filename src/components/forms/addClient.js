import React, { useState } from "react";
import "./logIn.css";
import Image from "../images/logo.png";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AddClient = (props) => {
  const api = axios.create({
    baseURL: `https://backend.supamenu.rw`,
  });

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [representative, setRepresentative] = useState("");
  const [date, setDate] = useState("");
  const [account, setAccount] = useState("");

  const dataHandler = (event) => {

    const token = localStorage.getItem("accessToken");
    const userData = jwtDecode(token);
  
    const mobile = userData.user.mobile;


    event.preventDefault();
    const data = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      category: category,
      representative: representative,
      date: date,
      account: account,
    };
    // console.log(data);

    api
      .post(
        "/supapp/api/service-providers",
        {
       
          address: address,
          category: category,
          closingHour: "4:00",
          completeName: name,
          email: email,
          name: name,
          openingHour: "6:00",
          "customerBookTable": true,
          ownerEmail: "string",
          ownerNames: representative,
          ownerPhoneNumber: mobile,
          phone: phone,
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
        });
      });
  };

  return (
    <div className="p-container">
      <img className="image" src={Image} alt="restohub logo" />
      <div className="p-form-container">
        <form action="/clients" onSubmit={dataHandler}>
          <h1 className="head text-4xl font-bold text-center mt-5 ">Client</h1>
          <div className="input-label-div">
            <label className="big">Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="input-label-div">
            <label className="big">Representative</label>
            <input
              type="text"
              onChange={(e) => setRepresentative(e.target.value)}
            />
          </div>
          <div className="grouped-inputs">
            <div className="first-two">
              <div className="input-label-div">
                <label>Date</label>
                <input type="date" onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className="input-label-div">
                <label>Address</label>
                <input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="second-two">
              <div className="input-label-div">
                <label>Category</label>
                <input
                  type="text"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="input-label-div">
                <label>Phone</label>
                <input
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="input-label-div">
            <label className="big">Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-label-div">
            <label className="big">Bank account</label>
            <input type="text" onChange={(e) => setAccount(e.target.value)} />
          </div>
          <button type="submit">Add Client</button>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
