import React, { useState, useContext, useRef } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import baseUrl from '../../../baseUrl/baseUrl';
import { TutorsContext } from '../../../Provider';
import axios from "axios";
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie';
function PaymentForm() {
    const cookies = new Cookies();
    const { days, parent_country, time, teacher_id, courseid, parent_city, teacher_name, setLeadId } = useContext(TutorsContext);
    const [PaymentRegistrationForm, setPaymentRegistrationForm] = useState({
        name: "", phone: "", email: "", country: parent_country ? parent_country : "Pakistan", city: parent_city ? parent_city : "None", lead_type: "ramzan_program",
        bookingdetails: ""
    });
    const setUrlForPayment = baseUrl + '/api/lead/create';
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
    const handleonChange = (e) => {
        setPaymentRegistrationForm({
            ...PaymentRegistrationForm,
            [e.target.name]: e.target.value
        })
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setPaymentRegistrationForm({
            ...PaymentRegistrationForm,
            bookingdetails: document.getElementById("bookingdetails").value
        })
        console.log("PaymentForm: " + JSON.stringify(PaymentRegistrationForm))
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
                const leadid = JSON.stringify(response.data.data.lead_id)
                setLeadId(leadid)
                cookies.set('leadid', leadid, { path: '/' });
                setPaymentRegistrationForm({
                    name: "",
                    email: "",
                    phone: "",
                    bookingdetails: ""
                })
            })
        }
    }

    return (
        <div>
            <Form>
                <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Control type="string" name="name" onChange={handleonChange} value={PaymentRegistrationForm.name} placeholder="Name" />
                </Form.Group>
                <Form.Group as={Row} style={{ flexDirection: "column" }} controlId="formBasicEmail">
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
                    <Form.Control type="email" name="email" value={PaymentRegistrationForm.email} onChange={handleonChange} placeholder="Enter email" />
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Control type="hidden" id="bookingdetails" value={teacher_name + ", " + days + ", " + time} onChange={handleonChange} placeholder="Enter email" />
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Control type="string" placeholder="Days" value={days} disabled />
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Control type="string" placeholder="Timings" value={time} disabled />
                </Form.Group>
                <div style={{ marginBottom: "2rem", marginTop: "3rem" }} className="d-flex justify-content-center">
                    <button className="btn button-cta button-red" onClick={handleOnSubmit}>
                        Submit
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default PaymentForm
