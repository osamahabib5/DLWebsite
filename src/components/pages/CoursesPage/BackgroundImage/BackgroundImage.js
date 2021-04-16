import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import CourseBannerWeb from './Images/Image1.JPG'
import CourseBannerWeb from './Images/ProgramPage.jpg'
// import CourseBannerWeb from './Images/Image3.JPG'
import CourseBannerMobile from './Images/mobile.jpg'
import VideoComponents from './VideoComponents/VideoComponents';
import './BackgroundImage.css';
import Cookies from 'universal-cookie';
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
    const cookies = new Cookies();
    return (
        <div>
            <div style={{ height: isMobile ? "500px" : "" }}>
                <img src={isMobile ? CourseBannerMobile : CourseBannerWeb} style={{
                    marginTop: isMobile && !cookies.get("notification") ? "0rem " : !props.notification || cookies.get("notification") && !isMobile ? "3.4rem" : !props.notification || cookies.get("notification") && isMobile ? "3.4rem" : "3.4rem"
                    , height: isMobile ? "auto" : "560px" }} alt="Card image" className="card-img" />
                <div className={cardtextclass} 
                style = {{
                    background: isMobile ? "#00ABBD": ""
                }}
                >
                    {!isMobile ? <div className="overlaycoursesheading" /> : ""}
                    <div style={{ marginTop: isMobile ? "1rem": "-9rem", marginLeft: "1rem" }}>
                        <h5 className="our-tutors"
                        style = {{
                            justifyContent : isMobile ? "center": "",
                            color: "white"
                        }}
                        >PROGRAMS & COURSES</h5>
                    </div>

                    <div className = "programstitle">
                        <h5 className="card-title" >

                            Developed by experts and taught by trained tutors, explore our wide range of world-class online programs.
</h5>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default BackgroundImage
