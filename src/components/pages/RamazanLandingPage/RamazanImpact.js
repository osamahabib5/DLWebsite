import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import tcfimage from './tcfimage.jpg';
function RamazanImpact() {
    return (
        <Container>
            <Row>
                <Col>
                    <p className="ramazanprogramheading">
                        Impact
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="mainheading" style = {{textAlign: "center"}}>
                        YOU CAN MAKE A DIFFERENCE!
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="10">
                    <img src = {tcfimage} style = {{width: "800px", height: "500px"}}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="impactdetails" style = {{textAlign: "center"}}>
                        By signing up your child for Dot and Line's Ramadan Program you automatically sponsor one child in a less privileged community to attend a TCF school. The Covid pandemic has shattered the lives of nearly one million children who will be forced to drop out of school this year!
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="impactdetails" style = {{textAlign: "center", fontWeight : "normal"}}>
                        This Ramadan, give your Zakat for Education and TCF, through which 266,000 deserving students are receiving  quality education.
                      </p>
                </Col>
            </Row>
        </Container>
    )
}

export default RamazanImpact
