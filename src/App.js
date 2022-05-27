import React  from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './components/Home/home';
import LogIn from './components/forms/LogIn';
import SignUp from './components/forms/signUp';
import AddClient from './components/forms/addClient';
import Overview from './components/Dashboard/overview';
import Clients from './components/clients/clients';
import Menu from './components/Menu/menu';
import Order from './components/orders/order';
import Profile from './components/profile/restaurant';


const App = () => {
 return(
  
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/login' element={<LogIn />}></Route>
       <Route path='/signup' element={<SignUp />}></Route>
       <Route path='/clients/new' element={<AddClient />}></Route>
       <Route path='/overview' element={<Overview />}></Route>
       <Route path='/clients' element={<Clients />}></Route>
       <Route path='/menu' element={<Menu />}></Route>
       <Route path='/orders' element={<Order />}></Route>
       <Route path='/profile' element={<Profile />}></Route>
     </Routes>
   </BrowserRouter>

 )
}

export default App