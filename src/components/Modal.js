import React from 'react'
import ReactDom from "react-dom"
import "./styles/Modal.css"

export default function Modal(props) {
    if(!props.isOpen){
       return null
   }
   return ReactDom.createPortal( 
    <div className="Modal" onClick={props.onClose}>
       <div className="Modal__container">
        <button className="Modal__close-button" onClick={props.onClose}>X</button>
        {props.children}
       </div>
    </div>
    ,document.getElementById("modal"))
    
}
