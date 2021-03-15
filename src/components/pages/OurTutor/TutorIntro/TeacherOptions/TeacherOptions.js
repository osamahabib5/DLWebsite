import React, { useState, useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Col, Row, Container } from 'react-bootstrap';
import ReviewPopup from './ReviewPopup/ReviewPopup';
import { Link, useParams } from 'react-router-dom';
import { TutorsContext } from '../../../../../Provider';
function TeacherOptions() {
    let { id } = useParams();
    let { getTeacherId} = useContext(TutorsContext);
    useEffect(() => {
        getTeacherId(id);
    }, [id])
    const [show, setShow] = useState(false);
    const [review, hideReview] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        hideReview(true);
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Link
                        to={{
                            pathname: "/pricing",
                            search: "showLeads",
                            state: { teacherid: id }
                        }}
                    ><Button variant="primary">Book a Demo</Button></Link>
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
