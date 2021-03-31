import React from 'react'
import { Card, CardDeck, Col, Row } from 'react-bootstrap'

function PaymentSection() {
    return (
        <div>
            <CardDeck style={{ margin: "auto" }} >
                {/* <Row xs={2} md={4} style={{ flexDirection: props.isMobile ? "row" : "", maxWidth: "100%", margin: props.isMobile ? "" : "auto" }}>
                    {props.displayinfo.map((data, index) => {
                        return (
                            <Col>
                                <Card key={index} >
                                    <Card.Img variant="top" src={data.image} style={{ height: props.isMobile ? "120px" : "190px", width: props.isMobile ? "120px" : "190px" }} />
                                    <Card.Body style={{ marginTop: props.cardBodySpacing }}>
                                        <Card.Title><p className="title">{data.title}</p></Card.Title>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row> */}
            </CardDeck>
        </div>
    )
}

export default PaymentSection
