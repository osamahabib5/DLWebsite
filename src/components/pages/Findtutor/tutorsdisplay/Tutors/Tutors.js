import React, { useState, useEffect, useContext } from 'react';
import { Card, Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'
import { ClipLoader } from 'react-spinners';
import { TutorsContext } from '../../../../../Provider';
import Cookies from 'universal-cookie';
function Tutors(props) {
    const [isMobile, setmobile] = useState(false);
    const cookies = new Cookies();
    const mobileview = () => {
        if (window.innerWidth < 769) {
            setmobile(true);
        }
        if (window.innerWidth >= 769) {
            setmobile(false);
        }
    }
    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toUpperCase() : word.toUpperCase();
        }).replace(/\s+/g, ' ');
    }
    const { saveCourseId, getTeacherId, setTimes, setDays, setTeacherName, showPaymentForm, setBookingDetails, scrollTotheForm } = useContext(TutorsContext);
    const saveRamadanTeachersInfo = (course_id, teacherid, times, days, name) => {
        saveCourseId(parseInt(course_id));
        getTeacherId(parseInt(teacherid));
        setTimes(times);
        setDays(days);
        setTeacherName(name);
        showPaymentForm();
        setBookingDetails(camelize((name + " - " + days + " , " + times).toString()));
        scrollTotheForm();
    }
    useEffect(() => {
        mobileview();
        window.addEventListener("resize", mobileview);
    }, [props.dataarr]);

    const rowslength = isMobile ? 2 : 4;
    const rows = [...Array(Math.ceil(props.dataarr.length / rowslength))];
    const productRows = rows.map((row, idx) => props.dataarr.slice(idx * rowslength, idx * rowslength + rowslength));
    const content = productRows.map((row, idx) => (
        <Row key={idx} xs={2} lg={props.ramadanteachers ? 4 : ""} md={4} className={props.ramadanteachers ? "justify-content-md-center" : ""} style={{ marginTop: idx > 0 ? "2rem" : "" }}>
            { row.map((item, index) =>
                <Col key={index}>
                    {!props.ramadanteachers ? <Link to={{
                        pathname: `${props.url}` ? `${props.url}/${item.id}` : `${"/tutors"}/${item.id}`,
                        search: `${props.url}` ? "" : `${item.name}`
                    }}>
                        <Card key={item.id} style={{ height: props.ramadanteachers ? "300px" : "" }}>
                            <Card.Body>
                                <div className="d-flex flex-column">
                                    <div className="p-2">
                                        <Container>
                                            {!props.ramadanteachers ? <Card.Img variant="top" src={item.picture == null ? props.avatar : item.picture} />
                                                : <Image src={item.picture == null ? props.avatar : item.picture} style={{ width: isMobile ? "80px" : "150px", height: isMobile ? "80px" : "150px", marginLeft: isMobile ? "0rem" : "2rem" }} roundedCircle />}
                                        </Container>
                                    </div>
                                    <div className="p-2">
                                        <div className="d-flex flex-row bd-highlight mb-3">
                                            <div className="p-2 bd-highlight">
                                                <p className="teacher-name">
                                                    {item.name ? item.name : item.teacher_name}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-2 bd-highlight" style={{ marginLeft: "-0.8rem", marginTop: "-2rem", marginBottom: '1rem' }}>
                                            <Container>
                                                <Row>
                                                    <Col style={{ height: "20px" }}>
                                                        <Button variant="outline-secondary" style={{ height: "30px", border: "none" }}>
                                                            {item.days ? <div className="d-flex flex-row bd-highlight mb-3">
                                                                <div className="p-2 bd-highlight" style={{ marginTop: "-1rem", fontWeight: "10" }}><FontAwesomeIcon icon={faCalendar} /></div>
                                                                <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                    <p className="students" >
                                                                        Days:
                                                                </p>
                                                                </div>
                                                                <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                    <p className="students">
                                                                        {camelize(item.days.toString())}
                                                                    </p>
                                                                </div>
                                                            </div> : ""}
                                                            {item.active_students ? <div className="d-flex flex-row bd-highlight mb-3" >
                                                                <div className="p-2 bd-highlight" style={{ marginTop: "-1rem", fontWeight: "10" }}><FontAwesomeIcon icon={faUser} /></div>
                                                                <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                    <p className="students">
                                                                        Students:
                                                                </p>
                                                                </div>
                                                                <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                    <p className="students">
                                                                        {item.active_students}
                                                                    </p>
                                                                </div>
                                                            </div> : ""}
                                                        </Button>
                                                    </Col>
                                                    <Col>
                                                        <Button variant="outline-secondary" style={{ height: "30px", border: "none", backgroundColor: "none" }}>
                                                            {item.lifetime_hours ? <div className="d-flex flex-row bd-highlight mb-3" style={{ marginLeft: !item.active_students ? "-7.7rem" : "" }}>
                                                                <div className="p-2 bd-highlight" style={{ marginTop: "-1rem", fontWeight: "10" }}><FontAwesomeIcon icon={faClock} /></div>
                                                                <div className="p-2 bd-highlight">
                                                                    <p className="students" style={{ marginLeft: "7px" }}>
                                                                        Hours Taught:
                                                                </p>
                                                                </div>
                                                                <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                    <p className="students">
                                                                        {item.lifetime_hours}
                                                                    </p>
                                                                </div>
                                                            </div> : ""}
                                                            {item.timings ? <div className="d-flex flex-row bd-highlight mb-3">
                                                                <div className="p-2 bd-highlight" style={{ marginTop: "-1rem", fontWeight: "10" }}><FontAwesomeIcon icon={faClock} /></div>
                                                                <div className="p-2 bd-highlight">
                                                                    <p className="students" style={{ marginLeft: "7px", fontSize: props.ramadanteachers ? "13px" : "" }}>
                                                                        Timings (in PKT):
                                                                </p>
                                                                </div>
                                                                <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                    <p className="students" style={{ fontSize: props.ramadanteachers ? "13px" : "" }}>
                                                                        {item.timings}
                                                                    </p>
                                                                </div>
                                                            </div> : ""}
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                    <div className="p-2" style={{ marginTop: (!item.active_students && !item.lifetime_hours ? "-3rem" : isMobile ? "-1rem" : "-1rem") }}>
                                        {props.ramadanteachers ? "" : <StarRatings
                                            rating={item.tier === "1" ? 5 : item.tier === "2" ? 4 : item.tier === "3" ? 3 : 3}
                                            starRatedColor="#00ABBD"
                                            numberOfStars={5}
                                            name='rating'
                                        />}
                                    </div>
                                    <div className="p-2 bd-highlight" style={{ marginTop: "1rem" }}>
                                        <p className="teacher-bio">
                                            {props.ramadanteachers ? "" : item.tagline != null ? item.tagline.substring(0, 90) : item.tagline}
                                        </p>

                                    </div>
                                    {item.min_budget ?
                                        <div className="p-2 bd-highlight" style={{ marginTop: "1rem", position: "absolute", bottom: "0px" }}>
                                            <p className="budget">
                                                Starting from Rs. {item.min_budget}
                                            </p>
                                        </div> : ''}

                                </div>
                            </Card.Body>
                        </Card>
                    </Link> : <Card key={item.id} onClick={() => {
                        saveRamadanTeachersInfo(item.course_id, item.id, item.timings, item.days, item.teacher_name);

                    }} style={{ height: props.ramadanteachers ? "300px" : props.ramadanteachers && isMobile ? "300px!important" : "", width: props.ramadanteachers && isMobile ? "100%" : "" }}>
                        <Card.Body>
                            <div className="d-flex flex-column">
                                <div className="p-2">
                                    <Container>
                                        {!props.ramadanteachers ? <Card.Img variant="top" src={item.picture == null ? props.avatar : item.picture} />
                                            : <Image src={item.picture == null ? props.avatar : item.picture} style={{ width: isMobile ? "120px" : "150px", height: isMobile ? "120px" : "150px" }} roundedCircle />}
                                    </Container>
                                </div>
                                <div className="p-2">
                                    <div className="d-flex flex-row bd-highlight mb-3">
                                        <div className="p-2 bd-highlight">
                                            <p className="teacher-name">
                                                {item.name ? item.name : item.teacher_name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-2 bd-highlight" style={{ marginLeft: "-0.8rem", marginTop: "-2rem", marginBottom: '1rem' }}>
                                        <Container>
                                            <Row>
                                                <Col style={{ height: "20px" }}>
                                                    <Button variant="outline-secondary" style={{ height: "30px", border: "none" }}>
                                                        {item.days ? <div className="d-flex flex-row bd-highlight mb-3">
                                                            <div className="p-2 bd-highlight" style={{ marginTop: "-1rem", fontWeight: "10" }}><FontAwesomeIcon icon={faCalendar} /></div>
                                                            <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                <p className="students" style = {{fontSize: "13px"}}>
                                                                    Days:
                                                                </p>
                                                            </div>
                                                            <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                <p className="students" style = {{fontSize: "13px", color: "#FF4646"}}>
                                                                    {camelize(item.days.toString())}
                                                                </p>
                                                            </div>
                                                        </div> : ""}
                                                        {item.active_students ? <div className="d-flex flex-row bd-highlight mb-3">
                                                            <div className="p-2 bd-highlight" style={{ marginTop: "-1rem", fontWeight: "10" }}><FontAwesomeIcon icon={faUser} /></div>
                                                            <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                <p className="students">
                                                                    Students:
                                                                </p>
                                                            </div>
                                                            <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                <p className="students">
                                                                    {item.active_students}
                                                                </p>
                                                            </div>
                                                        </div> : ""}
                                                    </Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-secondary" style={{ height: "30px", border: "none", backgroundColor: "none" }}>
                                                        {item.lifetime_hours ? <div className="d-flex flex-row bd-highlight mb-3">
                                                            <div className="p-2 bd-highlight" style={{ marginTop: "-1rem", fontWeight: "10" }}><FontAwesomeIcon icon={faClock} /></div>
                                                            <div className="p-2 bd-highlight">
                                                                <p className="students" style={{ marginLeft: "7px" }}>
                                                                    Hours Taught:
                                                                </p>
                                                            </div>
                                                            <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                <p className="students">
                                                                    {item.lifetime_hours}
                                                                </p>
                                                            </div>
                                                        </div> : ""}
                                                        {item.timings ? <div className="d-flex flex-row bd-highlight mb-3">
                                                            <div className="p-2 bd-highlight" style={{ marginTop: "-1rem", fontWeight: "10" }}><FontAwesomeIcon icon={faClock} /></div>
                                                            <div className="p-2 bd-highlight">
                                                                <p className="students" style={{ marginLeft: "7px", fontSize: props.ramadanteachers ? "13px" : "" }}>
                                                                    Timings:
                                                                </p>
                                                            </div>
                                                            <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                <p className="students" style={{ color: "#FF4646", fontSize: props.ramadanteachers ? "13px" : "", whiteSpace: isMobile ? "normal" : "nowrap" }}>
                                                                    {item.timings} PKT
                                                                </p>
                                                            </div>
                                                        </div> : ""}
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                                <div className="p-2 bd-highlight" style={{ marginTop: isMobile ? "-1rem" : "-3rem" }}>
                                    {props.ramadanteachers ? "" : <StarRatings
                                        rating={item.tier === "1" ? 5 : item.tier === "2" ? 4 : item.tier === "3" ? 3 : 3}
                                        starRatedColor="#00ABBD"
                                        numberOfStars={5}
                                        name='rating'
                                    />}
                                </div>
                                <div className="p-2 bd-highlight" style={{ marginTop: "1rem" }}>
                                    <p className="teacher-bio">
                                        {props.ramadanteachers ? "" : item.tagline != null ? item.tagline.substring(0, 90) : item.tagline}
                                    </p>

                                </div>
                                {item.min_budget ?
                                    <div className="p-2 bd-highlight" style={{ marginTop: "1rem", position: "absolute", bottom: "0px" }}>
                                        <p className="budget">
                                            Starting from Rs. {item.min_budget}
                                        </p>
                                    </div> : ''}

                            </div>
                        </Card.Body>
                    </Card>}

                </Col>)}
        </Row>)
    );

    return (
        <Container>
            {props.loading && !props.dataarr ? <div className="d-flex justify-content-center">
                <ClipLoader size={80} color="#00ABBD" />
            </div> :
                content
            }
        </Container>
    )
}

export default Tutors
