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
                        This year for the first time ever Dot & Line brings you the magical elements of Ramadan in a power packed 12 session series. With storytelling from our specially curated best-selling books, that bring the essence of Islam and all its glory to life, to thought-provoking activities that  inspire our little ones to practice and reflect. Join us as we dive into exciting themes including the essentials of Ramadan, our beautiful mosques, Science in Islam, ALLAH’s beautiful names, gratitude, Islamic Art, forgiveness and stories about our Prophets.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default RamazanHeader
