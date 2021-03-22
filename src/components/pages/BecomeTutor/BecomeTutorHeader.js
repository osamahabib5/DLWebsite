import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import tutorpage from "./tutorpage.jpg";
function BecomeTutorHeader(props) {
    return (
        <Card className="bg-dark text-white" >
            <Card.Img src={tutorpage} alt="Card image" style = {{height: props.isMobile ? "225px" : "560px"}}/>
            <Card.ImgOverlay style = {{position: props.isMobile ? "relative" : "absolute", backgroundColor: props.isMobile ? "#00ABBD" : ""}}>
                <Container style={{ marginLeft: props.isMobile ? "0rem" : "6rem", marginTop: props.isMobile ? "0rem" : "8rem" }}>
                    <Row >
                        <Col style={{ marginTop: "1rem" }}>
                            <p className="our-tutors" style = {{color : props.isMobile ? "white" : "black"}}>BECOME A TUTOR</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="our-tutors-description" style = {{color : props.isMobile ? "white" : "black"}}>Being a Dot & Line tutor has brought meaning, confidence and financial independence to hundreds of women
 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className = "our-tutors-ending" style = {{color : props.isMobile ? "white" : "black"}}>Transform your career by joining our thriving community of global teachers!</p>
                        </Col>
                    </Row>
                </Container>
            </Card.ImgOverlay>
        </Card>
    )
}

export default BecomeTutorHeader
