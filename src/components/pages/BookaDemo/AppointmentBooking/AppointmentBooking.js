import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col, Alert, Button, Image } from 'react-bootstrap'
import SelectedPricePackage from '../Leads/SelectedPricePackage'
import baseUrl from '../../../../baseUrl/baseUrl';
import SelectedTeacher from '../SelectedTeacher';
function AppointmentBooking(props) {
    const bookingurl = baseUrl + "/api/teacher/profile/58"
    const [imgsrc, setimgsrc] = useState("");
    useEffect(async () => {
        await axios.get(bookingurl).then(response => {
            console.log("Response: " + JSON.stringify(response.data.data.image))
            setimgsrc(JSON.stringify(response.data.data.image));
        }).catch(error => {
            console.log("Fetching teacher error: " + error)
        })
    }, [imgsrc])
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
                        <Button style={{ width: "200px", height: "48px", marginBottom: "2rem" }} onClick = {props.showScheduleDemo}>Schedule a Demo</Button>
                    </div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default AppointmentBooking
