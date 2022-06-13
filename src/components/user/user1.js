import './style.css';
import User from './User';
import data from './data' 
export default function user(){
    const use= data.map(single =>{
        return(
            <div>
                <User
             img={single.image}
             info={single.info}
             name={single.name}
             price={single.price}
            />
            </div>
        )
    })
    return(
        <main>
            {use}
        </main>
    )
}