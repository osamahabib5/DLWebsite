import React, { useState, useEffect, useContext } from 'react';
import { Card, Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'
import { ClipLoader } from 'react-spinners';
import { TutorsContext } from '../../../../../Provider';
function Tutors(props) {
    const [isMobile, setmobile] = useState(false);

    const mobileview = () => {
        if (window.innerWidth < 769) {
            setmobile(true);
        }
        if (window.innerWidth >= 769) {
            setmobile(false);
        }
    }
    const { saveCourseId, getTeacherId } = useContext(TutorsContext);
    const saveRamadanTeachersInfo = (courseid, teacherid) => {
        // console.log("Hello My Bro!")
        saveCourseId(courseid);
        getTeacherId(teacherid)
    }
    useEffect(() => {
        mobileview();
        window.addEventListener("resize", mobileview);
    }, [props.dataarr]);

    const rowslength = isMobile ? 2 : 4;
    const rows = [...Array(Math.ceil(props.dataarr.length / rowslength))];
    const productRows = rows.map((row, idx) => props.dataarr.slice(idx * rowslength, idx * rowslength + rowslength));
    const content = productRows.map((row, idx) => (
        <Row key={idx} xs={2} md={4} style={{ marginTop: idx > 0 ? "2rem" : "" }}>
            { row.map((item, index) =>
                <Col key={index}>
                    <Link to={{
                        pathname: `${props.url}` ? `${props.url}/${item.id}` : `${"/tutors"}/${item.id}`,
                        search: `${props.url}` ? "" : `${item.name}`
                    }}>
                        <Card key={item.id} style={{ height: props.ramadanteachers ? "350px" : "" }}>
                            <Card.Body>
                                <div className="d-flex flex-column">
                                    <div className="p-2">
                                        <Container>
                                            {!props.ramadanteachers ? <Card.Img variant="top" src={item.picture == null ? props.avatar : item.picture} />
                                                : <Image src={item.picture == null ? props.avatar : item.picture} style={{ width: "100px", height: "100px", marginLeft: "3rem" }} roundedCircle />}
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
                                                                    <p className="students">
                                                                        Days:
                                                                </p>
                                                                </div>
                                                                <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                    <p className="students">
                                                                        {item.days}
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
                                                                    <p className="students" style={{ marginLeft: "7px" }}>
                                                                        Timings (in PKT):
                                                                </p>
                                                                </div>
                                                                <div className="p-2 bd-highlight" style={{ marginLeft: "7px" }}>
                                                                    <p className="students">
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
                                    <div className="p-2" style={{ marginTop: (isMobile ? "-1rem" : "-1rem") }}>
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
                    </Link>

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
