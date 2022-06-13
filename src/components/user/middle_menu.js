import './style.css';
import Top from './top_menu'
import Box from './middle_i';
import Boxright from '../boxes/Larger'
export default function middle (){
    return(
        <main className='main1'>
           <h3>Menu</h3>
           <div className='main_container'>
                    <div className='top_middle'>
                       <h3>Menus</h3>
                       <small>as of 25 May 2022</small>
                    </div>
                    <div className='bottom_middle'>
                        <div className='box-class'>
                        <Box value ="Drink"/>
                        <Box value="Starter"/>
                        <Box  value="Appetizer"/>
                        </div>
                       <Top />
                       <div className='bott'>
                            <h4>View more</h4>
                       </div>
                    </div>
                    <div className='right-right'>
                       <Boxright/>
                    </div>
                 </div>
                 
        </main>
    )
}