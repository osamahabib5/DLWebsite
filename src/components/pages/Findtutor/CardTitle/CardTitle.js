import React from 'react'
import './CardTitle.css';
import { Container, Row, Col } from 'react-bootstrap';
function CardTitle(props) {
    return (
        <div className = "mobile-ourtutor">
            <Container style={{ marginLeft: "1rem" }}>
                <Row>
                    <Col style={{ marginTop: "1rem" }}>
                        <p className="our-tutors">OUR TUTORS</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="our-tutors-description">{props.description} </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CardTitle
