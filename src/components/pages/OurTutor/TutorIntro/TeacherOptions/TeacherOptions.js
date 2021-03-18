import React, { useState, useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Col, Row, Container } from 'react-bootstrap';
import ReviewPopup from './ReviewPopup/ReviewPopup';
import { Link, useParams } from 'react-router-dom';
import { TutorsContext } from '../../../../../Provider';
function TeacherOptions() {
    let { id } = useParams();
    let { getTeacherId } = useContext(TutorsContext);
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
                    <div className="d-flex justify-content-center" style = {{flexDirection: "column"}}>
                        <Link
                            to={{
                                pathname: "/pricing",
                                search: "showLeads",
                                state: { teacherid: id }
                            }}
                        ><button className="btn button-cta button-white">Book a Demo</button></Link>
                        <div style={{ marginTop: "1rem" }}></div>
                        <button className="btn button-cta button-white" onClick={handleShow}>Leave a review</button>
                        <div style={{ marginTop: "1rem" }}></div>
                    </div>
                </Col>
            </Row>
            <div>
                <ReviewPopup show={show} handleClose={handleClose} handleShow={handleShow} />
            </div>
        </Container>
    )
}

export default TeacherOptions
