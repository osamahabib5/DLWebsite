import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurApproach.css';
import { Card, CardDeck, Col, Row } from 'react-bootstrap';
function OurApproach(props) {
    return (
        <div className="d-flex flex-column bd-highlight mb-3">
            <div className="p-2 bd-highlight" style={{ marginTop: props.topSpacing }}>
                <p className="heading">{props.heading}</p>
            </div>
            <div className="p-2 bd-highlight">
                <p className="Approach-content">{props.approachcontent}</p></div>
            <div className="p-2 bd-highlight">
                <p className="details">{props.details}</p>
            </div>
            <div className="p-2 bd-highlight">
                <CardDeck style={{ margin: "auto" }} >
                    <Row xs={2} md={props.cardsno} className={props.isMobile ? "justify-content-md-center" : ""} style={{ flexDirection: props.isMobile ? "row" : "", maxWidth: "100%", margin: props.isMobile ? "" : "auto" }}>
                        {props.displayinfo.map((data, index) => {
                            return (
                                <Col>
                                    <Card key={index} >
                                        <Card.Img variant="top" src={data.image} style={{width: props.isMobile ? "113%" : "", height: props.isMobile ? "120px" : "190px", width: props.isMobile ? "120px" : "190px" }} />
                                        <Card.Body style={{ marginTop: props.cardBodySpacing }}>
                                            <Card.Title><p className="title">{data.title}</p></Card.Title>
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
