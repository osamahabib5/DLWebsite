import React, { useState, useEffect, useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AvailableRamazanTimings from './AvailableRamazanTimings'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
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
    let Teachers = [];
    let fillTeachersSlot = [];
    const [fillTeacherSlot, setTeacherSlots] = useState(null);
    const showAvailableTeachers = (e) => {
        e.preventDefault();
        while (fillTeachersSlot.length > 0) {
            fillTeachersSlot.pop();
        }
        while (Teachers.length > 0) {
            Teachers.pop();
        }
        if (e.target.value === "morning") {
            Teachers.push(props.DaysList.morning);
        }
        else if (e.target.value === "afternoon") {
            Teachers.push(props.DaysList.afternoon);
        }
        else if (e.target.value === "night") {
            Teachers.push(props.DaysList.night);
        }
        Teachers.map(firstarr => {
            firstarr.map(secondarr => {
                secondarr.map(data => {
                    fillTeachersSlot.push(data);
                })
            })
        })
        console.log("Teachers: "+ JSON.stringify(fillTeachersSlot))
        setTeacherSlots(fillTeachersSlot)
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
                            {fillTeacherSlot ? <Tutors dataarr={fillTeacherSlot} avatar={avatar} loading={loading} url={url} ramadanteachers = {true}/> : ""}
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
