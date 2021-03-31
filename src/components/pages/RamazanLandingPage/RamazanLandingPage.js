import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PaymentSection from './PaymentSection';
import RamazanBanner from './RamazanBanner';
import RamazanHeader from './RamazanHeader';
import RamazanImpact from './RamazanImpact';
import './RamazanLandingPage.css'
import RamazanProgramDetails from './RamazanProgramDetails';
import SignUpButtonRamazanProgram from './SignUpButtonRamazanProgram';
function RamazanLandingPage() {
    const [isMobile, setisMobile] = useState(false);
    const mobileview = () => {
        if (window.innerWidth >= 769) {
            setisMobile(false);
        }
        if (window.innerWidth < 769) {
            setisMobile(true);
        }
    }
    useEffect(() => {
        mobileview();
        window.addEventListener("resize", mobileview);
    },[]);
    let mobile_style = { marginTop: isMobile ? "2rem" : "", width: isMobile ? "100%" : "" };
    let impact_mobile_style = { marginTop: isMobile ? "0rem" : "5rem" };
    return (
        <div className="ramazan-page">
            <div className="ramazan-banner">
                <RamazanBanner isMobile={isMobile} />
            </div>

            <Container>
                <Row className="justify-content-md-center" style={mobile_style}>
                    <Col xs lg="12">
                        <div className="ramazan-header">
                            <RamazanHeader isMobile={isMobile} />
                            <SignUpButtonRamazanProgram buttontext="Sign Me Up!" />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={mobile_style, { padding: isMobile ? "2rem" : "" }} >
                    <Col xs lg="12">
                        <div className="ramazanprogramdetails">
                            <RamazanProgramDetails isMobile={isMobile} />
                            <div style={{ marginTop: "2rem" }}>
                                <SignUpButtonRamazanProgram buttontext="Sign Me Up!" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={mobile_style, { padding: isMobile ? "2rem" : "" }}>
                    <Col xs lg="9">
                        <div className="impact-section" style={impact_mobile_style}>
                            <RamazanImpact isMobile={isMobile} />
                            <SignUpButtonRamazanProgram buttontext="Sponsor a Child Now!" />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="12">
                        <div className="payment-section">
                            <PaymentSection />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RamazanLandingPage
