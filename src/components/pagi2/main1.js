import './main.css';
export default function box(props){
    return(
        <main> 
            <div className="box" >
                <h3>{props.value}</h3>
            </div>  
        </main>
    )
}