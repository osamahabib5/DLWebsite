import React, { useState, useEffect, useRef, useContext } from 'react'
import './Findtutor.css'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import BackgroundMobile from './Image/Background-mobile.jpg';
import Background from './Image/tutor.jpg';
import CardTitle from "./CardTitle/CardTitle";
import CardBody from './CardBody/CardBody';
import CardBodyMobile from './CardBodyMobile/CardBodyMobile';
import Tutorsdisplay from './tutorsdisplay/Tutorsdisplay';
import BecomeaTutor from '../../BecomeaTutor/BecomeaTutor';
import Image from "./Image/BecomeTutorImage.jpg";
// import Image from "./Image/BecomeTutorImage.jpg";
import Cookies from 'universal-cookie';
import { TutorsContext } from '../../../Provider';
function Findtutor(props) {
    const cookies = new Cookies();
    const [isMobile, setclassname] = useState(false);
    const showContent = useRef(null);
    const scrollToTop = useRef(null);
    const { tutortype } = useContext(TutorsContext)
    const description = "Find the best tutor for your child!"
    const mobileview = () => {
        if (window.innerWidth < 769) {
            setclassname(true);
        }
        if (window.innerWidth >= 769) {
            setclassname(false);
        }
    }
    const scrolltotutors = () => {
        if (showContent.current) {
            showContent.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
        if (scrollToTop.current) {
            scrollToTop.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    const clearFilters = () => {
        // fillFilters({
        //     ...filters,
        //     teacher_name: null,
        //     budget: 0,
        //     subjects : [],
        //     grade: null,
        //     teaching_mode: null,
        //     tutor_type: null
        // })
    }
    useEffect(() => {
        mobileview();
        window.addEventListener("resize", mobileview);
        window.scrollTo(0, 0)
    }, []);
    // style={{ marginTop: props.notification || cookies.get("notification") ? "3.4rem" : "0rem" }} 
    return (
        <div className="FindATutor">
            <Card className="bg-dark text-white">
                <Card.Img src={isMobile ? BackgroundMobile : Background} alt="Card image" style={{ marginTop: isMobile && !cookies.get("notification") ? "-2rem " : !props.notification || cookies.get("notification") && !isMobile ? "3.4rem" : !props.notification || cookies.get("notification") && isMobile ? "0.4rem" : "3.4rem" }} />
                <Card.ImgOverlay>
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="ourtutor-cardtitle">
                                    {isMobile ? <CardBodyMobile scrolltotutors={scrolltotutors} /> : <CardTitle description={description} />}
                                </div>
                            </Col>
                            {/* <Col>
                                <Col>
                                    <div className = "clearSearchFilters">
                                    <button className = "btn button-cta button-red" onClick = {clearFilters }>
                                        Clear Filters
                                    </button>
                                    </div>
                                </Col>
                            </Col> */}
                        </Row>
                        {isMobile ? <Row>
                            <Col>
                                <div className="d-flex justify-content-center" >
                                    <button type="button" className="btn btn-danger btn-circle btn-xl" onClick={scrolltotutors}>
                                        <FontAwesomeIcon icon={faArrowDown} />
                                    </button>
                                </div>
                            </Col>
                        </Row> : ""}
                        <Row>
                            <Col>
                                <div className="ourtutor-cardtext-window">
                                    <CardBody scrolltotutors={scrolltotutors} clearFilters={clearFilters} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Card.ImgOverlay>
            </Card>
            <div className="displaytutors" ref={showContent} >
                <Tutorsdisplay scrolltotutors={scrolltotutors} scrollToTop={scrollToTop} />
            </div>
            <div>

            </div>
            <div className="BecomeTutor" style = {{marginTop: "4rem"}}>
                <BecomeaTutor image={Image} findtutor="true" height={440} />
            </div>
        </div>
    )
}

export default Findtutor

