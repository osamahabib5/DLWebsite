import React, { useEffect, useState } from 'react'
import './NotificationToastMobile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import close from '../logo/Path.png'
import baseUrl from '../../baseUrl/baseUrl';
import axios from 'axios';
const NotificationToastMobile = (props) => {
    const [notificationtext, setnotificationtext] = useState("");
    const getNotificationData = async () => {
        await axios.get(baseUrl + "/api/getInfo/notification").then(response => {
            setnotificationtext(response.data.data.notification_toast)
        }).catch(error => {
            console.log("Error: " + error)
        })
    }
    useEffect(() => {
        getNotificationData();
    }, [notificationtext])
    return (
        <div className="notification-mobile" onClick={props.click}>
            <div className="d-flex justify-content-end mobile"  >
                <img src={close} alt="Text" className="image" onClick={props.click} />
            </div>
            <div className="d-flex justify-content-center mobile" dangerouslySetInnerHTML={{ __html: notificationtext }} />
        </div>
    )
}

export default NotificationToastMobile
