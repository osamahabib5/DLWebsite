import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player';
import Teacher1 from './Teacher-1.jpg';
import Teacher2 from './artpicture.jpg';
import LearningKitA from './LearningKitA.png';
import ProgramDetails from './ProgramDetails';
function RamazanProgramDetails() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <p className="ramazanprogramheading">
                        What does it include?
                    </p>
                </Col>
            </Row>
            {ProgramDetails.map((data, index) => {
                if (index === 0) {
                    return (
                        <Row className="justify-content-md-center">
                            <Col xs lg="6" style={{ display: "flex" }}>
                                <p className="programdetails">
                                    {data.title}
                                </p>
                            </Col>
                            <Col xs lg="6">
                                <ReactPlayer
                                    controls
                                    // height="360px"
                                    url={data.source}
                                />
                            </Col>
                        </Row>
                    )
                }
                if (index % 2 === 0 && index > 0) {
                    return (
                        <Row className="justify-content-md-center">
                            <Col xs lg="5" style={{ display: "flex" }}>
                                <p className="programdetails">
                                    {data.title}
                                </p>
                            </Col>
                            <Col xs lg="7">
                                <img src={data.source} />
                            </Col>
                        </Row>
                    )
                } else {
                    return (
                        <Row className="justify-content-md-center">
                            <Col xs lg="7">
                                <img src={data.source} />
                            </Col>
                            <Col xs lg="5" style={{ display: "flex" }}>
                                <p className="programdetails">
                                    {data.title}
                                </p>
                            </Col>
                        </Row>
                    )
                }
            })}
        </Container>
    )
}

export default RamazanProgramDetails
