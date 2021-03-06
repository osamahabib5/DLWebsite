import React, { useState, useEffect, useContext, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './BookaDemo.css'
import DemoTitle from './DemoTitle/DemoTitle'
import Packages from './Packages/Packages'
import { TutorsContext } from "../../../Provider";
import Leads from './Leads/Leads'
import PricingFilters from './PricingFilters/PricingFilters'
import SelectedPricePackage from './Leads/SelectedPricePackage'
import ShowTutors from "./ShowTutors/ShowTutors";
import AppointmentBooking from './AppointmentBooking/AppointmentBooking'
import ScheduleDemo from './ScheduleDemo'
import NavigateDemo from './NavigateDemo'
import { useParams, useHistory, useLocation } from 'react-router-dom';
import ConfirmAppointment from './ConfirmAppointment'
import Cookies from 'universal-cookie';
function BookaDemo(props) {
    const scrollToPackage = useRef(null);
    let { id } = useParams();
    let history = useHistory();
    let location = useLocation();
    let { state } = location;
    const cookies = new Cookies();
    const [shownavigation, setnavigation] = useState(false);
    const [hidepackages, setpackages] = useState(false);
    const [showleads, setleadform] = useState(false);
    const [successfullead, setsuccessfullead] = useState(false);
    const [showtutors, setshowtutors] = useState(false);
    const [showappointmentpage, setappointmentpage] = useState(false);
    const [scheduledemo, setscheduledemo] = useState(false);
    const [confirmappointment, setconfirmappointment] = useState(false);
    const { parent_country, setParentLocation, setParentCity, getTeacherId, setResultType, lead_id, fee_amount, result_type, calculateFees, teacher_id
        , setConfirmPricing, skipPricing, skippedpricing, setSubscription
    } = useContext(TutorsContext)
    const scrollToSelectedPackage = () => {
        if (scrollToPackage.current) {
            scrollToPackage.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    const [isMobile, setisMobile] = useState(false);
    const mobileview = () => {
        if (window.innerWidth < 769) {
            setisMobile(true);
        }
        if (window.innerWidth >= 769) {
            setisMobile(false);
        }
    }
    const reloadPage = () => {
        history.push("/pricing")
    }
    const showPricingPackages = () => {
        setpackages(false)
        setleadform(false);
        setnavigation(false);
        calculateFees(0);
    }
    const PricingwithLeadId = () => {
        setpackages(true);
        setnavigation(true);
    }
    const LeadAlreadyFilled = () => {
        setsuccessfullead(false);
        setnavigation(false);
        setpackages(false);
        setleadform(false);
    }
    const hideLeadsForm = () => {
        setleadform(false);
    }
    const showLeadsForm = () => {
        setpackages(true)
        setleadform(true);
        setnavigation(true);
    }
    const hidefeecalculator = () => {
        setpackages(true)
        setleadform(true);
        setsuccessfullead(false);
    }
    const showfeecalculator = () => {
        if (cookies.get('leadid')) {
            if (showAppointmentPage) {
                setappointmentpage(false);
                setsuccessfullead(true);
            } else {
                setleadform(false);
                setsuccessfullead(true);
            }
        }
    }
    const hidetutoroptions = () => {
        showfeecalculator();
        setshowtutors(false);
    }
    const showtutoroptions = () => {
        setshowtutors(true);
        setsuccessfullead(false);
    }
    const hideAppointmentPage = () => {
        showtutoroptions();
        setappointmentpage(false);
    }
    const showAppointmentPage = () => {
        setappointmentpage(true);
        setshowtutors(false);
    }
    const showAppointmentPageTutor = () => {
        setappointmentpage(true);
        setsuccessfullead(false);
    }
    const showAppointmentPagewithTeacher = () => {
        setappointmentpage(true);
        setsuccessfullead(false);
    }
    const hideScheduleDemo = () => {
        showAppointmentPage();
        setscheduledemo(false);
    }
    const showScheduleDemo = () => {
        setscheduledemo(true);
        setappointmentpage(false);
    }
    const showAppointmentConfirmation = () => {
        setscheduledemo(false);
        setconfirmappointment(true);
    }
    const hideAppointmentConfirmation = () => {
        setscheduledemo(true);
        setconfirmappointment(false);
    }
    const showNavigation = () => {
        setnavigation(true);
    }
    const hideNavigation = () => {
        setnavigation(false);
    }
    const SetDemoFlow = () => {
        if (id) {
            getTeacherId(id);
            showAppointmentPage();
        }
        if (state) {
            if (state.PricingValue) {
                calculateFees(0);
                skipPricing(false);
                setResultType("teachers")
                setnavigation(false);
                setleadform(false);
                setsuccessfullead(false);
                setshowtutors(false);
                setappointmentpage(false);
                setscheduledemo(false);
                setconfirmappointment(false);
                setpackages(false);
            }
            if (state.TeacherFunnel) {
                setSubscription("3_month")
                if (cookies.get('leadid')) {
                    if (fee_amount === 0) {
                        showfeecalculator();
                        setnavigation(true);
                        setpackages(true);

                    }
                    else if (fee_amount > 0) {
                        // setResultType("pricing");
                        // skipPricing(true);
                        setappointmentpage(true);
                        setnavigation(true);
                        setpackages(true);
                    }
                }
                else {
                    showLeadsForm();
                    setpackages(true);
                    setnavigation(false);
                }
            }
        }
    }
    const fetchlocation = async () => {
        try {
            await fetch('https://geolocation-db.com/json/35651dd0-7ac4-11eb-8099-0d44d45b74ca')
                .then(function (response) {
                    return response.json()
                })
                .catch(function (error) {
                    console.log("Error: " + error);
                }).then(data => {
                    setParentLocation(data.country_name);
                    setParentCity(data.city ? data.city : "");
                })
        }
        catch (error) {
            console.log("Error while getting country information " + error)
            setParentLocation("Pakistan");
            setParentCity("Karachi");
        }
    }
    const handleBackButton = history.listen((loc, action) => {
        if (action === "POP") {
            setConfirmPricing(false);
            if (successfullead) {
                if (result_type === "pricing") {
                    if (cookies.get('leadid') || lead_id > 0) {
                        history.push({
                            pathname: '/tutors/' + teacher_id,
                        });
                        calculateFees(0);
                    }
                }
                if (result_type === "teachers") {
                    if (cookies.get('leadid')) {
                        LeadAlreadyFilled()
                        calculateFees(0);
                    }
                }
            }
            else if (showtutors) {
                calculateFees(0);
                hidetutoroptions();
            }
            else if (showappointmentpage) {
                if (result_type === "pricing") {
                    if (cookies.get('leadid')) {
                        showfeecalculator();
                    }
                } else {
                    if (cookies.get('leadid')) {
                        history.push({
                            pathname: '/tutors/' + teacher_id,
                        });
                    }
                }
            }
            else if (scheduledemo) {
                hideScheduleDemo();
            }
            else if (showleads) {
                if (result_type === "teachers") {
                    calculateFees(0);
                    showPricingPackages();
                } else if (result_type === "pricing") {
                    calculateFees(0);
                    history.push({
                        pathname: '/tutors/' + teacher_id,
                    });
                }
            }
            else if (confirmappointment) {
                hideAppointmentConfirmation();
            }
        }
    });
    useEffect(() => {
        mobileview();
        window.addEventListener("resize", mobileview);
        reloadPage();
        window.addEventListener("reload", reloadPage);
        if (!parent_country) {
            fetchlocation()
        }
        SetDemoFlow();
        handleBackButton();
    }, [state])
    return (
        <div className="bookademo" style={{ marginTop: (isMobile && !cookies.get("notification")) ? "0rem " : !props.notification || (cookies.get("notification") && !isMobile) ? "3.4rem" : !props.notification || (cookies.get("notification") && isMobile) ? "3.4rem" : "3.4rem" }}>
            <Container>
                {shownavigation ? <Row>
                    <Col>
                        <NavigateDemo showleads={showleads} showPricingPackages={showPricingPackages} successfullead={successfullead}
                            hidefeecalculator={hidefeecalculator}
                            showtutors={showtutors}
                            hidetutoroptions={hidetutoroptions}
                            showappointmentpage={showappointmentpage}
                            hideAppointmentPage={hideAppointmentPage}
                            hideScheduleDemo={hideScheduleDemo}
                            scheduledemo={scheduledemo}
                            reloadPage={reloadPage}
                            showfeecalculator={showfeecalculator}
                            LeadAlreadyFilled={LeadAlreadyFilled}
                            confirmappointment={confirmappointment}
                            hideAppointmentConfirmation={hideAppointmentConfirmation}
                            isMobile={isMobile}
                        />
                    </Col>
                </Row> : ""}
                <Row>
                    <Col>
                        <div className="bookademoheader" style={{ padding: isMobile ? "2rem" : "" }} ref={scrollToPackage}>
                            <DemoTitle />
                        </div>
                    </Col>
                </Row>
                {showtutors ? <Row>
                    <Col>
                        <div className="show_tutors">
                            <ShowTutors />
                        </div>
                    </Col>
                </Row> : ''}
                {!hidepackages ? <Row>
                    <Col>
                        <div className="packages" style={{ padding: isMobile ? "0.5rem" : "" }}>
                            <Packages parent_country={parent_country} showLeadsForm={showLeadsForm} showfeecalculator={showfeecalculator} isMobile={isMobile}
                                PricingwithLeadId={PricingwithLeadId}
                            />
                        </div>
                    </Col>
                </Row> : ''}
                {showleads ? <Row style = {{flexDirection : isMobile ? "column" : ""}}>
                    <Col>
                        <div className="leads">
                            <Leads fetchlocation={fetchlocation} hidepackages={hidepackages} setsuccessfullead={setsuccessfullead}
                                setleadform={setleadform} shownavigation={shownavigation} setnavigation={setnavigation}
                                isMobile={isMobile}
                            />
                        </div>
                    </Col>
                    <Col>
                        <SelectedPricePackage isMobile={isMobile} />
                    </Col>
                </Row> : ''}
                {successfullead ? <Row style={{ flexDirection: isMobile ? "column" : "" }}>
                    {/* {isMobile ? <Col>
                            <GoToTutorsPage showfeecalculator = {showfeecalculator} showAppointmentPageTutor={showAppointmentPageTutor} />
                        </Col> : ""} */}
                    <Col>
                        <div className="pricingfilters">
                            <PricingFilters showtutoroptions={showtutoroptions}
                                showAppointmentPage={showAppointmentPage}
                                hidefeecalculator={hidefeecalculator}
                                hideLeadsForm={hideLeadsForm}
                                showAppointmentPagewithTeacher={showAppointmentPagewithTeacher}
                                shownavigation={shownavigation}
                                showNavigation={showNavigation}
                                showAppointmentPageTutor={showAppointmentPageTutor}
                                scrollToSelectedPackage={scrollToSelectedPackage}
                                isMobile={isMobile}
                            />
                        </div>
                    </Col>

                    {!skippedpricing ? <Col  >
                        {/* {isMobile ? <p className="swipepackage" style={{ marginTop: "-2rem" }}>Scroll down to customize your package</p> : ""} */}
                        <SelectedPricePackage showappointmentpage={showappointmentpage} showAppointmentPageTutor={showAppointmentPageTutor} />

                    </Col> : ""}
                </Row> : ""}
                {showappointmentpage ? <Row>
                    <Col>
                        <div className="booking-demo-appointment">
                            <AppointmentBooking showScheduleDemo={showScheduleDemo}
                                showappointmentpage={showappointmentpage}
                                isMobile={isMobile}
                            />
                        </div>
                    </Col>
                </Row> : ""}
                {scheduledemo ? <Row>
                    <Col>
                        <div className="scheduledemo">
                            <ScheduleDemo showAppointmentConfirmation={showAppointmentConfirmation} hideNavigation={hideNavigation}
                                isMobile={isMobile}
                            />
                        </div>
                    </Col>
                </Row> : ""}
                {confirmappointment ? <Row>
                    <Col>
                        <div className="confirm-appointment">
                            <ConfirmAppointment isMobile={isMobile} />
                        </div>
                    </Col>
                </Row> : ""}
            </Container>
        </div>
    )
}

export default BookaDemo
