
export default function menu(props){
    return(
        <div classname="right_box">
            <form>
            <input type="radio" value={props.name}></input>
            <label>{props.name}</label>  
            </form>
        </div>
    )
}