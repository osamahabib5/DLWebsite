import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, ListGroup, Row, Col } from 'react-bootstrap';
import CoursesDetails from './CoursesDetails';
import play from '../../../../images/Courses/Play.png'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './VideoComponent.css'
import { Link } from 'react-router-dom';
const VideoComponents = (props) => {
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
    return (
        <div className="d-flex justify-content-end">
            <Container>
                <Row xs={1} md={3} className="d-flex justify-content-center">
                    {CoursesDetails.map(data => {
                        return (
                            <Col style={{ marginTop: "2.5rem" }}>
                                <Card key={data.id} style={{
                                    backgroundColor: data.backgroundcolor,
                                    height: "500px",
                                    width: "330px",
                                    // border: "2px solid" + data.borderColor,
                                    borderRadius: "2rem"
                                }}>
                                    <ListGroup variant="flush" style = {{border: "0px!important"}}>
                                        <ListGroup.Item style={{ fontWeight: "bold", fontSize: "25px" }}>{data.title}</ListGroup.Item>
                                        <ListGroup.Item style={{ fontWeight: "bold", fontSize: "20px" }}>Curriculum Includes </ListGroup.Item>
                                        <ListGroup.Item style={{ fontSize: "17px", fontWeight: "light", height: "150px" }}>{data.curriculum}</ListGroup.Item>
                                        <Link to={data.lessonpack} target="_blank" download>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
                                                <ListGroup.Item bsPrefix="view-more">
                                                    View Detailed Curriculum</ListGroup.Item>
                                                <div style = {{marginLeft: "0.5rem"}}>
                                                    <FontAwesomeIcon icon={faBook} />
                                                </div>
                                            </div>
                                        </Link>


                                    </ListGroup>
                                    <div className="d-flex justify-content-center" style={{ marginTop: "2rem" }}>
                                        <Link to="/tutors">
                                            <button className="btn button-cta button-red">
                                                Book a Demo
                                        </button>
                                        </Link>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <p className="view-more">Learn More</p>
                                        <div style={{ marginTop: "1.5rem", marginLeft: "0.5rem" }}>
                                            <img src={play} style={{ width: "30px", height: "30px" }} />
                                        </div>
                                        {/* <ListGroup.Item style = {{marginTop: "-1rem"}}>
                                           
                                        </ListGroup.Item> */}
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
