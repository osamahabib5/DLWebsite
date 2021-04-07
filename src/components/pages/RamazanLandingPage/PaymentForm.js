import React, { useState, useContext, useRef } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import baseUrl from '../../../baseUrl/baseUrl';
import { TutorsContext } from '../../../Provider';
import axios from "axios";
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie';
import PaymentDetailsPopup from './PaymentDetailsPopup';
function PaymentForm() {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const cookies = new Cookies();
    const { Days, parent_country, time, teacher_id, courseid, parent_city, teacher_name, setLeadId, BookingDetails } = useContext(TutorsContext);
    const [PaymentRegistrationForm, setPaymentRegistrationForm] = useState({
        name: "", phone: "", email: "",course_id : courseid, teacher_id: teacher_id, country: parent_country ? parent_country : "Pakistan", city: parent_city ? parent_city : "None", lead_type: "ramzan_program",
        bookingdetails: BookingDetails
    });
    // const [PaymentDetails, setPaymentDetails] = useState({
    //     name: "", phone: "", course_id : courseid, teacher_id : teacher_id, country: parent_country ? parent_country : "Pakistan", city: parent_city ? parent_city : "None"});
    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toUpperCase() : word.toUpperCase();
        }).replace(/\s+/g, ' ');
    }
    const setUrlForPayment = baseUrl + '/api/lead/create';
    const PaymentUrl = baseUrl + '/api/ramzan/register';
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

        console.log("PaymentForm: " + JSON.stringify(PaymentRegistrationForm.bookingdetails))
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setPaymentRegistrationForm({
            ...PaymentRegistrationForm,
            bookingdetails: BookingDetails
        })
        // console.log("PaymentForm: " + JSON.stringify(PaymentRegistrationForm.bookingdetails))
        if (!PaymentRegistrationForm.name || !PaymentRegistrationForm.phone) {
            opensweetalertdanger("Please fill all the values");
        }
        else if (!validateemail(PaymentRegistrationForm.email)) {
            opensweetalertdanger("Please enter a valid email");
        } else if (!isValidPhoneNumber(PaymentRegistrationForm.phone)) {
            opensweetalertdanger("Please enter a valid phone number!");
        }
        else {
            await axios.post(setUrlForPayment, {
                name: PaymentRegistrationForm.name,
                phone: PaymentRegistrationForm.phone,
                email: PaymentRegistrationForm.email,
                country: PaymentRegistrationForm.country,
                city: PaymentRegistrationForm.city,
                lead_type : PaymentRegistrationForm.lead_type,
                bookingdetails: PaymentRegistrationForm.bookingdetails,
            }).then(response => {
                const leadid = JSON.stringify(response.data.data.lead_id)
                setLeadId(leadid)
                cookies.set('leadid', leadid, { path: '/' });
                onOpenModal();
                setPaymentRegistrationForm({
                    name: "",
                    email: "",
                    phone: "",
                    bookingdetails: ""
                })
            })
        }
    }
    const getPaymentDetails = async (e) => {
        e.preventDefault();
        setPaymentRegistrationForm({
            ...PaymentRegistrationForm,
            bookingdetails: BookingDetails
        })
        console.log("PaymentForm: " + JSON.stringify(PaymentRegistrationForm))
        // if (!PaymentRegistrationForm.name || !PaymentRegistrationForm.phone) {
        //     opensweetalertdanger("Please fill all the values");
        // }
        // else if (!validateemail(PaymentRegistrationForm.email)) {
        //     opensweetalertdanger("Please enter a valid email");
        // } else if (!isValidPhoneNumber(PaymentRegistrationForm.phone)) {
        //     opensweetalertdanger("Please enter a valid phone number!");
        // }
        // else {
        //     await axios.post(PaymentUrl, {
        //         name: PaymentRegistrationForm.name,
        //         phone: PaymentRegistrationForm.phone,
        //         email: PaymentRegistrationForm.email,
        //         country: PaymentRegistrationForm.country,
        //         city: PaymentRegistrationForm.city,
        //         course_id : PaymentRegistrationForm.course_id,
        //         teacher_id: PaymentRegistrationForm.teacher_id,
        //     }).then(response => {
        //         const leadid = JSON.stringify(response.data.data.lead_id)
        //         setLeadId(leadid)
        //         cookies.set('leadid', leadid, { path: '/' });
        //         onOpenModal();
        //         setPaymentRegistrationForm({
        //             name: "",
        //             email: "",
        //             phone: "",
        //             bookingdetails: ""
        //         })
        //     })
        // }
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
                            value={PaymentRegistrationForm.phone}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Control type="email" name="email" value={PaymentRegistrationForm.email} onChange={handleonChange} placeholder="Enter email" />
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Control type="string" placeholder="Tutor Details" id="bookingdetails" value={camelize((teacher_name + " - " + Days + " , " + time).toString())} disabled />
                </Form.Group>
                <div style={{ marginBottom: "2rem", marginTop: "3rem" }} className="d-flex justify-content-center">
                    <button className="btn button-cta button-red" onClick={handleOnSubmit}>
                        Talk to Sales Representative    
                    </button>
                    <div style={{ marginLeft: "2rem" }}>
                        <button className="btn button-cta button-red" onClick={getPaymentDetails}>
                            Pay Online
                    </button>
                    </div>
                </div>
            </Form>
            <div className="paymentdetails">
                <PaymentDetailsPopup open={open} onCloseModal={onCloseModal} />
            </div>
        </div>
    )
}

export default PaymentForm
