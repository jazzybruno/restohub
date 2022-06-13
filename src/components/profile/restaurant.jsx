import React, { useState } from 'react'
import './restaurant.css'
import NavProf from '../Dashboard/navprof';
import Info from './info';
import RestType from './restype';
import RestMenu from './ownmenu';

const Profile = ()=>{
    const [step, setStep]=useState(1)


    return(
        <div className='mainProfile h-[100%]'>
            <NavProf />
            <div className="profilerun flex ">
                <div className="elementProfile">
                   <p className='font-bold pt-8 text-center text-2xl'>Create Your Restaurant Profile</p>
                   
                <div onClick={()=> setStep(1)} style={{backgroundColor:step===1 ? "#b3c10f": "white" ,width:"100%", height:"10vh", alignContent:"center", paddingLeft:"7px", marginLeft:"0px"}}
                   className="options flex ml-10 mt-10 cursor-pointer">
                       <div className="numberProfile mr-10" style={{backgroundColor:step===1 ? "white": "#b3c10f" }} ><p className='text-center' >1</p></div>
                       <div className="descProfile">
                           <p className='font-bold text-xl'>Restaurant information</p>
                           <p className='text-lg'>Restaurant Name and Address</p>
                       </div>
                   </div>

                   <div
                   onClick={()=> setStep(2)} style={{backgroundColor:step===2 ? "#b3c10f": "white" ,width:"100%", height:"10vh", alignContent:"center", paddingLeft:"7px", marginLeft:"0px"}}
                    className="options flex ml-10 mt-10 cursor-pointer ">
                       <div className="numberProfile mr-10" id='ste2'style={{backgroundColor:step===2 ? "white": "#b3c10f" }} ><p className='text-center' >2</p></div>
                       <div className="descProfile">
                           <p className='font-bold text-xl'>Restaurant Type and timing</p>
                           <p className='text-lg'>Establishment and Cuisine type</p>
                       </div>
                   </div>

                   <div 
                   onClick={()=> setStep(3)} style={{backgroundColor:step===3 ? "#b3c10f": "white" ,width:"100%", height:"10vh", alignContent:"center", paddingLeft:"7px", marginLeft:"0px"}}
                   className="options flex ml-10 mt-10 cursor-pointer">
                       <div className="numberProfile mr-10" style={{backgroundColor:step===3 ? "white": "#b3c10f" }}> <p className='text-center' >3</p> </div>
                       <div className="descProfile">
                           <p className='font-bold text-xl'>Create your own menu</p>
                           <p className='text-lg'>menu resurant food images</p>
                       </div>
                   </div>
                </div>
                
               <div className='filling'>
               {step === 1 && <Info />}
               {step === 2 && <RestType />}
               {step === 3 && <RestMenu />}
               </div>
            </div>
        </div>
    )
}

export default Profile;