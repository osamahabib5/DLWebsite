import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from "react-bootstrap";
import TeacherOptions from './TeacherOptions/TeacherOptions';
import { Image } from 'react-bootstrap'
function TutorIntro(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Card>
                <Card.Img as={Image} src={props.image} alt="loading" fluid={true} />
                <Card.Body>
                    <div className = "teacheroptions">
                        <TeacherOptions />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TutorIntro
