import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import CourseBannerWeb from './Images/Image1.JPG'
import CourseBannerWeb from './Images/ProgramPage.jpg'
// import CourseBannerWeb from './Images/Image3.JPG'
import CourseBannerMobile from './Images/mobile.jpg'
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
            <div style={{ height: isMobile ? "500px" : "" }}>
                <img src={isMobile ? CourseBannerMobile : CourseBannerWeb} style={{ height: isMobile ? "auto" : "560px" }} alt="Card image" className="card-img" />
                <div className={cardtextclass}>
                    {!isMobile ? <div className="overlaycoursesheading" /> : ""}
                    <div style = {{marginTop: "-9rem", marginLeft:"1rem"}}>
                        <h5 className="our-tutors">PROGRAMS & COURSES</h5>
                    </div>

                    <h5 className="card-title" style={{ marginTop: isMobile ? "0rem!important" : "1rem", width: isMobile ? "auto!important" : "800px", lineHeight: isMobile ? "" : "40px" }}>

                        Developed by experts and taught by trained tutors, explore our wide range of world-class online programs.
                    </h5>
                </div>
            </div>

        </div>

    )
}

export default BackgroundImage
