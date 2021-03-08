import React from 'react'
import './NotificationToastMobile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import close from '../logo/Path.png'
const NotificationToastMobile = (props) => {
    return (
        <div className="notification-mobile" onClick={props.click}>
            <div className="d-flex justify-content-end mobile"  >
                <img src={close} alt="Text" className="image" onClick={props.click} />
            </div>
            <div className="d-flex justify-content-center mobile">
                New Learning Packs available! Lorem ipsum dolor sit amet!
                Consectetur adipiscing elit risus fingilla.
            </div>
        </div>
    )
}

export default NotificationToastMobile
