import './aside.css'
import Icons from './aside'
import data from './aside_darta'
export default function icons(){

   const user=data.map(item =>{
        return(
            <Icons image={item.image}
                 name={item.name}
            />
        )
    })
   return(
   <div className='see-me'>
       <img src='./img/logo.png' alt='...'></img>
       {user}
   </div>
   )
}