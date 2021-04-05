import React, { useState, useEffect, useRef } from 'react'
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
import Image from "./Image/Image.png";
import Cookies from 'universal-cookie';
function Findtutor(props) {
    const cookies = new Cookies();
    const [isMobile, setclassname] = useState(false);
    const showContent = useRef(null);
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
                <Card.Img src={isMobile ? BackgroundMobile : Background} alt="Card image" style = {{marginTop: props.notification ||cookies.get("notification") ? "3.4rem" : "0rem"}}/>
                <Card.ImgOverlay>
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="ourtutor-cardtitle">
                                    {isMobile ? <CardBodyMobile scrolltotutors = {scrolltotutors}/> : <CardTitle description = {description}/>}
                                </div>
                            </Col>
                        </Row>
                        {isMobile ? <Row>
                            <Col>
                                <div className="d-flex justify-content-center" >
                                    <button type="button" className="btn btn-danger btn-circle btn-xl" onClick = {scrolltotutors}>
                                        <FontAwesomeIcon icon={faArrowDown} />
                                    </button>
                                </div>
                            </Col>
                        </Row> : ""}
                        <Row>
                            <Col>
                                <div className="ourtutor-cardtext-window">
                                    <CardBody scrolltotutors = {scrolltotutors}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Card.ImgOverlay>
            </Card>
            <div className="displaytutors" ref = {showContent} >
                <Tutorsdisplay />
            </div>
            <div>

            </div>
            <div className="Ourtutors">
                <BecomeaTutor image={Image} />
            </div>
        </div>
    )
}

export default Findtutor

