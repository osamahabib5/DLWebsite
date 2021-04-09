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
import { useLocation, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import baseUrl from '../../../baseUrl/baseUrl';
import Cookies from 'universal-cookie';
import { ClipLoader } from 'react-spinners';
function RamazanLandingPage(props) {
    const [loading, setLoading] = useState(false);
    const [isMobile, setisMobile] = useState(false);
    const scrollToPackage = useRef(null);
    const history = useHistory()
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
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const opensweetalertdanger = (alerttext) => {
        Swal.fire({
            title: 'Fee Payment',
            text: alerttext,
            type: "warning",
        }).then(() => {
            query.delete("reference_number")
            query.delete("bill_status")
            history.replace({
                search: query.toString(),
            })
        })
    }
    const opensweetalertsuccess = (alerttext) => {
        Swal.fire({
            title: 'Fee Payment',
            text: alerttext,
            type: "success",
        }).then(() => {
            query.delete("reference_number")
            query.delete("bill_status")
            history.replace({
                search: query.toString(),
            })
        })
    }


    const cookies = new Cookies();
    async function validatePayment() {
        setLoading(true);
        if (query.get("bill_status") === "paid") {
            await axios.post(baseUrl + "/api/ramzan/processInvoice", {
                student_id: cookies.get("studentid")
            }).then(response => {
                setLoading(false);
                if (response.data.success) {
                    opensweetalertsuccess("Payment Successful.")
                }
                else {
                    opensweetalertdanger("There was something wrong with the payment.")
                }
            }).catch(error => {
                setLoading(false);
                // opensweetalertdanger("There was something wrong with the payment!!")
                if (error.response.status == 400){
                    opensweetalertdanger("There are some missing values!")
                }else if(error.response.status == 401){
                    opensweetalertdanger("Something went wrong getting the invoice!")
                }else if(error.response.status == 402){
                    opensweetalertdanger("Your payment was unsuccessful. Please try again later")     
                }
            })
        }
        else if (query.get("bill_status") === "unpaid") {
            setLoading(false);
            opensweetalertdanger("Your payment was unsuccessful. Please try again!")
        }
    }
    useEffect(() => {
        mobileview();
        window.addEventListener("resize", mobileview);
        initFontAwesome();
        window.scrollTo(0, 0);
        if (query.get("bill_status")) {
            validatePayment()
        } else {
            setLoading(false)
        }
    }, []);
    let mobile_style = { marginTop: isMobile ? "2rem" : "", width: isMobile ? "100%" : "" };
    let impact_mobile_style = { marginTop: isMobile ? "0rem" : "5rem" };
    return (
        <div className="ramazan-page">
            {loading ? <div className="d-flex justify-content-center" style={{ marginTop: "6rem" }}>
                <ClipLoader size={80} color="#00ABBD" />
            </div> : <div>
                <div className="ramazan-banner">
                    <RamazanBanner isMobile={isMobile} notification = {props.notification}/>
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
                                {/* <SignUpButtonRamazanProgram buttontext="Sponsor a Child Now!" scrolltoRegistrationForm={scrolltoRegistrationForm} /> */}
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
