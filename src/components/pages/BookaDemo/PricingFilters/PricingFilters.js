import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, FormCheck } from 'react-bootstrap'
import NumericInput from 'react-numeric-input';
import axios from "axios";
import { TutorsContext } from '../../../../Provider';
import baseUrl from '../../../../baseUrl/baseUrl';
import FiltersDescription from './FiltersDescription';
import Cookies from 'universal-cookie';
function PricingFilters(props) {
    const cookies = new Cookies();
    const { setOptedPackage, opted_package, parent_country, lead_id,
         startLoading, getFilteredTeachersList, calculateFees, result_type, 
         stopLoading, subscription_price, setConfirmPricing } = useContext(TutorsContext)
    // const [skipped, setSkipped] = useState(false);
    const [hours, sethours] = useState(2);
    const [days, setdays] = useState(1);
    const [advancedfilter, setadvancedfilters] = useState({ class_type: "", subscription: "", tutor_type: "", hours_per_week: 2, country: parent_country, lead_id: lead_id > 0 ? lead_id : cookies.get("leadid"), result_type: result_type })
    const [skippedoption, setskippedoptions] = useState({ class_type: "one_to_one", subscription: subscription_price, tutor_type: "standard", hours_per_week: 2, country: parent_country, lead_id: lead_id, result_type: result_type });
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
                // calculateFees(response.data.data.fee_amount)
                startLoading();
                props.showtutoroptions();
                props.showNavigation();
            }).catch(error => {
                console.log("Filters Error: " + error)
            })
        }
        if (result_type === "pricing") {
            props.showNavigation();
            props.showAppointmentPagewithTeacher();
        }
    }
    const handleSubmit = async (e) => {
        // calculateHoursPerWeek();
        // e.preventDefault();
        setConfirmPricing(true);
        console.log("Filtered Options: " + JSON.stringify(advancedfilter));
        if (result_type === "teachers") {
            startLoading();
            await axios.post(url, advancedfilter).then(response => {
                getFilteredTeachersList(response.data.data.teachers)
                console.log("Fees: "+ response.data.data.fee_amount)
                calculateFees(response.data.data.fee_amount)

                // setadvancedfilters({
                //     subscription: ""
                // })
                // if (!props.shownavigation) {
                //     props.showNavigation();
                // }
                // props.showtutoroptions();
                stopLoading();
            }).catch(error => {
                console.log("Filters Error: " + error)
            })
        }
        if (result_type === "pricing") {
            setadvancedfilters(prevState => ({
                ...prevState,
                hours_per_week: hours * days
            }))
            await axios.post(url, advancedfilter).then(response => {
                getFilteredTeachersList(response.data.data.teachers)
                calculateFees(response.data.data.fee_amount)
                startLoading();
                // setadvancedfilters({
                //     class_type: "",
                //     subscription: "",
                //     tutor_type: "",
                //     hours_per_week: 2
                // })
                if (!props.shownavigation) {
                    props.showNavigation();
                }
                props.showAppointmentPageTutor()
            }).catch(error => {
                console.log("Filters Error: " + error)
            })
        }
    }
    const onChangePackage = (e) => {
        // console.log("value: "+ e.target.value)
        // e.target.value === "3_month" && parent_country === "Pakistan" ? setOptedPackage(1) : e.target.value === "3_month" && parent_country !== "Pakistan" ? setOptedPackage(3)
        //     : e.target.value === "1_month" && parent_country !== "Pakistan" ? setOptedPackage(2) : setOptedPackage(0)
        e.persist();
        if (e.target.value === "3_month") {
            if (parent_country === "Pakistan") {
                setOptedPackage(1);
            } else {
                setOptedPackage(3);
            }
        }
        if (e.target.value === "1_month") {
            if (parent_country === "Pakistan") {
                setOptedPackage(0);
            } else {
                setOptedPackage(2);
            }
        }
        // console.log("1 :" + e.target.value)
        // console.log("Before :" + advancedfilter.subscription)
        setadvancedfilters({
            ...advancedfilter,
            subscription: e.target.value
        });
        // console.log("After :" + advancedfilter.subscription)
        // console.log("subsceription: "+advancedfilter.subscription)
        // e.target.value = "";
        if (advancedfilter.class_type || advancedfilter.tutor_type) {
            // setadvancedfilters({
            //     ...advancedfilter,
            //     subscription: e.target.value === "3_month" ? "1_month" : "3_month"
            // });
            handleSubmit();
        }
    }
    return (
        <Container>
            <Row>
                <Col>
                    <p className="filteroptionsheading">Build Your Package</p>
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
                {/* <Form.Row>
                    <Col>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3" name="class_type">
                                <FormCheck.Label>Subscription</FormCheck.Label>
                                <br />
                                <Form.Check inline label="Monthly Package" value="1_month"
                                    checked={class_type === "1_month"}
                                    type={type} id={`inline-${type}-1`} onChange={onChangePackage} />
                                <FiltersDescription />
                                <Form.Check inline label="3 Month Package" value="3_month" 
                                    checked={class_type === "3_month"}
                                    type={type} id={`inline-${type}-2`} onChange={onChangePackage} />
                                <FiltersDescription />
                            </div>
                        ))}
                    </Col>
                </Form.Row> */}
                <Form.Row>
                    <Col>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3" name="class_type">
                                <FormCheck.Label>Class Type</FormCheck.Label>
                                {/* <Col>
                                </Col> */}
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
                                    type={type} id={`inline-${type}-1`} onChange={handleOnChangeTutorType} />
                                <Form.Check inline label="Super Tutor" value="super"
                                    checked={tutor_type === "super"}
                                    type={type} id={`inline-${type}-2`} onChange={handleOnChangeTutorType} />
                                <FiltersDescription text="These are our top-tier teachers. The price to the right will reflect this premium option." />
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
                    <NumericInput min={2} defaultValue = {2} max={20} size={10} className="numericinput" onChange={(e) => {
                        setdays(parseInt(e));
                        setadvancedfilters({
                            ...advancedfilter,
                            hours_per_week: parseInt(e)
                        })
                    }} />
                </Form.Group>
            </Form>
            <div className="d-flex justify-content-center">
                <button className="btn button-cta button-blue" style={{ width: "200px" }} onClick={handleSubmit}>{result_type === "teachers" ? "Confirm Your Selections" : "Next"}
                    {/* <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: "1rem" }} /> */}
                </button>
            </div>
            {result_type === "pricing" ? <Row className="justify-content-md-center">
                <p className="skipbooking" onClick={SkipPricing}>Skip</p>
            </Row> : ""}
        </Container>
    )
}

export default PricingFilters
