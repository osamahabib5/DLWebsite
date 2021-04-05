import React, { useEffect, useContext, useState } from 'react'
import baseUrl from '../../baseUrl/baseUrl'
import axios from 'axios';
import {  Container,Col, Form, Button} from "react-bootstrap";
import { TutorsContext } from '../../Provider';
import countries_list from "./Countries_List";
function ChangeLocationPopup(props) {
    const getcountries = baseUrl + '/api/getCountryList';
    const {setParentLocation, parent_country} = useContext(TutorsContext)
    const [countrieslist, getcountrylist] = useState([]);
    useEffect(async () => {
        await (axios.get(getcountries)).then(function (response) {
            getcountrylist(response.data.data)
        }).catch(error => {
            console.log("Error: "+ error)
        })
    }, [parent_country])
    return (
        <Container>
            <h2>Change Country</h2>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formGridState">
                        <Form.Control as="select" defaultValue={!parent_country ? "Pakistan" : parent_country} onChange={(e) =>setParentLocation(e.target.value)}>
                            <option>Select Country</option>
                            {countries_list.map((val, index) => (
                                <option key={index}>
                                    {val}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row className = "d-flex justify-content-center">
                <Col>
                    <button className = "btn button-cta button-blue" onClick = {props.closeModal}>Close</button>
                </Col>
            </Form.Row>
        </Container>
    )
}

export default ChangeLocationPopup
