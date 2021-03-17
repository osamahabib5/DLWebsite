import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import './CardBodyMobile.css'
import { TutorsContext } from "../../../../Provider";
import Select from 'react-select';
import makeAnimated from 'react-select/animated'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import baseUrl from "../../../../baseUrl/baseUrl";
import axios from "axios";
function CardBodyMobile(props) {
    const { fetched_grades, subjects_list, startLoading, stopLoading, setresults } = useContext(TutorsContext)
    const heightMarks = {
        10000: "10000",
        20000: "20000",
        30000: "30000",
        40000: "40000"

    };
    const filter_url = baseUrl + '/api/teachers/search'
    const [filter_parameters, fillfilters] = useState({ teacher_name: '', budget: 0, subjects: [], grade: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Filters: " + JSON.stringify(filter_parameters))
        startLoading();
        await axios({
            method: 'get',
            url: filter_url,
            params: filter_parameters
        })
            .then(function (response) {
                const item = response.data.data;
                setresults(item);
                setTimeout(() => fillfilters({
                    teacher_name: '',
                    budget: 0,
                    subjects: [],
                    grade: ""
                }), 4000);
                props.scrolltotutors();
            })
            .catch(function (error) {
                console.log("Error's Response: " + error);
                stopLoading();
            });
    }
    const onChangeSubject = (data) => {
        const arr = [];
        data.forEach(data => {
            arr.push(data.value)
        })
        fillfilters({
            ...filter_parameters,
            subjects: arr
        })
    }
    const animatedComponents = makeAnimated();
    const [advanced_filters, showadvancedfilters] = useState(false);
    return (
        <div className="ourtutor-body-mobile">
            <Container>
                <Row>
                    <Col><p className="our-tutors">OUR TUTORS</p></Col>
                </Row>
                <Row>
                    <Col><p className="our-tutors-description">Get the best teachers for your children</p></Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formGridState">
                            <Form.Control as="select" defaultValue="Grade 1" onChange={(e) => fillfilters({
                                ...filter_parameters,
                                grade: e.target.value
                            })}>
                                <option>Filter By Grades....</option>
                                {fetched_grades ? fetched_grades.map((val, index) => (
                                    <option key={index}>
                                        {val}
                                    </option>
                                )) : ''}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-3" style={{ marginLeft: "0.5rem" }}>
                            <FormControl
                                placeholder="Search for a Specific Tutor"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={filter_parameters.teacher_name}
                                onChange={(e) => fillfilters({
                                    ...filter_parameters,
                                    teacher_name: e.target.value
                                })}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {subjects_list ? <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={subjects_list}
                            placeholder="Which subjects you are looking for?"
                            name="subjects"
                            onChange={onChangeSubject}
                        /> : <div>
                            ..Loading
                    </div>}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formGridState">
                            <Form.Control as="select" defaultValue="Filter by grade level" name="methods">
                                <option>Teaching Methods</option>
                                <option>Teacher's Home</option>
                                <option>Online</option>
                                <option>Student's Home</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="advancedfilters" onClick={() => showadvancedfilters((prevState) => !prevState)}> Advanced Filters</p>
                    </Col>
                </Row>
                {advanced_filters ? <Row>
                    <Col>
                        <Slider
                            min={1000}
                            max={50000}
                            marks={heightMarks}
                            value={filter_parameters.budget}
                            onChange={(e) => fillfilters({
                                ...filter_parameters,
                                budget: e
                            })}
                        />
                    </Col>
                </Row> : ""}
                <Row>
                    <Col>
                        <div className = "d-flex justify-content-center">
                            <button className="btn button-cta button-blue" onClick={handleSubmit} style={{ marginTop: advanced_filters ? "3rem" : "0rem" }}>
                                Search
                    </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CardBodyMobile
