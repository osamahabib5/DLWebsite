import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/landing_page.png'
import landingimage from '../../images/Landingpage.png'
import './HomePage.css'
import ImageContent from '../../ImageContent/ImageContent';
import Videocontent from '../../videocontent/videocontent';
import OurApproach from '../../OurApproach/OurApproach';
import Slider from '../../Slider/Slider';
import FindaTutor from '../../FindaTutor/FindaTutor';
import FindaTutorEnd from '../../FindaTutor/FindaTutor_End';
import BecomeaTutor from '../../BecomeaTutor/BecomeaTutor';
import ReactPixel from 'react-facebook-pixel';
import TutorImage from './Image2.jpg'
function HomePage(props) {
    const [displaytext, settext] = useState("Book a free trial class now! ")
    const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
    const options = {
        autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
        debug: false, // enable logs
    };
    ReactPixel.init('4212718168756467', advancedMatching, options);

    ReactPixel.pageView(); 
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
    const classname = isMobile ? 'd-flex flex-column' : 'd-flex flex-row';
    const contentclassname = isMobile ? 'video-content-mobile' : 'd-flex justify-content-center'
    const ourmission = isMobile ? 'p-mobile' : 'p-window'
    const mission = isMobile ? 'mission-mobile' : 'mission-window'
    return (

        <div className="HomePage" style={{ width: "100%" }}>
            <div className="HomeImage">
                <div className="card bg-dark text-white">
                    {/* <img src={logo} className="card-img" alt="..." /> */}
                    <img src={landingimage} className="card-img" alt="..." style = {{marginTop: !props.notification ? "3rem" : "-0.1rem" }} />
                    <ImageContent />
                </div>
            </div>

            <div className="Tutor">
                <FindaTutor />
            </div>
            <div className="video">
                <div className={classname}>
                    <Videocontent isMobile = {isMobile}/>
                    <div className={contentclassname}>
                        <p className={ourmission}> OUR MISSION </p>
                        {/* <p className = {missioncontent}>We strive to help every child excel with the best tutors, cutting-edge technology and a world class curriculum. Quality online learning is our forte!</p> */}
                        <p className={mission}>We strive to help every child reach their full potential, with the best teachers, cutting-edge technology and world class lesson plans.</p>
                    </div>
                </div>
            </div>

            <div className="OurApproach">
                <OurApproach />
            </div>
            <div className="Image-Slider">
                <Slider isMobile = {isMobile}/>

            </div>
            {/* <div className="slider-content">
                <SliderContent />
            </div> */}
            <div className="FindaTutor">
                <FindaTutorEnd displaytext = {displaytext}/>
            </div>
            <div className="BecomeTutor">
                <BecomeaTutor image = {TutorImage}/>
            </div>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                     gtag('config', 'G-5VR6Q65HZ0');
                    `}}
            ></script>
        </div>

    )
}

export default HomePage
