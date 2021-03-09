import React, { useEffect, useState, useContext } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import baseUrl from "../../../../baseUrl/baseUrl";
import axios from "axios";
import { TutorsContext } from "../../../../Provider";
import SweetAlert from 'react-bootstrap-sweetalert';
function Leads(props) {
    const { parent_country, setLeadId } = useContext(TutorsContext)
    const postleadurl = baseUrl + '/api/lead/create';
    // const [successfullead, setsuccessfullead] = useState(false);
    const [leadsdetail, fillleaddetails] = useState({ name: "", email: "", phone: "", country: parent_country, city: "Karachi" });
    const handleOnChange = (e) => {
        fillleaddetails({
            ...leadsdetail,
            [e.target.name]: e.target.value
        })
    }
    const PostLead = async (e) => {
        e.preventDefault();
        if (!leadsdetail.name || !leadsdetail.phone) {
            alert("Please fill all the values")
        }
        else {
            await axios.post(postleadurl, leadsdetail).then(response => {
                const leadid = JSON.stringify(response.data.data.lead_id)
                console.log("Lead Id: "+ leadid)
                setLeadId(leadid)
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
                        <p className="contact_heading">Second, please provide your contact information.</p>
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
                                <Form.Control type="number" placeholder="Phone Number" name="phone" onChange={handleOnChange} value={leadsdetail.phone} />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={PostLead}>
                                Submit
                                <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: "1rem" }} />
                            </Button>
                        </Form>
                    </Col>
                    {/* <Col>
                        <SelectedPricePackage />
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default Leads
