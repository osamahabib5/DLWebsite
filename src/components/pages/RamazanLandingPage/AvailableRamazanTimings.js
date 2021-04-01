import React, { useEffect } from 'react'
import { CardDeck, Row, Col, Card } from 'react-bootstrap'
import Tutors from '../Findtutor/tutorsdisplay/Tutors/Tutors'

function AvailableRamazanTimings(props) {
    return (
        <div>
            <CardDeck style={{ margin: "auto" }} >
                <Row >
                    {props.arr ? props.arr.map((data,index) => {
                        return (
                            <Col key={index}>
                                <Card key={index} >
                                    <Card.Img variant="top" src={data.picture} />
                                    <Card.Body>
                                        <Card.Title><p className="title">{data.teacher_name}</p></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }) : ""}
                </Row>
            </CardDeck>
        </div>
    )
}

export default AvailableRamazanTimings
