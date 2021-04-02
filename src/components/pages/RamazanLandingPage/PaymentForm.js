import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import SignUpButtonRamazanProgram from './SignUpButtonRamazanProgram';
function PaymentForm() {
    const [PaymentRegistrationForm, setPaymentRegistrationForm] = useState({
        name: "", phone: "", email: "",
        course_id: "", teacher_id: "", country: "", city: ""
    });
    return (
        <div>
            <Form>
                <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="string" name="name" value={PaymentRegistrationForm.name} placeholder="Name" />
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Col sm="10">
                        <PhoneInput
                            placeholder="+92 --- -------"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={PaymentRegistrationForm.email} placeholder="Enter email" />
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label>Time Selection</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div style = {{marginBottom: "2rem", marginTop: "3rem"}}>
                    <SignUpButtonRamazanProgram buttontext="Submit" />
                </div>
            </Form>
        </div>
    )
}

export default PaymentForm
