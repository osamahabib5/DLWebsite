import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TutorsContext } from '../../../Provider'
import SelectedPricePackage from './Leads/SelectedPricePackage'
import SelectedTeacher from './SelectedTeacher'
import { ClipLoader } from 'react-spinners';
function ConfirmAppointment(props) {
    const { teacher_info, demo_date, demo_time, demo_day } = useContext(TutorsContext);
    return (
        <Container>
            <Row>
                <Col>
                    <p className="AppointmentConfirmationHeading">Get Ready. Your Free Demo has been Scheduled with {teacher_info ? teacher_info.name : ""} on  {demo_date ? demo_date : ""} at {demo_time ? demo_time : ""}
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="3">
                    <SelectedTeacher isMobile = {props.isMobile}/>
                </Col>
                <Col xs lg="3">
                    <SelectedPricePackage />
                </Col>
            </Row>
            {/* <div style = {{position: "absolute"}}>
                <p>You will be redirected to homepage in </p>
            </div> */}
        </Container>
    )
}

export default ConfirmAppointment
