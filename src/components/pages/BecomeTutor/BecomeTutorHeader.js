import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import tutorpage from "./tutorpage.jpg";
function BecomeTutorHeader() {
    return (
        <Card className="bg-dark text-white" >
            <Card.Img src={tutorpage} alt="Card image" style = {{height: "560px"}}/>
            <Card.ImgOverlay>
                <Container style={{ marginLeft: "6rem", marginTop: "8rem" }}>
                    <Row >
                        <Col style={{ marginTop: "1rem" }}>
                            <p className="our-tutors">BECOME A TUTOR</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="our-tutors-description">Being a Dot & Line tutor has brought meaning, confidence and financial independence to hundreds of women
 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className = "our-tutors-ending">Transform your career by joining our thriving community of global teachers!</p>
                        </Col>
                    </Row>
                </Container>
            </Card.ImgOverlay>
        </Card>
    )
}

export default BecomeTutorHeader
