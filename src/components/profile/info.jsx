import React from 'react'
import { useState } from 'react'
import './restaurant.css'

const Info = (props)=>{
    const [restname , setRestname] = useState('')
    const [restowner , setRestowner] = useState('')
    const [restcomp , setRestcomp] = useState('')
    const [restnum , setRestnum] = useState('')
    const [restemail , setRestemail] = useState('')
    const [info , setInfo] = useState([])
    const data = {
        restname : restname,
        restowner : restowner,
        restcomp : restcomp,
        restnum : restnum,
        restemail : restemail
    }

     

     const dataHandler = (e) => {
        e.preventDefault()
        setInfo([...info , data]);
        // console.log(data);
        let num = 2;
        props.getData(data , num);
     }

        return(
            <div className='ownMenu' id='res-info-container'>
               <form action="" className='res-info' onSubmit={dataHandler}>
                   <div>
                   <label className='res-info-label'  htmlFor="">Restaurant Information</label>
                   <input onChange={e => setRestname(e.target.value)} className='longOnes' type="text" name="" id="" placeholder='Restaurant name' />
                   <input onChange={e=> setRestcomp(e.target.value)} className='longOnes' type="text" name="" id="" placeholder='Restaurant complete name' />
                   <label className='res-info-label' htmlFor="">Contact number @ Restaurant</label>
                   <input onChange={e=> setRestnum(e.target.value)} className='longOnes' type="text" name="" id="" placeholder='+250       mobile number' />
                   <div className="flex gap-24">
                       <input onChange={e=> setRestowner(e.target.value)} className='shortOnes' type="text" name="" id="" placeholder='owner name' />
                       <input onChange={e=> setRestemail(e.target.value)} className='shortOnes' type="text" name="" id="" placeholder='Restaurant email name' />
                   </div>
                   </div>
                   <button type='submit' className='buttonProfile' >Next</button>
               </form>
             
            </div>
        )
}

export default Info