import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck, Card, ListGroup } from 'react-bootstrap';
import CoursesDetails from './CoursesDetails';
import play from '../../../../images/Courses/Play.png'
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
            <CardDeck>
                {CoursesDetails.map(data => {
                    return (
                        <Card key={data.id} style={{
                            backgroundColor: data.backgroundcolor,
                            height: "500px"
                        }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item style = {{fontWeight : "bold", fontSize : "14px"}}>{data.title}</ListGroup.Item>
                                <ListGroup.Item style = {{fontWeight : "bold", fontSize : "12px"}}>Curriculum Includes: </ListGroup.Item>
                                <ListGroup.Item style={{ fontSize: "12px", fontWeight: "light", height: "95px" }}>{data.curriculum}</ListGroup.Item>
                                <ListGroup.Item bsPrefix = "view-more">
                                    View Detailed Curriculum</ListGroup.Item>
                                {data.levels ? <ListGroup.Item >{data.levels}</ListGroup.Item> : ""}

                            </ListGroup>
                            <div className="d-flex justify-content-center" style = {{marginBottom: "2rem"}}>
                                <Link to="/tutors">
                                    <button className="btn button-cta button-red">
                                        Book a Demo
                                </button>
                                </Link>
                            </div>
                        </Card>
                    )
                })}
            </CardDeck>
        </div>
    )
}

export default VideoComponents
