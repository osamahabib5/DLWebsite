import React, { useState, useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import baseUrl from '../../../baseUrl/baseUrl';
import { TutorsContext } from '../../../Provider';
import axios from "axios";
import Swal from 'sweetalert2'
import SignUpButtonRamazanProgram from './SignUpButtonRamazanProgram';
function PaymentForm() {
    const { days, parent_country, time, teacher_id, courseid, parent_city } = useContext(TutorsContext);
    const [PaymentRegistrationForm, setPaymentRegistrationForm] = useState({
        name: "", phone: "", email: "",
        course_id: courseid, teacher_id: teacher_id, country: parent_country ? parent_country : "Pakistan", city: parent_city ? parent_city : "None"
    });
    const setUrlForPayment = baseUrl + "/api/ramzan/register";
    const opensweetalertdanger = (alerttext) => {
        Swal.fire({
            title: 'Registration for Ramazan',
            text: alerttext,
            type: 'warning',
        })
    }
    const validateemail = (inputtxt) => {
        var patternemail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!patternemail.test(inputtxt)) {
            return false;
        }
        return true
    }
    const handleOnSubmit = async(e) => {
        e.preventDefault();
        if (!PaymentRegistrationForm.name || !PaymentRegistrationForm.phone) {
            opensweetalertdanger("Please fill all the values");
        }
        else if (!validateemail(PaymentRegistrationForm.email)) {
            opensweetalertdanger("Please enter a valid email");
        } else if (!isValidPhoneNumber(PaymentRegistrationForm.phone)) {
            opensweetalertdanger("Please enter a valid phone number!");
        }
        else {
            await axios.post(setUrlForPayment, PaymentRegistrationForm).then(response => {
                console.log("Response: "+ JSON.stringify(response.data.data))
            }).catch(error=>{
                console.log("Error: "+ error)
            })
        }
    }
    const handleonChange = (e) => {
        setPaymentRegistrationForm({
            ...PaymentRegistrationForm,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <Form>
                <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="string" name="name" onChange={handleonChange} value={PaymentRegistrationForm.name} placeholder="Name" />
                </Form.Group>
                <Form.Group as={Row} style={{ flexDirection: "column" }} controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Col sm="10">
                        <PhoneInput
                            placeholder="+92 --- -------"
                            onChange={(e) => setPaymentRegistrationForm({
                                ...PaymentRegistrationForm,
                                phone: e
                            })}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={PaymentRegistrationForm.email} onChange={handleonChange} placeholder="Enter email" />
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label>Days of Weeks</Form.Label>
                    <Form.Control type="string" placeholder="Days" value={days} disabled />
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label>Timings</Form.Label>
                    <Form.Control type="string" placeholder="Timings" value={time} disabled />
                </Form.Group>
                <div style={{ marginBottom: "2rem", marginTop: "3rem" }} className = "d-flex justify-content-center">
                    <button className = "btn button-cta button-red" onClick = {handleOnSubmit}>
                        Submit
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default PaymentForm
