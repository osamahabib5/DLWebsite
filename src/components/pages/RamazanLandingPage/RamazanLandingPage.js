import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RamazanBanner from './RamazanBanner';
import RamazanHeader from './RamazanHeader';
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
                            <SignUpButtonRamazanProgram />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{ marginTop: "6rem" }}>
                    <Col xs lg="6">
                        <div className="ramazanprogramdetails">
                            <RamazanProgramDetails />
                            <SignUpButtonRamazanProgram />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RamazanLandingPage
