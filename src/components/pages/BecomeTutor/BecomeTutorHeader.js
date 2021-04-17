import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import tutorpage from "./tutorpage.jpg";
import Cookies from 'universal-cookie';
function BecomeTutorHeader(props) {
    const cookies = new Cookies();
    return (
        <Card className="bg-dark text-white" >
            <Card.Img src={tutorpage} alt="Card image" style={{ height: props.isMobile ? "225px" : "560px", marginTop: (props.isMobile && !cookies.get("notification")) ? "0rem " : !props.notification || (cookies.get("notification") && !props.isMobile) ? "3.4rem" : !props.notification || (cookies.get("notification") && props.isMobile) ? "3.4rem" : "3.4rem" }} />
            <Card.ImgOverlay style={{ position: props.isMobile ? "relative" : "absolute", backgroundColor: props.isMobile ? "#00ABBD" : "" }}>
                <Container style={{ marginLeft: props.isMobile ? "0rem" : "6rem", marginTop: props.isMobile ? "0rem" : "8rem" }}>
                    <Row >
                        <Col style={{ marginTop: "1rem" }}>
                            <p className="our-tutors" style={{ color: props.isMobile ? "white" : "black" }}>BECOME A TUTOR</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="our-tutors-description" style={{
                                color: props.isMobile ? "white" : "black",
                                width: "550px"
                            }}>Being a Dot & Line tutor has brought meaning, confidence and financial independence to hundreds of women
 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="our-tutors-ending" style={{ color: props.isMobile ? "white" : "black" }}>Transform your career by joining our thriving community of global teachers!</p>
                        </Col>
                    </Row>
                </Container>
            </Card.ImgOverlay>
        </Card>
    )
}

export default BecomeTutorHeader
