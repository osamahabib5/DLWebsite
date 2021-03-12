import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './TeachingMethods.css'

function TeachingMethods(props) {
    return (
        <div className="d-flex flex-column bd-highlight mb-3">
            <div className="p-2 bd-highlight">
                <p className="methods-heading">Teaching Methods</p>
            </div>
            <div className="p-2 bd-highlight" style={{ marginTop: '-1rem' }}>
                {props.teaching_methods.map((data, index) => {
                    if (index == 0) {
                        return (
                            <Button variant="outline-secondary" style={{ marginLeft: "0rem" }}>{data}</Button>
                        )
                    } else {
                        return (
                            <Button variant="outline-secondary" style={{ marginLeft: "1rem" }}>{data.toString().replace("_"," ")}</Button>
                        )
                    }
                })}
            </div>
            <div className="p-2 bd-highlight" style={{ marginTop: '3rem' }}>
                <Container>
                    <Row>
                        <Col className="active-students">
                            <div className="d-flex flex-column bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    <p className="methods-heading">Active Students</p>
                                </div>
                                <div className="p-2 bd-highlight" style={{ marginTop: '-1rem' }}>
                                    <p className="methods-number">{props.active_students}</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="teaching-hours">
                            <div className="d-flex flex-column bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    <p className="methods-heading">Lifetime teaching hours</p>
                                </div>
                                <div className="p-2 bd-highlight" style={{ marginTop: '-1rem' }}>
                                    <p className="methods-number">{props.lifetime_hours} hours</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default TeachingMethods
