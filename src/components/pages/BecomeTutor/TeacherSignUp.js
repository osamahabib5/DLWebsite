import React, { useState } from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
function TeacherSignUp() {
    const registerapplication = {
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "28px",
        lineHeight: "38px",
        display: "flex",
        alignItems: "center",
        color: "#363E50"
    }
    const checkEmailStyling = {
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px",
        display: "flex",
        alignItems: "center",
        color: "#000000"
    }
    const [value, setValue] = useState()
    return (
        <Container>
            <Row>
                <Col>
                    <Form style={{ marginTop: "1rem" }}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail" >
                                <Form.Control type="email" placeholder="Enter Email" style = {{width: "54%"}}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="password" placeholder="Password" style = {{width: "54%"}}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="password" placeholder="Re-Enter Password" style = {{width: "54%"}}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <PhoneInput
                                placeholder="+92 --- -------"
                                value={value}
                                onChange={setValue}
                            // error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                            />
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} style={{ marginTop: "1rem" }}>
                                <button className="btn button-cta button-blue" type="submit">
                                    Register
                            </button>
                            </Form.Group>
                            <Form.Group as={Col} style={{ marginTop: "1rem" }}>
                                <p>Confirmation message text. (Appears only when User clicks/taps on ‘Register’ CTA)</p>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
                <Col>
                    <p style={registerapplication}>Register to start your application </p>
                    <p style={checkEmailStyling}>Check your email or SMS after registration to activate your account!</p>
                </Col>
            </Row>
        </Container>
    )
}

export default TeacherSignUp
