import React, { useState, useEffect, useRef, useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import initFontAwesome from '../../initFontAwesome/initFontAwesome';
import PaymentSection from './PaymentSection';
import RamazanBanner from './RamazanBanner';
import RamazanHeader from './RamazanHeader';
import RamazanImpact from './RamazanImpact';
import './RamazanLandingPage.css'
import RamazanProgramDetails from './RamazanProgramDetails';
import SignUpButtonRamazanProgram from './SignUpButtonRamazanProgram';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import baseUrl from '../../../baseUrl/baseUrl';
import Cookies from 'universal-cookie';
import { ClipLoader } from 'react-spinners';
function RamazanLandingPage() {
    const [loading, setLoading] = useState(false);
    const [isMobile, setisMobile] = useState(false);
    const scrollToPackage = useRef(null);
    const mobileview = () => {
        if (window.innerWidth >= 769) {
            setisMobile(false);
        }
        if (window.innerWidth < 769) {
            setisMobile(true);
        }
    }
    const scrolltoRegistrationForm = () => {
        if (scrollToPackage.current) {
            scrollToPackage.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    const opensweetalertdanger = (alerttext) => {
        Swal.fire({
            title: 'Fee Payment',
            text: alerttext,
            type: "warning",
        })
    }
    const opensweetalertsuccess = (alerttext) => {
        Swal.fire({
            title: 'Fee Payment',
            text: alerttext,
            type: "success",
        })
    }
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const cookies = new Cookies();
    async function validatePayment() {
        setLoading(true);
        if (query.get("bill_status") === "paid") {
            await axios.post(baseUrl + "/api/ramzan/processInvoice", {
                student_id: cookies.get("studentid")
            }).then(response => {
                console.log("Repasaasasa: " + JSON.stringify(response))
                setLoading(false);
                if (response.data.success) {
                    opensweetalertsuccess("Payment Successful!")
                }
                else {
                    opensweetalertdanger("There was something wrong with the payment!!")
                }
            }).catch(error => {
                opensweetalertdanger("There was something wrong with the payment!!")
                // if (error.response.status == 400){
                //     opensweetalertdanger("There are some missing values!")
                // }else if(error.response.status == 401){
                //     opensweetalertdanger("Something went wrong getting the invoice!")
                // }
            })
        }
        else if (query.get("bill_status") === "unpaid") {
            opensweetalertdanger("Your payment was unsuccessful. Please try again!")
        }
    }
    useEffect(() => {
        mobileview();
        window.addEventListener("resize", mobileview);
        initFontAwesome();
        window.scrollTo(0, 0);
        if (query.get("bill_status")){
            validatePayment()
        }else{
            setLoading(false)
        }
    }, []);
    let mobile_style = { marginTop: isMobile ? "2rem" : "", width: isMobile ? "100%" : "" };
    let impact_mobile_style = { marginTop: isMobile ? "0rem" : "5rem" };
    return (
        <div className="ramazan-page">
            {loading ? <div className="d-flex justify-content-center">
                <ClipLoader size={80} color="#00ABBD" />
            </div> : <div>
                <div className="ramazan-banner">
                    <RamazanBanner isMobile={isMobile} />
                </div>

                <Container>
                    <Row className="justify-content-md-center" style={mobile_style, { marginTop: "3rem", padding: isMobile ? "2rem" : "" }}>
                        <Col xs lg="12">
                            <div className="ramazan-header">
                                <RamazanHeader isMobile={isMobile} />
                                <SignUpButtonRamazanProgram buttontext="Sign Me Up!" scrolltoRegistrationForm={scrolltoRegistrationForm} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" style={mobile_style, { padding: isMobile ? "2rem" : "" }} >
                        <Col xs lg="12">
                            <div className="ramazanprogramdetails">
                                <RamazanProgramDetails isMobile={isMobile} />
                                <div style={{ marginTop: "2rem" }}>
                                    <SignUpButtonRamazanProgram buttontext="Sign Me Up!" scrolltoRegistrationForm={scrolltoRegistrationForm} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" style={mobile_style, { padding: isMobile ? "2rem" : "" }}>
                        <Col xs lg="9">
                            <div className="impact-section" style={impact_mobile_style}>
                                <RamazanImpact isMobile={isMobile} />
                                <SignUpButtonRamazanProgram buttontext="Sponsor a Child Now!" scrolltoRegistrationForm={scrolltoRegistrationForm} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" >
                        <Col xs lg="12">
                            <div className="payment-section" ref={scrollToPackage}>
                                <PaymentSection isMobile={isMobile} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>}
        </div>
    )
}

export default RamazanLandingPage
