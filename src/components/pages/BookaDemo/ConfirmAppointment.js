import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TutorsContext } from '../../../Provider'
import SelectedPricePackage from './Leads/SelectedPricePackage'
import SelectedTeacher from './SelectedTeacher'
import { Redirect } from 'react-router-dom'
function ConfirmAppointment(props) {
    const { teacher_info, demo_date, demo_time, skippedpricing,calculateFees } = useContext(TutorsContext);
    const [redirecttoHomePage, setredirecttoHomePage] = useState(false);
    const [count, setcount] = useState(10);
    const RedirecttoHomePage = ()=>{
        calculateFees(0);
        setredirecttoHomePage(true)
    }
    useEffect(() => {
        setTimeout(()=>RedirecttoHomePage(), 10000)
    }, [])
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
                    <SelectedTeacher isMobile={props.isMobile} />
                </Col>
                {skippedpricing ? "" : <Col xs lg="3">
                    <SelectedPricePackage />
                </Col>}
            </Row>
            {/* {setTimeout(() => <Redirect
                to={{
                    pathname: "/",
                }}
            />, 10000)} */}
            {redirecttoHomePage ? <Redirect
                to={{
                    pathname: "/",
                }}
            /> : ""}
            {/* <div style = {{position: "absolute"}}>
                <p>You will be redirected to homepage in </p>
            </div> */}
        </Container>
    )
}

export default ConfirmAppointment
