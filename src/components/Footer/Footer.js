import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css';
import {
    Link
} from "react-router-dom";
import baseUrl from '../../baseUrl/baseUrl';
import axios from 'axios';

function Footer(props) {
    const [footervalues, setfootervalues] = useState({ address: '', phone_1: '', phone_2: '' })
    useEffect(() => {
        axios.get(baseUrl + "/api/getInfo/footer").then((response) => {
            setfootervalues({
                address: JSON.stringify(response.data.data.address),
                phone_1: JSON.stringify(response.data.data.phone_1),
                phone_2: JSON.stringify(response.data.data.phone_2)
            })
        }).catch((error) => {
        console.log("Footer Error: " + error)
        })
    }, [])
    return (
        <Container fluid className="footer-show">
            <Row>
                <Col className="d-inline-flex p-2 bd-highlight">
                    &copy; {new Date().getFullYear()} | THE DOT & LINE | {footervalues.address.substring(1, footervalues.address.length - 1)}  |  {footervalues.phone_1.substring(1, footervalues.phone_1.length - 1)}, {footervalues.phone_2.substring(1, footervalues.phone_2.length - 1)}
                </Col>
                <Col className="d-flex justify-content-end">
                    <ul className="list-group list-group-horizontal">
                        {/* <li className="list-group-item"><Link to = "/aboutus">About Our Company</Link></li> */}
                        <li className="list-group-item"><Link to="/contact">Contact</Link></li>
                    </ul></Col>
            </Row>
        </Container>
    )
}

export default Footer