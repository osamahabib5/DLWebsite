import React, { useState, useContext, useRef, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import baseUrl from '../../../baseUrl/baseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import avatar from './avatar.jpg';
import PaymentForm from './PaymentForm';
import { useRouteMatch } from 'react-router';
import Tutors from '../Findtutor/tutorsdisplay/Tutors/Tutors';
import { TutorsContext } from '../../../Provider';
function PickTime(props) {
    const { loading, showTeachers, showTutors, paymentForm, scrollToForm } = useContext(TutorsContext);
    let { url } = useRouteMatch();
    const scrollToTutors = useRef(null);
    const scrollForm = useRef(null);
    const scrolltoTeachers = () => {
        showTutors();
        if (scrollToTutors.current) {
            scrollToTutors.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    const scrollToPaymentForm = () => {
        if (scrollToForm) {
            if (scrollForm.current) {
                scrollForm.current.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                })
            }
        }
    }
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
        scrolltoTeachers();
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
        setTeacherSlots(fillTeachersSlot)
    }
    useEffect(() => {
        scrollToPaymentForm();
    }, [scrollToForm])
    return (
        <Container>
            <Row style={{ marginTop: "2rem" }}>
                <Col>
                    <p className="mainheading" style={{ textAlign: "center" }}>
                        Step One : Choose a Timeslot
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center" style={{ marginTop: "2rem", marginLeft: props.isMobile ? "5rem" : "", marginBottom: "3rem" }}>
                {RamazanSlots.map((data, index) => {
                    return (
                        <Col xs lg="2" key={index}>
                            <button key={index} value={data.value} style={{ marginTop: props.isMobile ? "1rem" : "" }} onClick={(e) => {
                                showAvailableTeachers(e)
                            }} className="btn btn-lg button-cta button-blue">
                                {data.TimeofDay}
                                <FontAwesomeIcon style={{ marginLeft: "1rem" }} icon={index === 0 ? faSun : index == 1 ? faCloudSun : faMoon} />
                            </button>
                        </Col>
                    )
                })}
            </Row>
            {showTeachers ? <Row style={{ marginBottom: "2rem" }} ref={scrollToTutors}>
                <Col>
                    <div className="pickteacher">
                        <p className="mainheading" style={{ textAlign: "center" }}>
                            Step Two : Select a Tutor
                        </p>
                        <div className="tutorslist">
                            {fillTeacherSlot ? <Tutors dataarr={fillTeacherSlot} avatar={avatar} loading={loading} url={url} ramadanteachers={true} /> : ""}
                        </div>
                    </div>
                </Col>
            </Row> : ""}
            {paymentForm ? <Row>
                <Col>
                    <div className="paymentform" style={{ padding: props.isMobile ? "3rem" : "" }} ref={scrollForm}>
                        <p className="mainheading" style={{ textAlign: "center" }}>
                            Step Three : Fill out your details
                        </p>
                        <PaymentForm />
                    </div>
                </Col>
            </Row> : ""}
        </Container>
    )
}

export default PickTime
