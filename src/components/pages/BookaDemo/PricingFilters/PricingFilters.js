import React, { useState } from 'react'
import { Container, Row, Col, Form, FormCheck } from 'react-bootstrap'
import SelectedPricePackage from '../Leads/SelectedPricePackage'
import NumericInput from 'react-numeric-input';
function PricingFilters() {
    const [advancedfilter, setadvancedfilters] = useState([{ class_type: '' }])
    const changeValue = (e) => {
        setadvancedfilters({
            ...advancedfilter,
            class_type: e.target.value
        })
        console.log("FIlters: " + JSON.stringify(advancedfilter))
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
                        <Form.Control as="select" defaultValue="3 Months Package">
                            <option>Which package do you want to select?</option>
                            <option>Monthly Package</option>
                            <option>3 Months Package</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                </Col>
                <Col>
                    {/* <SelectedPricePackage /> */}
                </Col>
            </Row>
            <Form>
                <Form.Row>
                    <Col>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <FormCheck.Label>Class Type</FormCheck.Label>
                                <Col>
                                </Col>
                                <Form.Check inline label="Small Batches" value="batch" checked={advancedfilter.class_type === "batch"}
                                    onChange={changeValue}
                                    type={type} id={`inline-${type}-1`} />
                                <Form.Check inline label="One-on-One" value="one_on_one"
                                    checked={advancedfilter.class_type === "one_on_one"}
                                    onChange={changeValue}
                                    type={type} id={`inline-${type}-2`} />
                            </div>
                        ))}
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <FormCheck.Label>Tutor Type</FormCheck.Label>
                                <Col>
                                </Col>
                                <Form.Check inline label="Standard Tutor" value="standard" checked={advancedfilter.class_type === "standard"}
                                    onChange={changeValue}
                                    type={type} id={`inline-${type}-1`} />
                                <Form.Check inline label="Super Tutor" value="super"
                                    checked={advancedfilter.class_type === "super"}
                                    onChange={changeValue}
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
        </Container>
    )
}

export default PricingFilters
