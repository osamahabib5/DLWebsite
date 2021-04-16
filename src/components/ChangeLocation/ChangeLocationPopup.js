import React, { useContext } from 'react'
import { Container, Col, Form } from "react-bootstrap";
import { TutorsContext } from '../../Provider';
import countries_list from "./Countries_List";
function ChangeLocationPopup(props) {
    const { setParentLocation, parent_country, ChangeCountry, changeCountry, dontChangeCountry } = useContext(TutorsContext)
    return (
        <Container>
            <h2>Change Country</h2>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formGridState">
                        <Form.Control as="select" defaultValue={!parent_country ? "Pakistan" : parent_country} onChange={(e) => {
                            setParentLocation(e.target.value)
                            if (changeCountry) {
                                dontChangeCountry();
                            } else {
                                ChangeCountry();
                            }
                            console.log("ChangeCountry: " + changeCountry)
                        }}>
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
            <Form.Row className="d-flex justify-content-center">
                <Col>
                    <button className="btn button-cta button-blue" onClick={props.closeModal}>Close</button>
                </Col>
            </Form.Row>
        </Container>
    )
}

export default ChangeLocationPopup
