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
function BookaDemo() { const [hidepackages, setpackages] = useState(false);
    const [showleads, setleadform] = useState(false);
    const [successfullead, setsuccessfullead] = useState(false);
    const [showtutors, setshowtutors] = useState(false);
    const { parent_country, setParentLocation, setParentCity } = useContext(TutorsContext)
    const hidepricingpackage = () => {
        setpackages(true)
        setleadform(true);
    }
    const showtutoroptions = () => {
        setshowtutors(true);
        setsuccessfullead(false);
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
        if (!parent_country) {
            fetchlocation()
        }
    }, [])
    return (
        <div className="bookademo">
            <Container>
                <Row>
                    <Col>
                        <div className="bookademoheader">
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
                            <Packages parent_country={parent_country} hidepricingpackage={hidepricingpackage} />
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
                        <SelectedPricePackage />
                    </Col>
                </Row> : ''}
                {successfullead ? <Row>
                    <Col>
                        <div className="pricingfilters">
                            <PricingFilters showtutoroptions = {showtutoroptions}/>
                        </div>
                    </Col>
                    <Col>
                        <SelectedPricePackage />
                    </Col>
                </Row> : ""}
            </Container>
        </div>
    )
}

export default BookaDemo
