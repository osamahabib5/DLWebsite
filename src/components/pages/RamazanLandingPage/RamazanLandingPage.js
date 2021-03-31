import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PaymentSection from './PaymentSection';
import RamazanBanner from './RamazanBanner';
import RamazanHeader from './RamazanHeader';
import RamazanImpact from './RamazanImpact';
import './RamazanLandingPage.css'
import RamazanProgramDetails from './RamazanProgramDetails';
import SignUpButtonRamazanProgram from './SignUpButtonRamazanProgram';
function RamazanLandingPage(props) {
    let mobile_style = {marginTop: props.isMobile ? "2rem" : "", width: props.isMobile ? "100%" : ""};
    return (
        <div className="ramazan-page">
            <div className="ramazan-banner">
                <RamazanBanner isMobile={props.isMobile} />
            </div>

            <Container>
                <Row className="justify-content-md-center" style={mobile_style}>
                    <Col xs lg="12">
                        <div className="ramazan-header">
                            <RamazanHeader isMobile={props.isMobile} />
                            <SignUpButtonRamazanProgram buttontext="Sign Me Up!" />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={mobile_style, {padding: props.isMobile ? "2rem": ""}} >
                    <Col xs lg="12">
                        <div className="ramazanprogramdetails">
                            <RamazanProgramDetails isMobile = {props.isMobile}/>
                            <div style={{ marginTop: "2rem" }}>
                                <SignUpButtonRamazanProgram buttontext="Sign Me Up!" />
                            </div>
                        </div>
                    </Col>
                </Row>
               {/* <Row className="justify-content-md-center">
                    <Col xs lg="9">
                        <div className="impact-section">
                            <RamazanImpact />
                            <SignUpButtonRamazanProgram buttontext="Let's do it!" />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <div className="payment-section">
                            <PaymentSection />
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </div>
    )
}

export default RamazanLandingPage
