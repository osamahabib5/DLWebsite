import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SelectedPricePackage from './Leads/SelectedPricePackage'
import SelectedTeacher from './SelectedTeacher'

function ConfirmAppointment() {
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
