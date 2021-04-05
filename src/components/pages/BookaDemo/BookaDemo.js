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
function BookaDemo() {
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
        , setConfirmPricing, skipPricing, skippedpricing
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
                if (cookies.get('leadid')) {
                    if (fee_amount == 0) {
                        // showLeadsForm();
                        skipPricing(true);
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
        <div className="bookademo">
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
                            showfeecalculator={showfeecalculator}
                            isMobile={isMobile}
                        />
                    </Col>
                </Row> : ""}
                <Row>
                    <Col>
                        <div className="bookademoheader" style={{ padding: isMobile ? "2rem" : "" }} ref = {scrollToPackage}>
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
                        <div className="packages">
                            <Packages parent_country={parent_country} showLeadsForm={showLeadsForm} showfeecalculator={showfeecalculator} isMobile={isMobile}
                                PricingwithLeadId={PricingwithLeadId} isMobile={isMobile}
                                showfeecalculator={showfeecalculator}
                            />
                        </div>
                    </Col>
                </Row> : ''}
                {showleads ? <Row>
                    <Col>
                        <div className="leads">
                            <Leads fetchlocation={fetchlocation} hidepackages={hidepackages} setsuccessfullead={setsuccessfullead}
                                setleadform={setleadform} shownavigation={shownavigation} setnavigation={setnavigation} />
                        </div>
                    </Col>
                    <Col>
                        <SelectedPricePackage isMobile={isMobile} />
                    </Col>
                </Row> : ''}
                {successfullead ? <Row>
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
                                isMobile = {isMobile}
                            />
                        </div>
                    </Col>
                    {!skippedpricing ? <Col  >
                        <SelectedPricePackage showAppointmentPageTutor={showAppointmentPageTutor} />
                    </Col> : ""}
                </Row> : ""}
                {showappointmentpage ? <Row>
                    <Col>
                        <div className="booking-demo-appointment">
                            <AppointmentBooking showScheduleDemo={showScheduleDemo}
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
