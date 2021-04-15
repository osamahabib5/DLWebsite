import React, { useContext, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SelectedPricePackage from '../Leads/SelectedPricePackage'
import SelectedTeacher from '../SelectedTeacher';
import { TutorsContext } from '../../../../Provider';
function AppointmentBooking(props) {
    const { skippedpricing } = useContext(TutorsContext);
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="AppointmentConfirmationHeading">Confirm Your Selection.</p>
                </Col>
            </Row>
            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-high light">
                    <div className="selectedteacher">
                        <SelectedTeacher isMobile = {props.isMobile}/>
                    </div>
                </div>
                {!skippedpricing || props.showappointmentpage ? <div className="p-2 bd-highlight">
                    <SelectedPricePackage />
                </div> : ""}
            </div>
            <Row >
                <Col>
                    <div className="d-flex justify-content-center" style={{ marginBottom: "3rem" }}>
                        <button className="btn button-cta button-blue" onClick={props.showScheduleDemo}>Schedule a Demo</button>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default AppointmentBooking
