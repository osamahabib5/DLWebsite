import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseBannerWeb from './Images/web.jpg'
import CourseBannerMobile from './Images/mobile.jpg'
import { Card } from 'react-bootstrap';
import VideoComponents from './VideoComponents/VideoComponents';
import './BackgroundImage.css';
const BackgroundImage = (props) => {
    const [isMobile, setclassname] = useState(false);

    const mobileview = () => {
        if (window.innerWidth < 769) {
            setclassname(true);
        }
        if (window.innerWidth >= 769) {
            setclassname(false);
        }
    }
    useEffect(() => {
        mobileview();
        window.addEventListener("resize", mobileview);
    });
    const cardtextclass = isMobile ? 'container-fluid' : 'card-img-overlay';
    return (
        <div>
            <div style = {{height : isMobile ? "360px" : "" }}>
                <img src={isMobile ? CourseBannerMobile: CourseBannerWeb} style={{ height: isMobile ? "auto" : "560px" }} alt="Card image" className="card-img" />
                <div className={cardtextclass}>
                    <div className = "overlaycoursesheading"/>
                     <h5 className="card-title">Programs & Courses</h5>
                    <p className="card-text">
                        <div className="programs">
                            <VideoComponents changeVideo={props.changeVideo} />
                        </div>

                    </p>
                </div>
            </div>

        </div>

    )
}

export default BackgroundImage
