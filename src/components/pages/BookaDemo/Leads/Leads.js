import React, { useEffect, useState, useContext } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import baseUrl from "../../../../baseUrl/baseUrl";
import axios from "axios";
import { TutorsContext } from "../../../../Provider";
import Swal from 'sweetalert2'
import PhoneInput from 'react-phone-number-input';
function Leads(props) {
    const { parent_country, setLeadId } = useContext(TutorsContext)
    const postleadurl = baseUrl + '/api/lead/create';
    const [leadsdetail, fillleaddetails] = useState({ name: "", email: "", phone: "", country: parent_country, city: "Karachi" });
    const handleOnChange = (e) => {
        fillleaddetails({
            ...leadsdetail,
            [e.target.name]: e.target.value
        })
    }
    const validatevalues = (inputtxt) => {
        var patternemail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var patternphone = new RegExp(/^[0-9\b]+$/);
        if (!patternemail.test(inputtxt.email) || !patternphone.test(inputtxt.phone)) {
            return false;
        }
        return true
    }
    const opensweetalertdanger = (alerttext) => {
        Swal.fire({
            title: 'Create Lead',
            text: alerttext,
            type: 'warning',


        })
    }
    const PostLead = async (e) => {
        e.preventDefault();
        if (!leadsdetail.name || !leadsdetail.phone) {
            opensweetalertdanger("Please fill all the values");
        }
        else if (!validatevalues(leadsdetail)) {
            opensweetalertdanger("Please enter valid values");
        }
        else {
            await axios.post(postleadurl, leadsdetail).then(response => {
                const leadid = JSON.stringify(response.data.data.lead_id)
                setLeadId(leadid)
                if (!props.shownavigation) {
                    props.setnavigation(true);
                }
                props.setleadform(false);
                props.setsuccessfullead(true);
                fillleaddetails({
                    name: "",
                    email: "",
                    phone: ""
                })
            })
        }
        // props.setleadform(false);
        // props.setsuccessfullead(true);
    }
    useEffect(() => {
        if (!parent_country) {
            props.fetchlocation();
        };
    }, [])
    return (
        <div>
            <Container>
                <Row style={{ marginTop: "-2rem" }}>
                    <Col>
                        <p className="contact_heading">Just take a minute to give us your details before you pop over to build your own customised package.</p>
                    </Col>
                </Row>
                <Row style={{ textAlign: "center", marginTop: "2rem" }}>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Name" name="name" onChange={handleOnChange} value={leadsdetail.name} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" name="email" onChange={handleOnChange} value={leadsdetail.email} />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="number" placeholder="Phone" name="phone" onChange={handleOnChange} value={leadsdetail.phone} />
                                {/* <PhoneInput
                                    placeholder="Enter phone number" />
                                    // onChange={setValue} /> */}
                            </Form.Group>
                            <div style={{ marginTop: "4rem" }}>
                                <button className="btn button-cta button-blue" type="submit" onClick={PostLead}>
                                    Submit
                                <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: "1rem" }} />
                                </button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Leads
