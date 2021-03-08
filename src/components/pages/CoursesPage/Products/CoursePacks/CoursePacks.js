import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import LearningKitA from './LearningKitA.png';
import CourseDetails from './CourseDetails/CourseDetails';
function CoursePacks() {
    let { path, url } = useRouteMatch();
    return (

        <div >
            <Card className="bg-dark text-white">
                <Card.Img src={LearningKitA} alt="Card image" height="592px" />
                <Link to="/programs/kitdetails">
                    <Card.ImgOverlay style={{ cursor: "pointer" }}>
                        <Card.Title>AGES 5-8</Card.Title>
                        <Card.Text>
                            Home Learning Kit A
                 </Card.Text>
                    </Card.ImgOverlay>
                </Link>
            </Card>
        </div>
    )
}

export default CoursePacks