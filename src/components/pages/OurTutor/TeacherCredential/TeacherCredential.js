import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './TeacherCredential.css'
function TeacherCredential(props) {
    return (
        <Container >
            {props.programs ?
                <Container>
                    <Row>
                        <Col><p className="credentials">Programs</p></Col>
                    </Row>
                    <Row>
                        <Col>
                            {props.programs.map((data) => {
                                return (
                                    <p className="programs-display">{data}</p>
                                )
                            })}
                        </Col>
                    </Row>
                </Container> : ""
            }

            {props.course_packages ?
                <Container >
                    <Row>
                        <Col><p className="credentials">Packages</p></Col>
                    </Row>
                    <Row>
                        <Col>
                            {props.course_packages ? props.course_packages.map((data, index) => {
                                return (
                                    <div key={index} style={{ marginBottom: "3rem" }}>
                                        <p className="programs-display"><span style={{ fontWeight: "bold" }}>{data.title}</span> - PKR {data.amount} / month</p>
                                        <p className="programs-display">{data.hours_per_week} hrs/week - {data.timings}</p>
                                        <p className="programs-display">{data.description}</p>
                                    </div>
                                )
                            }) : ""}
                        </Col>
                    </Row>
                </Container> : ""
            }

        </Container>
    )
}

export default TeacherCredential
