import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import landingimage from './coverphotoweb.jpg'
import HomePageMobileimage from './MobileCoverPhoto.jpg'
import './HomePage.css'
import Videocontent from '../../videocontent/videocontent';
import OurApproach from '../../OurApproach/OurApproach';
import Slider from '../../Slider/Slider';
import FindaTutor from '../../FindaTutor/FindaTutor';
import FindaTutorEnd from '../../FindaTutor/FindaTutor_End';
import BecomeaTutor from '../../BecomeaTutor/BecomeaTutor';
import ReactPixel from 'react-facebook-pixel';
import TutorImage from './BecomeTutorImage.jpg'
import OurApproachDetails from './OurApproachDetails';
import Cookies from 'universal-cookie';
import testimonial1 from './TeacherWebImage.jpg';
import { Col, Container, Row, Image } from 'react-bootstrap';
function HomePage(props) {
    const cookies = new Cookies();
    const [displaytext, settext] = useState("Book a free trial class now! ")
    const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developeRsfacebook.com/docs/facebook-pixel/advanced/advanced-matching
    const options = {
        autoConfig: true, // set pixel's autoConfig. More info: https://developeRsfacebook.com/docs/facebook-pixel/advanced/
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
    },[]);
    const classname = isMobile ? 'd-flex flex-column' : 'd-flex flex-row';
    const contentclassname = isMobile ? 'video-content-mobile' : 'd-flex justify-content-center'
    const ourmission = isMobile ? 'p-mobile' : 'p-window'
    const mission = isMobile ? 'mission-mobile' : 'mission-window'
    return (

        <div className="HomePage" style={{ width: "100%" }}>
            <div className="HomeImage">
                <div className="card bg-dark text-white">
                    {/* <img src={logo} className="card-img" alt="..." /> */}
                    <img src={isMobile ? HomePageMobileimage : landingimage} className="card-img" alt="..." style={{ marginTop: isMobile && !cookies.get("notification") ? "0rem " : !props.notification || cookies.get("notification") && !isMobile ? "3.4rem" : !props.notification || cookies.get("notification") && isMobile ? "3.4rem" : "3.4rem" }} />
                    {/* <ImageContent /> */}
                </div>
            </div>

            <div className="Tutor">
                <FindaTutor />
            </div>
            <div className="video">
                <div className={classname}>
                    <Videocontent isMobile={isMobile} />
                    <div className={contentclassname}>
                        <p className={ourmission}> OUR MISSION </p>
                        {/* <p className = {missioncontent}>We strive to help every child excel with the best tutors, cutting-edge technology and a world class curriculum. Quality online learning is our forte!</p> */}
                        <p className={mission}>We strive to help every child reach their full potential, with the best teachers, cutting-edge technology and world class lesson plans.</p>
                    </div>
                </div>
            </div>

            <div className="OurApproach">
                <OurApproach displayinfo={OurApproachDetails} heading="OUR APPROACH"
                    approachcontent="What Sets Dot & Line Apart ?"
                    details="With a strong network of expert tutors, a vast student body and over 100,000 classes conducted globally, quality online learning is our forte."
                    isMobile={isMobile}
                    cardsno={4}
                    mobilecards={2}
                    homepage="true"
                />
            </div>
            <div className="Image-Slider">
                <Container fluid={isMobile ? false : true} >
                    <Row>
                        <Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Slider isMobile={isMobile} />
                        </Col>
                        <Col>
                            <Image src={testimonial1} style={{ marginTop: isMobile ? "-1rem" : "", height: isMobile ? "100%" : "500px", width: isMobile ? "100%" : "90%" }} fluid />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <div className="slider-content">
                <SliderContent />
            </div> */}
            <div className="FindaTutor">
                <FindaTutorEnd displaytext={displaytext} />
            </div>

            <div className="BecomeTutor">
                <BecomeaTutor image={TutorImage} />
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
