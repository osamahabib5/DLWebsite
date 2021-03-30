import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RamazanBanner from './RamazanBanner';
import RamazanHeader from './RamazanHeader';
import RamazanImpact from './RamazanImpact';
import './RamazanLandingPage.css'
import RamazanProgramDetails from './RamazanProgramDetails';
import SignUpButtonRamazanProgram from './SignUpButtonRamazanProgram';
function RamazanLandingPage() {
    return (
        <div className="ramazan-page">
            <Container fluid>
                <Row>
                    <Col>
                        <div className="ramazan-banner">
                            <RamazanBanner />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{ marginTop: "6rem" }}>
                    <Col xs lg="6">
                        <div className="ramazan-header">
                            <RamazanHeader />
                            <SignUpButtonRamazanProgram buttontext="Sign Me Up!" />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" >
                    <Col xs lg="6">
                        <div className="ramazanprogramdetails">
                            <RamazanProgramDetails />
                            <div style={{ marginTop: "2rem" }}>
                                <SignUpButtonRamazanProgram buttontext="Sign Me Up!" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <div className="impact-section">
                            <RamazanImpact />
                            <SignUpButtonRamazanProgram buttontext="Let's do it!" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RamazanLandingPage
