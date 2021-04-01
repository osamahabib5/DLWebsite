import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
function PaymentForm() {
    return (
        <div>
            <Form>
                <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="string" placeholder="Name" />
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Row>
                        <Col>
                            <PhoneInput
                                placeholder="+92 --- -------"
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label>Time Selection</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default PaymentForm
