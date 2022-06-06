import './aside.css'
export default function aside(props){
    return(
                <div className='iconsx'>
                    <img src={props.image} alt='...'></img>
                    <h4>{props.name}</h4>
            </div>
    )
}