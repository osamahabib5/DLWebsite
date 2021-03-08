import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from "react-bootstrap";
import TeacherOptions from './TeacherOptions/TeacherOptions';
import {Image} from 'react-bootstrap'
function TutorIntro(props) {
    return (
        <div>
            <Card>
                <Card.Img as={Image} src={props.image} alt="loading" fluid={true} />
                <Card.Body>
                    <TeacherOptions />
                </Card.Body>
            </Card>
        </div>
    )
}

export default TutorIntro
