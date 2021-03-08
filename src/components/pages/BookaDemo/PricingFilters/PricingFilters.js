import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, FormCheck, Button } from 'react-bootstrap'
import NumericInput from 'react-numeric-input';
import { TutorsContext } from '../../../../Provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
function PricingFilters(props) {
    const { setOptedPackage, parent_country } = useContext(TutorsContext)
    const [advancedfilter, setadvancedfilters] = useState([{ class_type: '', subscription: "", tutor_type: "", hours_per_week: 2, country: parent_country }])
    const handleOnChange = (e) => {
        setadvancedfilters({
            ...advancedfilter,
            [e.target.name]: e.target.value
        })
        console.log("HandleOnChange: " + JSON.stringify(advancedfilter))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.showtutoroptions();
    }
    const onChangePackage = (e) => {
        e.target.value === "3_month" ? setOptedPackage(2) : setOptedPackage(1)
        setadvancedfilters({
            ...advancedfilter,
            subscription: e.target.value
        })
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
                            <div key={`default-${type}`} className="mb-3" onChange={handleOnChange} name = "class_type">
                                <FormCheck.Label>Class Type</FormCheck.Label>
                                <Col>
                                </Col>
                                <Form.Check inline label="Small Batches" value="batch"

                                    type={type} id={`inline-${type}-1`} />
                                <Form.Check inline label="One-on-One" value="one_on_one"
                                    type={type} id={`inline-${type}-2`} />
                            </div>
                        ))}
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3" name = "tutor_type">
                                <FormCheck.Label>Tutor Type</FormCheck.Label>
                                <Col>
                                </Col>
                                <Form.Check inline label="Standard Tutor" value="standard" checked={advancedfilter.class_type === "standard"}
                                    onChange={handleOnChange}
                                    type={type} id={`inline-${type}-1`} />
                                <Form.Check inline label="Super Tutor" value="super"
                                    checked={advancedfilter.class_type === "super"}
                                    onChange={handleOnChange}
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
                    <NumericInput min={2} max={100} value={2} style={{ width: "50px" }} />
                </Form.Group>
                <Form.Row>
                    <Col>
                        <Form.Label>How long do you want the classes to be taken?</Form.Label>
                    </Col>
                </Form.Row>
                <Form.Group controlId="formBasicEmail" style={{ marginLeft: "2.5rem" }}>
                    <NumericInput min={1} max={100} value={1} style={{ width: "50px" }} />
                </Form.Group>
            </Form>
            <Row className="justify-content-md-center">
                <Button onClick={handleSubmit}>Select Tutor
                <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: "1rem" }} />
                </Button>
            </Row>
            <Row className="justify-content-md-center">
                <p className="skipbooking">Skip</p>
            </Row>
        </Container>
    )
}

export default PricingFilters
