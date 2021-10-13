import React from "react";
import './Button.scss'


const Button = (props) => {

   return (
       <div className='custom-button'>
            <button  disabled={props.disabled} className={`button ${props.className} ${props.rightIcon ? 'button_right' : ''}`} onClick={props.onClick}>
                <props.icon />
               <span>{props.text}</span>
            </button>
       </div>
   )
}

export default Button;