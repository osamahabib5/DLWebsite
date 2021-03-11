import React, { useState, useEffect, useContext } from 'react'
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
import { useParams, useHistory } from 'react-router-dom';
import ConfirmAppointment from './ConfirmAppointment'
function BookaDemo() {
    let { id } = useParams();
    let history = useHistory();
    const [shownavigation, setnavigation] = useState(false);
    const [hidepackages, setpackages] = useState(false);
    const [showleads, setleadform] = useState(false);
    const [successfullead, setsuccessfullead] = useState(false);
    const [showtutors, setshowtutors] = useState(false);
    const [showappointmentpage, setappointmentpage] = useState(false);
    const [scheduledemo, setscheduledemo] = useState(false);
    const [confirmappointment, setconfirmappointment] = useState(false);
    const { parent_country, setParentLocation, setParentCity, getTeacherId } = useContext(TutorsContext)
    const [isMobile, setisMobile] = useState(false);
    const mobileview = () => {
        if (window.innerWidth < 769) {
            setisMobile(true);
        }
        if (window.innerWidth >= 769) {
            setisMobile(false);
        }
    }
    const reloadPage = ()=>{
        history.push("/pricing")
    }
    const showPricingPackages = () => {
        setpackages(false)
        setleadform(false);
        setnavigation(false);
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
        setleadform(false);
        setsuccessfullead(true);
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
    const hideScheduleDemo = () => {
        showAppointmentPage();
        setscheduledemo(false);
    }
    const showScheduleDemo = () => {
        setscheduledemo(true);
        setappointmentpage(false);
    }
    const showAppointmentConfirmation = ()=>{
        setscheduledemo(false);
        setconfirmappointment(true);
    }
    const SelectedTeacherTrue = () => {
        if (id) {
            getTeacherId(id);
            showAppointmentPage();
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
                setParentCity(data.city);
            })
    }
    useEffect(() => {
        mobileview();
        window.addEventListener("resize", mobileview);
        reloadPage();
        window.addEventListener("reload", reloadPage);
        if (!parent_country) {
            fetchlocation()
        }
        SelectedTeacherTrue();
    }, [id])
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
                            reloadPage = {reloadPage}
                        />
                    </Col>
                </Row> : ""}
                <Row>
                    <Col>
                        <div className="bookademoheader" style={{ padding: isMobile ? "2rem" : "" }}>
                            <DemoTitle />
                        </div>
                    </Col>
                </Row>
                {showtutors ? <Row>
                    <Col>
                        <div className="show_tutors">
                            <ShowTutors showAppointmentPage={showAppointmentPage} />
                        </div>
                    </Col>
                </Row> : ''}
                {!hidepackages ? <Row>
                    <Col>
                        <div className="packages">
                            <Packages parent_country={parent_country} showLeadsForm={showLeadsForm} showfeecalculator={showfeecalculator} isMobile={isMobile} />
                        </div>
                    </Col>
                </Row> : ''}
                {showleads ? <Row>
                    <Col>
                        <div className="leads">
                            <Leads fetchlocation={fetchlocation} hidepackages={hidepackages} setsuccessfullead={setsuccessfullead}
                                setleadform={setleadform} />
                        </div>
                    </Col>
                    <Col>
                        <SelectedPricePackage isMobile={isMobile} />
                    </Col>
                </Row> : ''}
                {successfullead ? <Row>
                    <Col>
                        <div className="pricingfilters">
                            <PricingFilters showtutoroptions={showtutoroptions} />
                        </div>
                    </Col>
                    <Col>
                        <SelectedPricePackage />
                    </Col>
                </Row> : ""}
                {showappointmentpage ? <Row>
                    <Col>
                        <div className="booking-demo-appointment">
                            <AppointmentBooking showScheduleDemo={showScheduleDemo} />
                        </div>
                    </Col>
                </Row> : ""}
                {scheduledemo ? <Row>
                    <Col>
                        <div className="scheduledemo">
                            <ScheduleDemo showAppointmentConfirmation = {showAppointmentConfirmation}/>
                        </div>
                    </Col>
                </Row> : ""}
                {confirmappointment ? <Row>
                    <Col>
                        <div className="confirm-appointment">
                            <ConfirmAppointment />
                        </div>
                    </Col>
                </Row> : ""}
            </Container>
        </div>
    )
}

export default BookaDemo
