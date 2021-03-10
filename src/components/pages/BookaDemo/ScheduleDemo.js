import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import SelectedTeacher from './SelectedTeacher'
import axios from "axios";
import { TutorsContext } from '../../../Provider'
import baseUrl from '../../../baseUrl/baseUrl'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
function ScheduleDemo() {
    const [date, setdate] = useState("");
    const getTimeUrl = baseUrl + "/api/demo/getTimes/58"
    const getDateUrl = baseUrl + "/api/demo/getDays/58"
    const [selectedday, setSelectedday] = useState(null)
    const DaysList = [0, 1, 2, 3, 4, 5, 6];
    const { timeslots, getTimeSlots, getTeacherDays, days } = useContext(TutorsContext);
    const fetchTimeSlots = async () => {
        await axios.get(getTimeUrl, {
            params: {
                date: date
            }
        }).then(response => {
            getTimeSlots(response.data.data.times)
        }).catch(error => {
            console.log("Error: " + error)
        })
    }
    const handleDayClick = (day, { selected }) => {
        setSelectedday(selected ? undefined : day)
        var d = new Date(selected ? undefined : day);
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = d.getFullYear().toString().substring(2, 4);
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        setdate([year, month, day].join('-'));
        fetchTimeSlots();
    }
    const fetchDays = async () => {
        await axios.get(getDateUrl).then(response => {
            getTeacherDays(response.data.data.days)
        }).catch(error => {
            console.log("Error: " + error)
        })
    }
    const getDayNumber = () => {
        let i;
        var index;
        for (i = 0; i < days.length; i++) {
            if (days[i] == "Sunday") {
                index = DaysList.indexOf(0);
                DaysList.splice(index, 1)
            }
            else if (days[i] == "Monday") {
                index = DaysList.indexOf(1);
                DaysList.splice(index, 1)
            }
            else if (days[i] == "Tuesday") {
                index = DaysList.indexOf(2);
                DaysList.splice(index, 1)
            }
            else if (days[i] == "Wednesday") {
                index = DaysList.indexOf(3);
                DaysList.splice(index, 1)
            }
            else if (days[i] == "Thursday") {
                index = DaysList.indexOf(4);
                DaysList.splice(index, 1)
            }
            else if (days[i] == "Friday") {
                index = DaysList.indexOf(5);
                DaysList.splice(index, 1)
            } else if (days[i] == "Saturday") {
                index = DaysList.indexOf(6);
                DaysList.splice(index, 1)
            }
        }
        return DaysList;
    };
    useEffect(() => {
        fetchDays();
    }, [date])
    return (
        <Container>
            <Row>
                <Col>
                    <p className="AppointmentConfirmationHeading">Schedule your demo with Test TP2</p>
                </Col>
            </Row>
            <Row >
                <Col >
                    <SelectedTeacher />
                </Col>
                <Col>
                    <DayPicker
                        initialMonth={new Date(2021, 3)}
                        disabledDays={[{ daysOfWeek: getDayNumber() }]}
                        selectedDays={selectedday}
                        onDayClick={handleDayClick}
                    />
                </Col>
                <Col>
                    {timeslots && selectedday ? timeslots.map((data, index) => {
                        return (
                            <div style={{ marginTop: "1rem" }}>
                                <button className="btn button-cta button-white" key={index} >{data}</button>
                            </div>
                        )
                    }) : ""}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Any Comments for the teachers!</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="4">
                    <div style={{ marginBottom: "4rem", marginTop: "3rem" }}>
                        <button className="btn button-cta button-blue">Book Demo</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ScheduleDemo
