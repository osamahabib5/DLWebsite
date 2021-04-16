import React, { useEffect, useState } from 'react'
import './NotificationToast.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import close from '../logo/Path.png'
import baseUrl from "../../baseUrl/baseUrl";


const NotificationToast = (props) => {
    const getNotificationData = async () => {
        await axios.get(baseUrl + "/api/getInfo/notification").then(response => {
            setnotificationtext(response.data.data.notification_toast)
        }).catch(error => {
            console.log("Error: " + error)
        })
    }
    const [notificationtext, setnotificationtext] = useState(null);
    useEffect(() => {
        getNotificationData();
    }, [notificationtext])
    return (
        <div className="notification_bar">
            <div className="d-flex justify-content-end"  >
                <img src={close} style={{ cursor: "pointer" }} alt="Text" className="rounded float-right" onClick={props.click} />
            </div>
            <div className="d-flex justify-content-center" dangerouslySetInnerHTML={{ __html: notificationtext }} />
        </div>
    )
}

export default NotificationToast
