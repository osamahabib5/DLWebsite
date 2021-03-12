import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import SelectedTeacher from './SelectedTeacher'
import axios from "axios";
import { TutorsContext } from '../../../Provider'
import baseUrl from '../../../baseUrl/baseUrl'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Swal from 'sweetalert2'
function ScheduleDemo(props) {
    const { timeslots, getTimeSlots, getTeacherDays, days, teacher_id, lead_id, teacher_info } = useContext(TutorsContext);
    const [selecteddate, setselecteddate] = useState("");
    const getTimeUrl = baseUrl + "/api/demo/getTimes/" + teacher_id
    const getDateUrl = baseUrl + "/api/demo/getDays/" + teacher_id
    const bookDemoUrl = baseUrl + "/api/demo/book";
    const [selectedday, setSelectedday] = useState(null)
    const [demodata, setdemodata] = useState({ teacher_id: teacher_id, lead_id: lead_id, date: selecteddate, time: "", note: "" })
    const DaysList = [0, 1, 2, 3, 4, 5, 6];
    const fetchTimeSlots = async () => {
        await axios.get(getTimeUrl, {
            params: {
                date: selecteddate
            }
        }).then(response => {
            getTimeSlots(response.data.data.times)
        }).catch(error => {
            console.log("Error: " + error)
        })
    }
    const opensweetalertdanger = (alerttext) => {
        Swal.fire({
            title: 'Create Lead',
            text: alerttext,
            type: 'warning',


        })
    }
    const handleDayClick = (day, { selected }) => {
        setSelectedday(selected ? undefined : day)

        var d = new Date(selected ? undefined : day);
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = d.getFullYear().toString();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        setselecteddate([year, month, day].join('-'));
        setdemodata({
            ...demodata,
            date: selecteddate
        })
        fetchTimeSlots();
    }
    const setTimeSlot = (e) => {
        e.preventDefault();
        setdemodata({
            ...demodata,
            time: e.target.value
        })
        e.target.setAttribute("class","btn button-cta button-blue")
    }
    const BookDemo = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(demodata))
        if (!demodata.date || !demodata.time || !demodata.lead_id || !demodata.teacher_id) {
            opensweetalertdanger("Please fill all the required values!")
        }
        else {
            await axios.post(bookDemoUrl, demodata).then(response => {
                console.log("bOOKdEMOrESPONSE: " + JSON.stringify(response));
                props.showAppointmentConfirmation();
            }).catch(error => {
                console.log(error);
            });
        }
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
    }, [selecteddate])
    return (
        <Container>
            <Row>
                <Col>
                    <p className="AppointmentConfirmationHeading">Schedule your demo with {teacher_info ? teacher_info.name : "Test TP2"}</p>
                </Col>
            </Row>
            <Row >
                <Col >
                    <SelectedTeacher />
                </Col>
                <Col>
                    <DayPicker
                        month={new Date()}
                        disabledDays={[
                            { daysOfWeek: getDayNumber() }, { before: new Date() }]}
                        selectedDays={selectedday}
                        onDayClick={handleDayClick}
                        month={new Date()}
                        fromMonth={new Date()}
                        toMonth={new Date(new Date().getFullYear(),
                            new Date().getMonth() + 1,
                            new Date().getDate())}
                    />
                </Col>
                <Col>
                    {timeslots && selectedday != undefined && Array.isArray(timeslots)?  timeslots.map((data, index) => {
                        return (
                            <button className="btn button-cta button-white" data-index={index} key={index} value={data} name="time" onClick={setTimeSlot}  >{data}</button>
                        )
                    }) : ""}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Any Comments for the teachers!</Form.Label>
                        <Form.Control as="textarea" value={demodata.note} onChange={(e) => setdemodata({
                            ...demodata,
                            note: e.target.value
                        })} name="note" rows={3} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="4">
                    <div style={{ marginBottom: "4rem", marginTop: "3rem" }}>
                        <button className="btn button-cta button-blue" onClick={BookDemo}>Book Demo</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ScheduleDemo
