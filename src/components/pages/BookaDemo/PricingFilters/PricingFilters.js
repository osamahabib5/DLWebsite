import React, { useContext, useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Form, FormCheck } from 'react-bootstrap'
import NumericInput from 'react-numeric-input';
import axios from "axios";
import { TutorsContext } from '../../../../Provider';
import baseUrl from '../../../../baseUrl/baseUrl';
import FiltersDescription from './FiltersDescription';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2'
function PricingFilters(props) {
    const cookies = new Cookies();

    const { setOptedPackage, opted_package, parent_country, lead_id,
        startLoading, getFilteredTeachersList, calculateFees, result_type,
        stopLoading, subscription_type, setConfirmPricing, setTutorType, skipPricing, changeCountry } = useContext(TutorsContext)
    const [advancedfilter, setadvancedfilters] = useState({ class_type: "batch", subscription: subscription_type, tutor_type: "standard", hours_per_week: 3, country: parent_country ? parent_country : "Pakistan", lead_id: lead_id > 0 ? lead_id : cookies.get("leadid"), result_type: result_type })
    const [skippedoption, setskippedoptions] = useState({ class_type: "batch", subscription: subscription_type, tutor_type: "standard", hours_per_week: 3, country: parent_country, lead_id: lead_id, result_type: result_type });
    const [filledvalues, setfilledvalues] = useState(false);
    const url = baseUrl + '/api/calculateFee';
    const { class_type, subscription, tutor_type, hours_per_week, country } = advancedfilter;
    const opensweetalertdanger = (alerttext) => {
        Swal.fire({
            title: result_type === "teachers" ? "Confirm Pricing!" : "Schedule a Demo",
            text: alerttext,
            type: 'warning',
        })
    }
    const handleOnChange = (e) => {
        e.persist();
        setadvancedfilters(prevState => ({
            ...prevState,
            class_type: e.target.value
        }));
    }
    const handleOnChangeTutorType = (e) => {
        e.persist();
        setadvancedfilters(prevState => ({
            ...prevState,
            tutor_type: e.target.value
        }));
    }
    const SkipPricing = async () => {
        if (result_type === "teachers") {
            await axios.post(url, skippedoption).then(response => {
                getFilteredTeachersList(response.data.data.teachers)
                startLoading();
                setConfirmPricing(true);
                props.showNavigation();
            }).catch(error => {
                console.log("Filters Error: " + error)
            })
        }
        if (result_type === "pricing") {
            props.showNavigation();
            // skipPricing(true);
            props.showAppointmentPagewithTeacher();
        }
    }
    const handleSubmit = async (e) => {
        if (class_type && subscription && tutor_type && advancedfilter.result_type) {
            if (result_type === "teachers") {
                setfilledvalues(true);
                props.scrollToSelectedPackage();
                startLoading();
                console.log("Filters: " + JSON.stringify(advancedfilter))
                await axios.post(url, advancedfilter).then(response => {
                    setTutorType(tutor_type);
                    getFilteredTeachersList(response.data.data.teachers)
                    calculateFees(response.data.data.fee_amount)
                    setConfirmPricing(true);
                    stopLoading();
                }).catch(error => {
                    console.log("Filters Error: " + error)
                })
            }
            if (result_type === "pricing") {
                props.scrollToSelectedPackage();
                setfilledvalues(true);
                skipPricing(false);
                console.log("Filters: " + JSON.stringify(advancedfilter))
                await axios.post(url, advancedfilter).then(response => {
                    getFilteredTeachersList(response.data.data.teachers)
                    calculateFees(response.data.data.fee_amount)
                    startLoading();
                    setConfirmPricing(true);
                    if (!props.shownavigation) {
                        props.showNavigation();
                    }
                    // props.showAppointmentPageTutor()
                }).catch(error => {
                    console.log("Filters Error: " + error)
                })
            }
        } else if (result_type === "teachers") {
            opensweetalertdanger("Please fill all the values!")
        }

    }
    const onChangePackage = (e) => {
        setadvancedfilters({
            ...advancedfilter,
            subscription: e.target.value
        });
    }
    const changePricingPackage = () => {
        if (subscription === "3_month") {
            if (parent_country === "Pakistan") {
                setOptedPackage(1);
            } else {
                setOptedPackage(3);
            }
        }
        if (subscription === "1_month") {
            if (parent_country === "Pakistan") {
                setOptedPackage(0);
            } else {
                setOptedPackage(2);
            }
        }
    }
    useEffect(() => {
        if (changeCountry || !changeCountry) {
            setadvancedfilters({
                ...advancedfilter,
                country: parent_country
            })
        }
        changePricingPackage();
        handleSubmit();
    }, [subscription, class_type, tutor_type, hours_per_week, country, changeCountry])
    return (
        <Container style={{ padding: props.isMobile ? "1rem" : "" }}>
            <Row>
                <Col>
                    <p className="filteroptionsheading" style = {{textAlign: "center"}}>Build Your Package {props.isMobile ? "(Scroll down to see your customized package)": ""}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formGridState">
                        <Form.Control as="select" defaultValue={opted_package === 0 || opted_package === 2 ? "1_month" : "3_month"} onChange={onChangePackage}>
                            <option value="1_month">Monthly Package</option>
                            <option value="3_month">3 Months Package</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                </Col>
            </Row>
            <Form>
                <Form.Row>
                    <Col>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3" name="class_type">
                                <FormCheck.Label>Class Type</FormCheck.Label>
                                <br />
                                <Form.Check inline label="Small Batch" value="batch"
                                    checked={class_type === "batch"}
                                    type={type} id={`inline-${type}-1`} onChange={handleOnChange} />
                                <FiltersDescription text="Small Batch of 3-5 students per class" />
                                <Form.Check inline label="One-on-One" value="one_on_one"
                                    checked={class_type === "one_on_one"}
                                    type={type} id={`inline-${type}-2`} onChange={handleOnChange} />
                                <FiltersDescription text="Individual one-on-one attention from our expert teachers!" />
                            </div>
                        ))}
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3" name="tutor_type">
                                <FormCheck.Label>Tutor Type</FormCheck.Label>
                                <br />
                                <Form.Check inline label="Standard Tutor" value="standard" checked={tutor_type === "standard"}
                                    type={type} id={`inline-${type}-3`} onChange={handleOnChangeTutorType} />
                                <Form.Check inline label="Super Tutor" value="super"
                                    checked={tutor_type === "super"}
                                    type={type} id={`inline-${type}-4`} onChange={handleOnChangeTutorType} />
                                <FiltersDescription text="These are our top-tier teacheRs The price to the right will reflect this premium option." />
                            </div>
                        ))}
                    </Col>
                    <br />
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label>How many hours per week?</Form.Label>
                    </Col>
                </Form.Row>
                <Form.Group controlId="formBasicEmail" style={{ marginLeft: "2.5rem" }}>
                    <NumericInput mobile size={10} min={2} defaultValue={3} max={20} size={30} className="numericinput" onChange={(e) => {
                        setadvancedfilters({
                            ...advancedfilter,
                            hours_per_week: parseInt(e)
                        })
                    }} />
                </Form.Group>
            </Form>
            {/* <div className="d-flex justify-content-center">
                <button className="btn button-cta button-blue" style={{ width: "200px" }} onClick={handleSubmit}>{result_type === "teachers" ? "Confirm Your Selections" : "Next"}
                </button>
            </div> */}
            {result_type === "pricing" ? <Row className="justify-content-md-center">
                <p className="skipbooking" onClick={SkipPricing}>Skip</p>
            </Row> : ""}
        </Container>
    )
}

export default PricingFilters
