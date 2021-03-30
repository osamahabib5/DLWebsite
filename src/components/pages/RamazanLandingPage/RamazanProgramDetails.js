import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player';
function RamazanProgramDetails() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <p className="ramazanprogramheading">
                        What does it include?
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                    <p className = "programdetails">
                        1. 10 pre recorded story time sessions  (Register Now !)
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <ReactPlayer
                        controls
                        // height="360px"
                        url="video/Urdu.mp4"
                    />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                    <p className = "programdetails">
                        2. Digital Learning Pack - with all printables, instructions and flashcards
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <ReactPlayer
                        controls
                        // height="360px"
                        url="video/Urdu.mp4"
                    />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                    <p className = "programdetails">
                        3. 12 small group discussion and activity sessions with our experienced teachers
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <ReactPlayer
                        controls
                        // height="360px"
                        url="video/Urdu.mp4"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default RamazanProgramDetails
