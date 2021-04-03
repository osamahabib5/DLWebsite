import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function RamazanHeader(props) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg = "5">
                    <p className="ramazanprogramheading" style = {{fontSize: props.isMobile ? "30px" :""}}>
                        Dot & Line Ramadan Program
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg = "7">
                    <p className="mainheading" style = {{fontSize: props.isMobile ? "19px" :"", textAlign : props.isMobile ? "center" :"", padding: props.isMobile ? "1rem" :"",}}>
                        This year, for the first time ever, Dot & Line brings you the magical elements of Ramadan in a power packed 10-session series that bring the essence of Islam and all its glory to life.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default RamazanHeader
