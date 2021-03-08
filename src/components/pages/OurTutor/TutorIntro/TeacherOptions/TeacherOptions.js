import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Col, Row, Container } from 'react-bootstrap';
import ReviewPopup from './ReviewPopup/ReviewPopup';
function TeacherOptions() {
    const [show, setShow] = useState(false);
    const [review, hideReview] = useState(true);
    const hidePopup = () => { hideReview(false) }
    const showPoupup = () => { hideReview(true) }

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        hideReview(true);
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Button variant="primary">Book a Demo</Button>
                    <div style={{ marginTop: "1rem" }}></div>
                    <Button variant="primary" onClick={handleShow}>Leave a review</Button>
                    <div style={{ marginTop: "1rem" }}></div>
                </Col>
            </Row>
            <div>
                <ReviewPopup show={show} handleClose={handleClose} handleShow={handleShow} />
            </div>
        </Container>
    )
}

export default TeacherOptions
