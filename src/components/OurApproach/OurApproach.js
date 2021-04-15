import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurApproach.css';
import { Card, CardDeck, Col, Row } from 'react-bootstrap';
function OurApproach(props) {
    return (
        <div className="d-flex flex-column bd-highlight mb-3" style={{
            marginTop: props.coursespage ? "0rem" : "",
            background: props.coursespage ? "#EDF0F5" : "",
            border: props.coursespage ? "3px solid black" : "",
            borderRadius: props.coursespage ? "2rem" : "",
        }}>
            <div className="p-2 bd-highlight" style={{ marginTop: props.topSpacing }}>
                <p className="heading" style = {{marginTop : props.coursespage ? "2rem" : ""}}>{props.heading}</p>
            </div>
            <div className="p-2 bd-highlight">
                <p className="Approach-content">{props.approachcontent}</p></div>
            <div className="p-2 bd-highlight">
                <p className="details">{props.details}</p>
            </div>
            <div className="p-2 bd-highlight">
                <CardDeck style={{ margin: "auto" }} >
                    <Row xs={2} md={props.cardsno} className={props.isMobile ? "justify-content-md-center" : ""} style={{ flexDirection: props.isMobile ? "row" : "", maxWidth: "100%", margin: props.isMobile ? "" : "auto" }}>
                        {props.displayinfo.map((data) => {
                            return (
                                <Col key={data.id}>
                                    <Card key={data.id} style={{
                                        background: props.coursespage ? "" : "", height: props.coursespage ? "510px" : "",
                                        marginBottom: props.coursespage ? "2rem" : "",
                                        border: props.coursespage ? "2px solid black" : "",
                                        borderRadius: props.coursespage ? "2rem" : "",
                                        width: props.coursespage ? "280px" : "",
                                        marginRight: props.coursespage ? "1rem" : "",
                                    }}>
                                        <Card.Img variant="top" src={data.image} style={{ height: props.isMobile ? "120px" : "190px", width: props.isMobile ? "120px" : "190px" }} />
                                        <Card.Body style={{ marginTop: props.cardBodySpacing }}>
                                            <Card.Title><p className="title" style={{ height: props.coursespage ? "50px" : "30px" }}>{data.title}</p></Card.Title>
                                            {!props.homepage ? <Card.Title style={{ marginTop: "4rem" }}><p className="title"
                                                style={{ fontSize: "15px" }}>{data.description}</p></Card.Title> : ""}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </CardDeck>
            </div>
        </div>
    )
}

export default OurApproach
