import React from 'react'
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap'

function ShowTutors() {
    return (
        <Container>
            <Row>
                <Col>
                    <p className="filteroptionsheading">Now, select a preferred tutor for a free demo.</p>
                </Col>
            </Row>
            <Row>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text style = {{fontSize: "12px", color: "black"}}>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Row>
        </Container>
    )
}

export default ShowTutors
