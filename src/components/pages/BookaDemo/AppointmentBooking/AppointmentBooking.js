import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SelectedPricePackage from '../Leads/SelectedPricePackage'
import SelectedTeacher from '../SelectedTeacher';
function AppointmentBooking(props) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="AppointmentConfirmationHeading">Confirm your selections.</p>
                </Col>
            </Row>
            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-high light">
                    <SelectedTeacher />
                </div>
                <div className="p-2 bd-highlight">
                    <SelectedPricePackage />
                </div> 
            </div>
            <Row >
                <Col>
                    <div className="d-flex justify-content-center">
                        <button className = "btn button-cta button-blue" onClick = {props.showScheduleDemo}>Schedule a Demo</button>
                    </div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default AppointmentBooking
