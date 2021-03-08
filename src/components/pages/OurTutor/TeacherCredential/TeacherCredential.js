import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './TeacherCredential.css'
function TeacherCredential(props) {
    return (
        <Container >
            <Row> 
                <Col><p className = "credentials">Programs</p></Col>
            </Row>
            <Row>
                 <Col>
                    {props.programs.map((data)=>{
                        return(
                            <p className = "programs-display">{data}</p>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default TeacherCredential
