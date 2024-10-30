import React from "react";
 
function ButtonComponent(props){
      return(
            <button className={props.className} onClick={props.handleClick}>{props.BtnText}</button>
       );
}
export default ButtonComponent;