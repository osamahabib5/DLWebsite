import React, { useState, useContext, useRef, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import baseUrl from '../../../baseUrl/baseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faMoon, faSun, faFemale, faBook } from '@fortawesome/free-solid-svg-icons'
import avatar from './avatar.jpg';
import PaymentForm from './PaymentForm';
import { useRouteMatch } from 'react-router';
import Tutors from '../Findtutor/tutorsdisplay/Tutors/Tutors';
import { TutorsContext } from '../../../Provider';
function PickTime(props) {
    const { loading, showTeachers, showTutors, hideTutors, paymentForm,hidePaymentForm, scrollToForm ,scrollTotheForm} = useContext(TutorsContext);
    let { url } = useRouteMatch();
    const scrollToTutors = useRef(null);
    const [coursetype, setcoursetype] = useState("");
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
    const setProgramType = (e) => {
        e.preventDefault();
        if (e.target.value === "teaching") {
            setramadanprogram(true);
            setramadanpack(false);
            scrolltoTeachers();
            hideTutors();
            hidePaymentForm();    
        } else if (e.target.value === "nonteaching") {
            setramadanpack(true);
            setramadanprogram(false);
            scrollTotheForm();
            setcoursetype("nonteaching");
            hidePaymentForm();   
        }
        
    }
    const [ramadanpack, setramadanpack] = useState(false);
    const [ramadanprogram, setramadanprogram] = useState(false);
    
    let TeachingOptions = [{
        id: 0,
        Option: "Register with a Teacher",
        value: "teaching"
    }, {
        id: 1,
        Option: "Get Ramadan Pack, Videos and Other Content",
        value: "nonteaching"
    }]
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
        setTeacherSlots(fillTeachersSlot)
        if (fillTeachersSlot) {
            scrolltoTeachers();
        }
    }
    useEffect(() => {
        // if (fillTeachersSlot){
        //     scrolltoTeachers();
        // }
        scrollToPaymentForm();
    }, [scrollToForm])
    return (
        <Container>
            <Row style={{ marginTop: "2rem" }}>
                <Col>
                    <p className="mainheading" style={{ textAlign: "center" }}>
                        Select an Option
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center" style={{ marginTop: "2rem", marginLeft: props.isMobile ? "3.5rem" : "", marginBottom: "3rem" }}>
                {TeachingOptions.map((data, index) => {
                    return (
                        <Col xs lg="6" key={data.id}>
                            <button key={data.id} value={data.value} style={{ marginTop: props.isMobile ? "1rem" : "", width: props.isMobile ?  "250px": "500px", 
                            height: props.isMobile ? "60px": "70px",
                             fontSize:  props.isMobile ? "15px":"20px" }} onClick={(e) => {
                                setProgramType(e)
                            }} className="btn btn-lg button-cta button-blue">
                                {data.Option}
                                <FontAwesomeIcon size={20} style={{ marginLeft: "1rem" }} icon={index === 0 ? faFemale : faBook} />
                            </button>
                        </Col>
                    )
                })}
            </Row>
            {ramadanprogram ? <div>
                <Row style={{ marginTop: "2rem" }}>
                    <Col>
                        <p className="mainheading" style={{ textAlign: "center" }}>
                            Step One : Select a Timeslot  (Pakistan Standard Time)
                    </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{ marginTop: "2rem", marginLeft: props.isMobile ? "5rem" : "", marginBottom: "3rem" }}>
                    {RamazanSlots.map((data, index) => {
                        return (
                            <Col xs lg="2" key={data.id}>
                                <button key={data.id} value={data.value} style={{ marginTop: props.isMobile ? "1rem" : "" }} onClick={(e) => {
                                    showAvailableTeachers(e)
                                }} className="btn btn-lg button-cta button-blue">
                                    {data.TimeofDay}
                                    <FontAwesomeIcon style={{ marginLeft: "1rem" }} icon={index === 0 ? faSun : index == 1 ? faCloudSun : faMoon} />
                                </button>
                            </Col>
                        )
                    })}
                </Row>
            </div> : ""}
            {showTeachers && ramadanprogram  ? <Row style={{ marginBottom: "2rem" }} ref={scrollToTutors}>
                <Col>
                    <div className="pickteacher">
                        <p className="mainheading" style={{ textAlign: "center" }}>
                            Step Two : Select a Tutor
                        </p>
                        {fillTeachersSlot ? <div className="tutorslist">
                            <Tutors dataarr={fillTeacherSlot} avatar={avatar} loading={loading} url={url} ramadanteachers={true} />
                        </div> : ""}
                    </div>
                </Col>
            </Row> : ""}
            {paymentForm && ramadanprogram|| ramadanpack ? <Row>
                <Col>
                    <div className="paymentform" style={{ padding: props.isMobile ? "3rem" : "" }} ref={scrollForm}>
                        <p className="mainheading" style={{ textAlign: "center" }}>
                           {paymentForm ?  "Step Three : Fill out your details" : "Fill out your details"}
                        </p>
                        <PaymentForm coursetype = {coursetype} paymentForm = {paymentForm}/>
                    </div>
                </Col>
            </Row> : ""}
        </Container>
    )
}

export default PickTime