import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TutorsContext } from '../../../Provider'
import SelectedPricePackage from './Leads/SelectedPricePackage'
import SelectedTeacher from './SelectedTeacher'
import { ClipLoader } from 'react-spinners';
function ConfirmAppointment() {
    const { calculateFees, loading } = useContext(TutorsContext);
    return (
        <Container>
            <Row>
                <Col>
                    <p className="AppointmentConfirmationHeading">Get Ready. Your Free Demo has been Scheduled!</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="3">
                    <SelectedTeacher />
                </Col>
                <Col xs lg="3">
                    <SelectedPricePackage />
                </Col>
            </Row>
        </Container>
    )
}

export default ConfirmAppointment
