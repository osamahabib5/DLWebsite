import { Link } from 'react-router-dom';
import React, { useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { TutorsContext } from '../../../../Provider'
import Tutors from '../../Findtutor/tutorsdisplay/Tutors/Tutors'
import avatar from './avatar.jpg';
function ShowTutors(props) {
    const { filtered_teachers_list, loading } = useContext(TutorsContext)
    return (
        <Container>
            <Row>
                <Col>
                    <p className="filteroptionsheading">Now, select a preferred tutor for a free demo.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="tutorslist">
                        <Tutors dataarr={filtered_teachers_list.length > 4 ? filtered_teachers_list.splice(0, 4) : filtered_teachers_list} avatar={avatar} loading={loading} />
                    </div>
                </Col>
            </Row>
            <Row style={{ marginTop: "3rem" }}>
                <Col>
                    <div className="d-flex justify-content-center">
                        <Button style={{ width: "160px", height: "48px" }} onClick = {props.showAppointmentPage}>Select Tutor</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/tutors">
                        <p className="skipbooking">Browse More</p>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default ShowTutors
