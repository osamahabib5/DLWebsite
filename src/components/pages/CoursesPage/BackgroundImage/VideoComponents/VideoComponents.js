import React, { useRef, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, ListGroup, Row, Col } from 'react-bootstrap';
import CoursesDetails from './CoursesDetails';
import play from '../../../../images/Courses/Play.png'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './VideoComponent.css'
import { Link } from 'react-router-dom';
import { TutorsContext } from '../../../../../Provider';
const VideoComponents = (props) => {
    const {getSubject, getGrade} = useContext(TutorsContext)
    const card1 = useRef(null);
    const card2 = useRef(null);
    const card3 = useRef(null);

    const showCard = () => {
        if (card1.current) {
            card1.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
        if (card2.current) {
            card2.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
        if (card3.current) {
            card3.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }

const  setSearchResults = (grade, subject) =>{
    getSubject(subject)
    getGrade(grade)
}
    return (
        <div className="d-flex justify-content-end">
            <Container>
                <Row xs={1} className="d-flex justify-content-center">
                    {CoursesDetails.map(data => {
                        return (
                            <Col key={data.id}  xs lg={4} style={{ marginTop: "2.5rem" }}>
                                <Card key={data.id} style={{
                                    // backgroundColor: data.backgroundcolor,
                                    padding: "2rem",
                                    height: "530px",
                                    width: "355px",
                                    border: "3px solid" + data.borderColor,
                                    borderRadius: "2rem"
                                }}>
                                    <ListGroup key={data.id} variant="flush" style={{ border: "0px!important" }}>
                                        <ListGroup.Item style={{ fontWeight: "bold", fontSize: "25px", height: "70px" }}>{data.title}</ListGroup.Item>
                                        <ListGroup.Item style={{ fontWeight: "bold", fontSize: "20px" }}>Curriculum Includes </ListGroup.Item>
                                        <ListGroup.Item style={{ fontSize: "17px", fontWeight: "light", height: "150px" }}>{data.curriculum}</ListGroup.Item>
                                        <Link to={data.lessonpack} target="_blank" download>
                                            <div key={data.id}  style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", marginBottom: "2rem" }}>
                                                <ListGroup.Item  bsPrefix="view-more">
                                                    View Detailed Curriculum</ListGroup.Item>
                                                <div style={{ marginLeft: "0.5rem" }} key={data.id}>
                                                    <span style={{ color: "black" }}>
                                                        <FontAwesomeIcon icon={faBook} />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                        <div style={{ marginLeft: "0.5rem", marginTop :"-2rem" , display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <p className="view-more">Learn More</p>
                                            <div style={{ marginLeft: "0.5rem", marginTop: "1rem" }}>
                                                <img src={play} style={{ width: "30px", height: "30px" }} />
                                            </div>
                                        </div>
                                    </ListGroup>
                                    <div className="d-flex justify-content-center" style={{ marginTop: "2rem" }}>
                                        {/* <Link to="/tutors"> */}
                                            <button className="btn button-cta button-red" onClick = {setSearchResults}>
                                                Book a Demo
                                            </button>
                                        {/* </Link> */}
                                    </div>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default VideoComponents
