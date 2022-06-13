import './user.css'

export default function user(props){
    return(
        <main className='users-all'>
            <img src={props.img} alt="..."></img>

            <div className='main'>
              <p>{props.info}</p>
              <small>{props.name}</small>
              <h4>{props.price}</h4>  
            </div>
        </main>
    )
}