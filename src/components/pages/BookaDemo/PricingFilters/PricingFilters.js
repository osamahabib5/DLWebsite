import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, FormCheck } from 'react-bootstrap'
import NumericInput from 'react-numeric-input';
import axios from "axios";
import { TutorsContext } from '../../../../Provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import baseUrl from '../../../../baseUrl/baseUrl';
import Swal from 'sweetalert2'
function PricingFilters(props) {
    const { setOptedPackage, parent_country, lead_id, startLoading, getFilteredTeachersList, calculateFees, result_type, subscription } = useContext(TutorsContext)
    // const [skipped, setSkipped] = useState(false);
    const [hours, sethours] = useState(2);
    const [days, setdays] = useState(1);
    const [advancedfilter, setadvancedfilters] = useState({ class_type: "", subscription: subscription, tutor_type: "", hours_per_week: 2, country: parent_country, lead_id: lead_id, result_type: result_type })
    const [skippedoption, setskippedoptions] = useState({ class_type: "one_to_one", subscription: subscription, tutor_type: "standard", hours_per_week: 2, country: parent_country, lead_id: lead_id, result_type: result_type });
    const { class_type, tutor_type } = advancedfilter;
    const url = baseUrl + '/api/calculateFee';
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
                calculateFees(response.data.data.fee_amount)
                startLoading();
                props.showtutoroptions();
            }).catch(error => {
                console.log("Filters Error: " + error)
            })
        }
        if (result_type === "pricing") {
            props.showAppointmentPagewithTeacher();
        }
    }
    const handleSubmit = async (e) => {
        // calculateHoursPerWeek();
        e.preventDefault();
        if (result_type === "teachers") {
            setadvancedfilters(prevState => ({
                ...prevState,
                hours_per_week: hours * days
            }))
            await axios.post(url, advancedfilter).then(response => {
                console.log("Calculator Response: " + JSON.stringify(response.data.data))
                getFilteredTeachersList(response.data.data.teachers)
                calculateFees(response.data.data.fee_amount)
                startLoading();
                setadvancedfilters({
                    class_type: "",
                    subscription: "",
                    tutor_type: "",
                    hours_per_week: 2
                })
                props.showtutoroptions();
            }).catch(error => {
                console.log("Filters Error: " + error)
            })
        }
        if (result_type === "pricing") {
            props.showAppointmentPage();
        }
    }
    const onChangePackage = (e) => {
        e.target.value === "3_month" ? setOptedPackage(1) : setOptedPackage(0)
        setadvancedfilters(prevState => ({
            ...prevState,
            subscription: e.target.value
        }));
    }
    return (
        <Container>
            <Row>
                <Col>
                    <p className="filteroptionsheading">Next, select your options</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formGridState">
                        <Form.Control as="select" defaultValue="3 Months Package" onChange={onChangePackage}>
                            <option>Which package do you want to select?</option>
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
                                <Col>
                                </Col>
                                <Form.Check inline label="Small Batches" value="batch"
                                    checked={class_type === "batch"}
                                    type={type} id={`inline-${type}-1`} onChange={handleOnChange} />
                                <Form.Check inline label="One-on-One" value="one_on_one"
                                    checked={class_type === "one_on_one"}
                                    type={type} id={`inline-${type}-2`} onChange={handleOnChange} />
                            </div>
                        ))}
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3" name="tutor_type">
                                <FormCheck.Label>Tutor Type</FormCheck.Label>
                                <Col>
                                </Col>
                                <Form.Check inline label="Standard Tutor" value="standard" checked={tutor_type === "standard"}
                                    type={type} id={`inline-${type}`} onChange={handleOnChangeTutorType} />
                                <Form.Check inline label="Super Tutor" value="super"
                                    checked={tutor_type === "super"}
                                    type={type} id={`inline-${type}`} onChange={handleOnChangeTutorType} />
                            </div>
                        ))}
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label>How many days/week would you like to take classes?</Form.Label>
                    </Col>
                </Form.Row>
                <Form.Group controlId="formBasicEmail" style={{ marginLeft: "2.5rem" }}>
                    <NumericInput min={1} value={days} max={7} size={10} className="numericinput" onChange={(e) => {
                        setdays(parseInt(e));
                        setadvancedfilters(prevState => ({
                            ...prevState,
                            hours_per_week: hours * days
                        }))
                    }} />
                </Form.Group>
                <Form.Row>
                    <Col>
                        <Form.Label>How long do you want the classes to be taken?</Form.Label>
                        {/* {hours || days ? <Form.Label>(Hours Per Week: {advancedfilter.hours_per_week}) </Form.Label> : ""} */}
                    </Col>
                </Form.Row>
                <Form.Group controlId="formBasicEmail" style={{ marginLeft: "2.5rem" }}>
                    <NumericInput min={2} max={7} value={hours} size={10} className="numericinput" onChange={(e) => {
                        sethours(parseInt(e));
                        setadvancedfilters(prevState => ({
                            ...prevState,
                            hours_per_week: hours * days
                        }))
                    }} />
                </Form.Group>
            </Form>
            {result_type === "teachers" ? <div className="d-flex justify-content-center">
                <button className="btn button-cta button-blue" onClick={handleSubmit}>Select Tutor
                <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: "1rem" }} />
                </button>
            </div> : ""}
            <Row className="justify-content-md-center">
                <p className="skipbooking" onClick={SkipPricing}>Skip</p>
            </Row>
        </Container>
    )
}

export default PricingFilters
