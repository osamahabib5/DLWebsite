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
    const { loading } = useContext(TutorsContext);
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
        var temp = []
        if (e.target.value === "morning") {
            temp.push(props.DaysList.morning);
        }
        if (e.target.value === "afternoon") {
            temp.push(props.DaysList.afternoon);
        }
        if (e.target.value === "night") {
            temp.push(props.DaysList.night);
        }
        setTeachers(temp)

        // console.log(Teachers ? "Teachers: " + JSON.stringify(Teachers) : "Hello")
        if (Teachers) {
            var temparr = [];
            Teachers.map(firstarr => {
                firstarr.map(secondarr => {
                    secondarr.map(thirdarr => {
                        thirdarr.map(data => {
                            temparr.push(data);
                        })
                    })
                })
            })
            setTeacherSlots(temparr);
        }
    }
    useEffect(() => {
    }, [])
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
                    <div className="tutorslist">
                        {Teachers && fillTeachersSlot ?
                            // <AvailableRamazanTimings arr={fillTeachersSlot} avatar={avatar} /> :
                            <Tutors dataarr={fillTeachersSlot} avatar={avatar} loading={loading} url={url} /> :
                            "TimeSlots will be shown here!"}
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
