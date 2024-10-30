import React from "react";

function InputComponent(props){
    return(
        <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={(event)=>{props.handleChange(event.target.value,event.target.id)}} value={props.value}/>
    )
}

export default InputComponent;