import React,{useState} from 'react'
import './NotificationToast.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import close from '../logo/Path.png'
const NotificationToast = (props) =>{
      return (
        <div className="notification_bar">
            <div className="d-flex justify-content-end"  >
                <img src = {close} alt = "Text" className = "rounded float-right" onClick = {props.click}/>
            </div>  
            <div className="d-flex justify-content-center">
                New Learning Packs available! 
            </div>
        </div>
    )
}

export default NotificationToast
