
import Aside from '../aside/icons';
import User from '../user/user1'
import Box from '../boxes/Larger';
import Boxi from './main2'
import './main.css';
export default function menu(){
    return(
        <main className='all-menu'>
            <div className='left'>
                <div className='color'>
                  
                </div>
                 <Aside />
            </div>
            <div className='next'>
                 <div>
                     <h2>Menus</h2>
                     <small>as of 24 may 2022</small>
                 </div>
                 <div className='first'>
                           <Boxi/>
                      <User/>
                 </div>
                 <div className='second'>
                     <Box />
                 </div>
            </div>
        </main>
    )
}