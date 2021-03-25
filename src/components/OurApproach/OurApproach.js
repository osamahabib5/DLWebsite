import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurApproach.css';
import { Card, CardDeck } from 'react-bootstrap';
function OurApproach(props) {
    return (
        <div className="d-flex flex-column bd-highlight mb-3">
            <div className="p-2 bd-highlight">
                <p className="heading">{props.heading}</p>
            </div>
            <div className="p-2 bd-highlight">
                <p className="Approach-content">{props.approachcontent}</p></div>
            <div className="p-2 bd-highlight">
                <p className="details">{props.details}</p>
            </div>
            <div className="p-2 bd-highlight">
                <CardDeck style={{ width: "100%", margin: "auto" }} >
                    {props.displayinfo.map((data, index) => {
                        return (
                            <Card key={index}>
                                <Card.Img variant="top" src={data.image} />
                                <Card.Body>
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
                        )
                    })}
                </CardDeck>
            </div>
        </div>
    )
}

export default OurApproach
