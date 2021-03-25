import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurApproach.css';
import { Card, CardDeck, Col, Row } from 'react-bootstrap';
function OurApproach(props) {
    return (
        <div className="d-flex flex-column bd-highlight mb-3">
            <div className="p-2 bd-highlight"  style = {{marginTop: props.topSpacing}}> 
                <p className="heading">{props.heading}</p>
            </div>
            <div className="p-2 bd-highlight">
                <p className="Approach-content">{props.approachcontent}</p></div>
            <div className="p-2 bd-highlight">
                <p className="details">{props.details}</p>
            </div>
            <div className="p-2 bd-highlight">
                <CardDeck style={{ width: "100%", margin: "auto" }} >
                    <Row xs={2} md={props.cardsno} style = {{flexDirection: props.isMobile ? "row" : ""}}>
                        {props.displayinfo.map((data, index) => {
                            return (
                                <Col>
                                    <Card key={index}>
                                        <Card.Img variant="top" src={data.image} style = {{height: "190px", width: "190px"}}/>
                                        <Card.Body style = {{marginTop: props.cardBodySpacing}}>
                                            <Card.Title><p className="title">{data.title}</p></Card.Title>
                                            <Card.Text>
                                                {data.description.map(description => {
                                                    return (
                                                        <p className="title-description">{description}</p>
                                                    )
                                                })}
                                            </Card.Text>
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
