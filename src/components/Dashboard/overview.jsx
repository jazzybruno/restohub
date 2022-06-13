import {React , useState , useRef} from "react";
import "./overview.css";
import Data from "./data/Data";
import View from "../UI/view";
import Chart from "../UI/Barchat";
import Types from "../UI/types";
import Data_last from "./data/data_last";
import Data_last1 from "./data/data_last1";
import SideBar from "./sidebar";
import NavBar from "./navbar";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiDeliveryDrone } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import slider from "./data/slider";
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css'
import { Navigation , EffectFade , Autoplay , Pagination } from "swiper";
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate()

  const setSlider = () => {
   navigate('/login')
  }

  return (
    <div className="overview">
      <SideBar />
      <div className="otherbar">
        <NavBar />

        <div className="chart  mt-10  ">
           <h1>Charts of Menu and Orders with reference to time:</h1>
          <div className="chartreal w-[85%]">
            <Chart />
          </div>
        </div>

        <div className="views flex gap-24 mx-28  mt-10">
          {Data.map((v) => (
            <View key={v.id} img={v.img} title={v.title} amount={v.amount} />
          ))}
        </div>
        

        <div className="overlast flex mx-32 w-[70%] ">
          <div className="mt-10 ml-10">
            <div className="types1 flex  gap-40 ">
              {Data_last.map((items) => (
                <Types
                  key={items.id}
                  name={items.name}
                  sale={items.sale}
                  details={items.details}
                  type={items.type}
                  ex={items.ex}
                  num={items.num}
                />
              ))}
            </div>
            <div className="types2 flex gap-40 ">
              {Data_last1.map((items) => (
                <Types
                  key={items.id}
                  name={items.name}
                  sale={items.sale}
                  details={items.details}
                  type={items.type}
                  ex={items.ex}
                  num={items.num}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex gap-40 ml-36 mt-[3.7rem]">
              <div className="stats  mb-20 ">
                <GiDeliveryDrone className="iconsSide text-black mx-[auto] mt-5 mb-[-5px]" />
                <p className="mt-8 text-xl font-normal ">Orders</p>
                <p className="amount">67890</p>
              </div>
              <div className="stats  mb-20">
                <FaShoppingBag className="iconsSide text-black mx-[auto] mt-5" />
                <p className="mt-5 text-xl font-normal">Items</p>
                <p className="amount">67890</p>
              </div>
            </div>
            <div className="flex gap-40 ml-36">
              <div className="stats  mb-20">
                <AiOutlineUsergroupAdd className="iconsSide text-black mx-[auto] mt-5" />
                <p className="mt-5 text-xl font-normal">Clients</p>
                <p className="amount">67890</p>
              </div>
              <div className="stats  mb-20">
                <AiOutlineFieldTime className="iconsSide text-black mx-[auto] mt-5" />
                <p className="mt-5 text-xl font-normal">Order/Hour</p>
                <p className="amount">67890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="addIt mx-36   bg-white shadow-md rounded-md">
          <div className="flex ">
            <div className="mt-[3.9rem] font-bold ml-20  ">
              Create A New Reastaurant:
            </div>
            <div className=" flex gap-10 mt-10 ml-32">
              <div className="flex gap-3 mt-5">
                <div className="theinput  bg-white "></div>
                <span className="font-bold">Restaurant</span>
              </div>
              <div className="flex  gap-3 mt-5 ">
                <div className="theinput  bg-white "></div>
                <span className="font-bold">Hotel</span>
              </div>
              <div className="flex  gap-3 mt-5">
                <div className="theinput  bg-white "></div>
                <span className="font-bold">Pub</span>
              </div>
              <div className="flex  gap-3 mt-5">
                <div className="theinput  bg-white "></div>
                <span className="font-bold">Bar</span>
              </div>
              <div className="flex mb-5">
                <a href="/profile" onClick={setSlider} className="bg-[#b3cf10] p-5 rounded-md shadow-md mx-24 text-black hover:bg-white text-black border-[#b3cf10] border-2">
                  Create Profile
                </a>
              </div>
              <div className="flex"></div>
            </div>
          </div>

          <div  className="mt-10 bg-green ">
            <Swiper
             modules={[Navigation,EffectFade,Autoplay,Pagination]}
             pagination
             autoplay={{delay : 1000}}
             effect={'fade'}
             speed={1000}
             slidesPerView={1}
             loop={true}
            >

             <SwiperSlide className={'swipper'}>
               <img className="h-20" src={slider[0].image} alt="" />
             </SwiperSlide>

             <SwiperSlide  className={'swipper'}>
               <img src={slider[1].image} alt="" />
             </SwiperSlide>

             <SwiperSlide className={'swipper'}>
               <img src={slider[2].image} alt="" />
             </SwiperSlide>

             <SwiperSlide className={'swipper'}>
               <img src={slider[3].image} alt="" />
             </SwiperSlide>

            </Swiper>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Overview;
