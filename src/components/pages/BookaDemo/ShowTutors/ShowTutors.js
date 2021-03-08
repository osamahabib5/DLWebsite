import React,{useContext} from 'react'
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap'
import { TutorsContext } from '../../../../Provider'
import Tutors from '../../Findtutor/tutorsdisplay/Tutors/Tutors'
import avatar from './avatar.jpg';
function ShowTutors() {
    const {filtered_teachers_list, loading} = useContext(TutorsContext)
    return (
        <Container>
            <Row>
                <Col>
                    <p className="filteroptionsheading">Now, select a preferred tutor for a free demo.</p>
                </Col>
            </Row>
            <div className = "tutorslist">
                {filtered_teachers_list ? <Tutors dataarr = {filtered_teachers_list} avatar = {avatar} loading = {loading}/> : ""}
            </div>
        </Container>
    )
}

export default ShowTutors
