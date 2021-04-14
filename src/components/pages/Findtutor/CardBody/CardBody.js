import React, { useState, useEffect, useContext } from 'react'
import { Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import baseUrl from '../../../../baseUrl/baseUrl';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'
import { TutorsContext } from "../../../../Provider";
import Swal from 'sweetalert2'
function CardBody(props) {
    const opensweetalertdanger = (alerttext) => {
        Swal.fire({
            title: 'Find Tutor',
            text: alerttext,
            type: 'warning',
        })
    }
    const { setresults, startLoading, stopLoading, fetched_grades, fetchGrades, subjects_list, fetchSubjects, tutortype } = useContext(TutorsContext)
    const [filter, showfilters] = useState(false);
    const animatedComponents = makeAnimated();
    const subjects_url = baseUrl + '/api/getSubjects'
    const filter_url = baseUrl + '/api/teachers/search'
    const grade_url = baseUrl + '/api/getGrades';
    const [morefilters, setmorefilters] = useState(true);
    const [filters, fillFilters] = useState({ teacher_name: "", budget: 0, subjects: [], grade: "", teaching_mode: "", tutor_type: tutortype ? tutortype : "" });
    // const { subjects } = filters;
    const heightMarks = {
        1000: "1000",
        5000: "5000",
        10000: "10000",
        15000: "15000",
        20000: "20000",
        25000: "25000",
        30000: "30000",
        35000: "35000",
        40000: "40000",
        45000: "45000",
        50000: "50000"

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!filters.teacher_name && filters.subjects.length == 0 && !filters.grade && !filters.teaching_mode && !filters.tutor_type) {
            opensweetalertdanger("Please fill any one of the fields!")
        }
        else {
            startLoading();
            await axios({
                method: 'get',
                url: filter_url,
                params: filters
            })
                .then(function (response) {
                    const item = response.data.data;
                    setresults(item);
                    props.scrolltotutors();
                    stopLoading();
                })
                .catch(function (error) {
                    console.log("Error's Response: " + error);
                    stopLoading();
                });
        }
    }

    const onChangeSubject = (data) => {
        const arr = [];
        data.forEach(data => {
            arr.push(data.value);
        })
        if (arr.length == 1) {
            if (arr[0] === "English Language" || arr[0] === "Mathematics") {
                setmorefilters(false);
            }
        }
        else if (arr.length == 2) {
            if ((arr[0] === "English Language" && arr[1] === "Mathematics") || (arr[1] === "English Language" && arr[0] === "Mathematics")) {
                setmorefilters(false);
            }
        }
        else {
            setmorefilters(true);
        }
        fillFilters({
            ...filters,
            subjects: arr
        })

    }
    const clearFilters = ()=> {
        startLoading();
        let arr = [];
        fillFilters({
            ...filters,
            teacher_name: "",
            budget: 0,
            subjects: [{}],
            grade: "",
            tutor_type: "",
            teaching_mode: "null"
        })
        stopLoading();
    }
    useEffect(async () => {
        const response = await fetch(subjects_url);
        const data = await response.json();
        const item = data.data;
        const options = item.map(d => ({
            "value": d,
            "label": d
        }))
        fetchSubjects(options)

        const grades_response = await fetch(grade_url);
        const grades_data = await grades_response.json();
        const gradeslist = grades_data.data
        fetchGrades(gradeslist)
    }, [])
    return (
        <Form>
            <Form.Row >
                <Col style={{ marginTop: "0.5rem" }}>
                    <Form.Group controlId="formGridState">
                        <Form.Control as="select" defaultValue="Grade 1" value={filters.grade} onChange={(e) => fillFilters({
                            ...filters,
                            grade: e.target.value
                        })} placeholder="Filter by Grade">
                            <option>Filter By Grades....</option>
                            {fetched_grades ? fetched_grades.map((val, index) => (
                                <option key={index}>
                                    {val}
                                </option>
                            )) : ''}
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col style={{ marginTop: "1rem" }}>
                    <InputGroup className="mb-3">
                        <FormControl
                            value={filters.teacher_name}
                            placeholder="Search for a Specific Tutor"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="teacher_name"
                            bsPrefix="search-tutor"
                            onChange={(e) => fillFilters({
                                ...filters,
                                teacher_name: e.target.value
                            })}
                        />
                    </InputGroup>
                </Col>
                <Col style={{ marginTop: "1.3rem" }} onClick={handleSubmit}>
                    <button className="btn button-cta button-blue">
                        Search
                    </button>
                </Col>
            </Form.Row>
            <Form.Row>

                <Col >
                    <Form.Group controlId="formGridState">
                        <Form.Control as="select" value = {filters.teaching_mode} defaultValue="online" name="methods" onChange={(e) => fillFilters({
                            ...filters,
                            teaching_mode: e.target.value
                        })}>
                            {/* <option>Teaching Methods</option> */}
                            <option value="teacher_home">Teacher's Home</option>
                            <option value="online">Online</option>
                            <option value="student_home">Student's Home</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col style={{ marginLeft: "1.5rem" }}>
                    {subjects_list ? <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={subjects_list}
                        placeholder="Which subjects you are looking for?"
                        name="subjects"
                        value={filter.subjects}
                        onChange={onChangeSubject}
                    /> : <div>
                        ..Loading
                    </div>}
                </Col>
                {morefilters ? <Col>
                    <p className="advancedfilters" onClick={() => showfilters((prevState) => !prevState)}>
                        Advanced Filters
                    </p>
                </Col> : ""}

            </Form.Row>
            <Form.Row bsPrefix="justify-content-md-center">
                <Col />
                {filter ?
                    <Col xs lg={8}>
                        <Form.Label style={{ marginLeft: "-0.6rem" }}>
                            Price Range
                    </Form.Label>
                        <Slider
                            value={filters.budget}
                            min={1000}
                            max={50000}
                            onChange={(e) => fillFilters({
                                ...filters,
                                budget: e
                            })}
                            marks={heightMarks}
                        />
                    </Col> : ''}
                <Col xs lg={4}>
                    <p className="advancedfilters" onClick={clearFilters}>
                        Clear Filters
                    </p>
                </Col>
            </Form.Row>
            {/* {filter ? <Form.Row >
                <Col>
                    <Form.Label style={{ marginLeft: "1rem" }}>
                        Price Range
                    </Form.Label>
                    <Slider
                        value={filteRsbudget}
                        min={1000}
                        max={50000}
                        onChange={(e) => fillFilters({
                            ...filters,
                            budget: e
                        })}
                        marks={heightMarks}
                    />
                </Col>
                        
            </Form.Row> : ''} */}
        </Form>
    )
}
export default CardBody

