import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function RamazanHeader() {
    return (
        <Container>
            <Row>
                <Col>
                    <p className="ramazanprogramheading">
                        Dot & Line Ramadan Program
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="mainheading">
                        This year for the first time ever Dot & Line brings you the magical elements of Ramadan in a power packed 12 session series that bring the essence of Islam and all its glory to life.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default RamazanHeader
