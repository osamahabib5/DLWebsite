import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, InputGroup, FormControl } from 'react-bootstrap';
import './FormWindow.css'
import axios from 'axios';
import baseUrl from '../../../../../baseUrl/baseUrl'
import Swal from 'sweetalert2'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
function FormWindow() {
    const [nametext, setnametext] = useState("Your Name");
    const [descriptiontext, setdescriptiontext] = useState("What would you like to be contacted about?")
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setform] = useState({ name: '', email: '', phone: '', message: '' })
    const contacturl = baseUrl + "/api/contact";
    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const opensweetalertdanger = (alerttext) => {
        Swal.fire({
            title: 'Contact Page',
            text: alerttext,
            type: 'success',
        })
    }
    const validateemail = (inputtxt) => {
        var patternemail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!patternemail.test(inputtxt)) {
            return false;
        }
        return true
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.phone || !form.message) {
            opensweetalertdanger("Please fill all the values");
        }
        else if (!validateemail(form.email)) {
            opensweetalertdanger("Please enter a valid email");
        }
        else if (!isValidPhoneNumber(form.phone)) {
            opensweetalertdanger("Please enter a valid phone number!");
        }
        else {
            await axios.post(contacturl, form).then(response => {
                opensweetalertdanger("Your query has been noted!")
                setform({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                })
            })
        }

    }
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 769) {
                setnametext("Your Name");
                setdescriptiontext("What would you like to be contacted about?");
            }
            if (window.innerWidth < 769) {
                setnametext("Name");
                setdescriptiontext("Type your Message")
            }
        })
    });
    return (
        <Form>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        name="name"
                        value={form.name}
                        placeholder={nametext}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Row>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <InputGroup className="mb-2">
                        <FormControl id="inlineFormInputGroup"
                            type="email"
                            name="email"
                            value={form.email}
                            placeholder="Email" onChange={handleChange} />
                    </InputGroup>
                </Col>
            </Form.Row>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <PhoneInput
                        placeholder="+92 --- -------"
                        onChange={(e) => setform({
                            ...form,
                            phone: e
                        })}
                        value={form.phone}
                    />
                </Col>
            </Form.Row>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <InputGroup className="mb-2">
                        <FormControl as="textarea"
                            rows={3}
                            id="inlineFormInputGroup" placeholder={descriptiontext}
                            onChange={handleChange}
                            name="message"
                            value={form.message}
                        />
                    </InputGroup>
                </Col>
            </Form.Row>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <button type="submit" className="btn button-contact" onClick={handleSubmit}>
                        Submit
                        </button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default FormWindow
