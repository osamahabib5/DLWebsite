import React, { useState, useEffect, useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AvailableRamazanTimings from './AvailableRamazanTimings'
import axios from 'axios';
import baseUrl from '../../../baseUrl/baseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import avatar from './avatar.jpg';
import PaymentForm from './PaymentForm';
import { useRouteMatch } from 'react-router';
import Tutors from '../Findtutor/tutorsdisplay/Tutors/Tutors';
import { TutorsContext } from '../../../Provider';
function PickTime(props) {
    const { loading, startLoading, stopLoading } = useContext(TutorsContext);
    let { url } = useRouteMatch();
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

    let fetchAvailableTeachersUrl = baseUrl + "/api/ramzan/getTimeSlots/";
    const [Teachers, setTeachers] = useState(null)
    const [fillTeachersSlot, setTeacherSlots] = useState(null);
    const showAvailableTeachers = (e) => {
        e.preventDefault();
        startLoading();
        if (e.target.value === "morning") {
            setTeachers(props.DaysList.morning);
            // console.log("Morning: " + JSON.stringify(props.DaysList.morning));
        }
        if (e.target.value === "afternoon") {
            setTeachers(props.DaysList.afternoon);
            // console.log("Afternoon: " + JSON.stringify(props.DaysList.afternoon));
        }
        if (e.target.value === "night") {
            // temp.push(props.DaysList.night);
            setTeachers(props.DaysList.night);
            // console.log("Night: " + JSON.stringify(props.DaysList.night));
        }
        stopLoading();
        // console.log(Teachers ? "Teachers: "+JSON.stringify(Teachers) : "Hello Brothersasas");
        if (Teachers) {
            let temparr = [];
            Teachers.map(firstarr => {
                firstarr.map(data => {
                    temparr.push(data);
                })
            })
            setTeacherSlots(temparr)
        }
        // console.log(fillTeachersSlot ? "Teachers: "+JSON.stringify(fillTeachersSlot) : "Hello Brothersasas");

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
                        <Col xs lg="2" key={index}>
                            <button key={index} value={data.value} onClick={(e) => {
                                showAvailableTeachers(e)
                            }} className="btn btn-lg button-cta button-blue">
                                {data.TimeofDay}
                                <FontAwesomeIcon style={{ marginLeft: "1rem" }} icon={index === 0 ? faSun : index == 1 ? faCloudSun : faMoon} />
                            </button>
                        </Col>
                    )
                })}
            </Row>
            <Row>
                <Col>
                    <div className="pickteacher">
                        <div className="tutorslist">
                            {fillTeachersSlot ?
                                <Tutors dataarr={fillTeachersSlot} avatar={avatar} loading={loading} url={url} /> :
                                ""}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PaymentForm />
                </Col>
            </Row>
        </Container>
    )
}

export default PickTime
