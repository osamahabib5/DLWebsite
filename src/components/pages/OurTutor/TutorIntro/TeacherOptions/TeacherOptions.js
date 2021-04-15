import React, { useState, useContext, useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import ReviewPopup from './ReviewPopup/ReviewPopup';
import { Link, useParams, useHistory } from 'react-router-dom';
import { TutorsContext } from '../../../../../Provider';
function TeacherOptions() {
    let history = useHistory();
    let { id } = useParams();
    let { getTeacherId } = useContext(TutorsContext);
    const handleBackButton = history.listen((loc, action) => {
        if (action === "POP") {
            history.push({
                pathname: '/tutors'
            });
        }
    });
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
                    <div className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                        <Link
                            to={{
                                pathname: "/pricing",
                                search: "showLeads",
                                state: { TeacherFunnel: "true" }
                            }}

                            // position: -webkit-sticky; /* Safari */
                            // position: sticky;
                            // top: 0;
                        ><button className="btn button-cta button-blue" style = {{position: "sticky", bottom: "0",
                        position: "-webkit-sticky"
                        }}>Book a Demo</button></Link>
                        <div style={{ marginTop: "1rem" }}></div>
                        <button className="btn button-cta button-blue" onClick={handleShow}>Leave a review</button>
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
