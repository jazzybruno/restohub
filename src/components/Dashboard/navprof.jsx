import prof from "../images/bruno.jpg";
// import notification from "../images/not.png";
// import search from "../images/search.png";
import './overview.css'
import {MdNotifications} from 'react-icons/md';


const NavProf =()=>{
  const name = "Jazzy Bruno";
  return(
<div className="navprof flex">
  

  <input
    type="text"
    className="serch text-sm  pl-10"
    placeholder="Enter what to search........."
  />
  <div className="notificate mt-1">
    <MdNotifications className="helloNotifer" />
   {/* <img className=" h-10 mr-10 ml-7 " src={notification} alt="note" /> */}
   </div>
  <div className="info flex ml-auto mr-10 mt-2">
    <p className="text-xl mt-3 mr-10">{name}</p>
    <img className="profilepic " src={prof} alt="note" />
  </div>
</div>
  );
}

export default NavProf