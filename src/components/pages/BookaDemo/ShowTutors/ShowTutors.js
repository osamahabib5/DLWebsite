import { Link, useRouteMatch } from 'react-router-dom';
import React, { useContext, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { TutorsContext } from '../../../../Provider'
import Tutors from '../../Findtutor/tutorsdisplay/Tutors/Tutors'
import avatar from './avatar.jpg';
function ShowTutors() {
    let {  url } = useRouteMatch();
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
                        <Tutors dataarr={filtered_teachers_list} avatar={avatar} loading={loading} url = {url}/>
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
