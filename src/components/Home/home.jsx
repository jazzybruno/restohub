import React from 'react'
import './home.css'
import Landing from '../UI/landing'
import data  from './data'
// import Footer from '../UI/footer'

const Home =  ()=>{
    return (
        <div className="home">
           <div className="homeSecond">
               <div className="words">
                   <h1>Resto<span>Hub</span></h1>
                   <h2>Register your restaurant on RestoHub</h2>
                   <h3>for free and get nore revenue</h3>
                   <div className='gap-10'>
                  <a className='btn1' href="/login">Restaurant already registred? Signin</a>
                  <a className='btn2' href="/signup"> Register your Restaurant</a>
                   </div>
               </div>
           </div>
              <h1 className='how'>How it works</h1>
           <div className="reusable">
           {data.map(v=> <Landing img={v.img} title={v.title} desc={v.desc} />)}
           </div>
           {/* <Footer /> */}
        </div>
        
    )
}

export default Home