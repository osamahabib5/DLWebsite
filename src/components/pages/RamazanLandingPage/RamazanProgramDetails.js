import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player';
import ProgramDetails from './ProgramDetails';
function RamazanProgramDetails(props) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <p className="ramazanprogramheading" style = {{fontSize: props.isMobile ? "30px" :""}}>
                        What does it include?
                    </p>
                </Col>
            </Row>
            {ProgramDetails.map((data, index) => {
                if (index === 0) {
                    return (
                        <Row className="justify-content-md-center" style={{ flexDirection: props.isMobile ? "column" : "" }} key={index}>
                            <Col xs lg="5" >
                                <p className="programdetails">
                                    {data.title}
                                </p>
                                <p className="programdetails" style={{ fontWeight: 'normal' }}>
                                    {data.description}
                                </p>
                            </Col>
                            <Col xs lg="7">
                                <ReactPlayer
                                    controls
                                    className = "react-video-player"
                                    // width="100%"
                                    // height="auto"
                                    // style={{ backgroundColor: "white", display: "flex" }}
                                    url={data.source}
                                />
                            </Col>
                        </Row>
                    )
                }
                if (index % 2 === 0 && index > 0) {
                    return (
                        <Row className="justify-content-md-center" style={{ flexDirection: props.isMobile ? "column" : "" }} key={index}>
                            <Col xs lg="5">
                                <p className="programdetails">
                                    {data.title}
                                </p>
                                <p className="programdetails" style={{ fontWeight: 'normal' }}>
                                    {data.description}
                                </p>
                            </Col>
                            <Col xs lg="7">
                                <img alt = "...Loading" src={data.source} style={{ width: props.isMobile ? "100%" : "" }} />
                            </Col>
                        </Row>
                    )
                } else {
                    return (
                        <Row className="justify-content-md-center" style={{ flexDirection: props.isMobile ? 'column-reverse' : "" }} key={index}>
                            <Col xs lg="7">
                                <img alt = "...Loading" src={data.source} style={{ width: props.isMobile ? "100%" : "" }} />
                            </Col>
                            <Col xs lg="5">
                                <p className="programdetails">
                                    {data.title}
                                </p>
                                <p className="programdetails" style={{ fontWeight: 'normal' }}>
                                    {data.description}
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
