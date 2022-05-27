import React, { useState } from 'react'
import './restaurant.css'
import NavBar from '../Dashboard/navbar';
import Info from './info';
import RestType from './restype';
import RestMenu from './ownmenu';

const Profile = ()=>{
    const [step, setStep]=useState(1)

    return(
        <div className='mainProfile h-[100%]'>
            <NavBar />
            <div className="profilerun flex ">
                <div className="elementProfile">
                   <p className='font-bold pt-8 text-center text-2xl'>Create Your Restaurant Profile</p>
                   
                   <div 
                   onClick={()=> setStep(1)}
                   className="options flex ml-10 mt-10 cursor-pointer">
                       <div className="numberProfile mr-10"><p className='text-center' >1</p></div>
                       <div className="descProfile">
                           <p className='font-bold text-xl'>Restaurant information</p>
                           <p className='text-lg'>restaurant name and address</p>
                       </div>
                   </div>

                   <div
                   onClick={()=> setStep(2)}
                    className="options flex ml-10 mt-10 cursor-pointer">
                       <div className="numberProfile mr-10"><p className='text-center' >2</p></div>
                       <div className="descProfile">
                           <p className='font-bold text-xl'>Restaurant Type and timing</p>
                           <p className='text-lg'>establishment and cuisine type</p>
                       </div>
                   </div>

                   <div 
                   onClick={()=> setStep(3)}
                   className="options flex ml-10 mt-10 cursor-pointer">
                       <div className="numberProfile mr-10"> <p className='text-center' >3</p> </div>
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