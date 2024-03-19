export default function Input(props){
    return(
        <div className= "flex flex-col">
            <label className="text-white" >{props.label}</label>
            <span className=" text-sm text-gray-200">{props.description}</span>
            <input className="text-black rounded-md shadow-md p-3" placeholder={props.placeholder}></input>
        </div>
    )
}