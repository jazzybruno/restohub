import prof from "../images/prof.png";
import notification from "../images/not.png";
import search from "../images/search.png";
import './overview.css'


const NavBar =()=>{
  const name = "Jazzy Bruno";
  return(
<div className="navbar flex">
  
  <input
    type="text"
    className="serch text-sm  pl-10"
    placeholder="Enter what to search........."
  />
  <div className="info flex ml-auto mr-10 mt-2">
    <img className="h-10" src={search} alt="" />
    <img className="h-10 mr-10 ml-7 " src={notification} alt="note" />
    <p className="text-xl mt-2 mr-10">{name}</p>
    <img className="h-10" src={prof} alt="note" />
  </div>
</div>
  );
}

export default NavBar