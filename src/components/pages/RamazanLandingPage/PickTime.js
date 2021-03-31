import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AvailableRamazanTimings from './AvailableRamazanTimings'
import axios from 'axios';
import baseUrl from '../../../baseUrl/baseUrl';
function PickTime() {
    let RamazanSlots = [{
        id: 0,
        TimeofDay: "Morning",
        value: "morning"
    }, {
        id: 1,
        TimeofDay: "Afternoon",
        value: "afternoon"
    }, {
        id: 2,
        TimeofDay: "Night",
        value: "night"
    }]
    let fetchAvailableTeachersUrl = baseUrl+ "/api/ramzan/getTimeSlots/";
    const showAvailableTeachers = (e)=>{
        e.preventDefault();
        console.log("Button-value: "+ e.target.value)
    }
    return (
        <Container>
            <Row style={{ marginTop: "2rem" }}>
                <Col>
                    <p className="mainheading" style={{ textAlign: "center" }}>
                        Choose an Option!
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center" style={{ marginTop: "2rem" }}>
                {RamazanSlots.map((data, index) => {
                    return (
                        <Col xs lg="2">
                            <button key={index} value = {data.value} onClick = {(e)=>{
                                showAvailableTeachers(e)
                            }} className="btn btn-lg button-cta button-blue">
                                {data.TimeofDay}
                            </button>
                        </Col>
                    )
                })}
            </Row>
            <Row>
                <Col>
                    <div className="showtimings">
                        <AvailableRamazanTimings />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PickTime
