import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, FormCheck, Button } from 'react-bootstrap'
import NumericInput from 'react-numeric-input';
import axios from "axios";
import { TutorsContext } from '../../../../Provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import baseUrl from '../../../../baseUrl/baseUrl';
function PricingFilters(props) {
    const { setOptedPackage, parent_country, lead_id, startLoading, getFilteredTeachersList, calculateFees } = useContext(TutorsContext)
    const [hours, sethours] = useState(2);
    const [days, setdays] = useState(1);
    const [advancedfilter, setadvancedfilters] = useState({ class_type: "", subscription: "", tutor_type: "", hours_per_week: hours * days, country: parent_country, lead_id: lead_id, result_type: "teachers" })
    const { class_type } = advancedfilter;
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
    const handleSubmit = async (e) => {
        // calculateHoursPerWeek();
        e.preventDefault();
        setadvancedfilters(prevState =>({
            ...prevState,
            hours_per_week: hours * days
        }))
        console.log("Filters Sent: " + JSON.stringify(advancedfilter))
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
                                <Form.Check inline label="Standard Tutor" value="standard" checked={advancedfilter.tutor_type === "standard"}
                                    onChange={handleOnChangeTutorType}
                                    type={type} id={`inline-${type}-1`} />
                                <Form.Check inline label="Super Tutor" value="super"
                                    checked={advancedfilter.tutor_type === "super"}
                                    onChange={handleOnChangeTutorType}
                                    type={type} id={`inline-${type}-2`} />
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
                    <NumericInput min={1} max={7} size={10} className="numericinput" componentClass="input" onChange={(e)=>setdays(parseInt(e))} />
                </Form.Group>
                <Form.Row>
                    <Col>
                        <Form.Label>How long do you want the classes to be taken?</Form.Label>
                    </Col>
                </Form.Row>
                <Form.Group controlId="formBasicEmail" style={{ marginLeft: "2.5rem" }}>
                    <NumericInput min={2} max={7} size={10} className="numericinput" componentClass="input" onChange={(e)=>sethours(parseInt(e))} />
                </Form.Group>
            </Form>
            <Row className="justify-content-md-center">
                <Button onClick={handleSubmit}>Select Tutor
                <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: "1rem" }} />
                </Button>
            </Row>
            <Row className="justify-content-md-center">
                <p className="skipbooking" onClick={props.showtutoroptions}>Skip</p>
            </Row>
        </Container>
    )
}

export default PricingFilters
