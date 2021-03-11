import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import SelectedTeacher from './SelectedTeacher'
import axios from "axios";
import { TutorsContext } from '../../../Provider'
import baseUrl from '../../../baseUrl/baseUrl'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
function ScheduleDemo() {
    //     teacher_id*
    // // lead_id*
    // date* - string
    // time* - string
    // note - text/string

    const { timeslots, getTimeSlots, getTeacherDays, days, teacher_id, lead_id } = useContext(TutorsContext);
    const [date, setdate] = useState("");
    const getTimeUrl = baseUrl + "/api/demo/getTimes/" + teacher_id
    const getDateUrl = baseUrl + "/api/demo/getDays/" + teacher_id
    const bookDemoUrl = baseUrl + "/api/demo/book";
    const [selectedday, setSelectedday] = useState(null)
    const [demodata, setdemodata] = useState({ teacher_id: teacher_id, lead_id: lead_id, date: selectedday, time: "", note: "" })
    const DaysList = [0, 1, 2, 3, 4, 5, 6];
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
    const BookDemo = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(demodata))
        if (!demodata.date || !demodata.time || !demodata.lead_id || !demodata.teacher_id) {
            alert("Please fill all the values!")
        }
        else {
            await axios.post(bookDemoUrl, demodata).then(response => {
                console.log("bOOKdEMOrESPONSE: " + JSON.stringify(response));

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
                        month={new Date()}
                        disabledDays={{
                            daysOfWeek: getDayNumber(),
                        }}
                        selectedDays={selectedday}
                        onDayClick={handleDayClick}
                        month={new Date()}
                        fromMonth={new Date()}
                        toMonth={new Date(new Date().getFullYear(),
                            new Date().getMonth() + 1,
                            new Date().getDate())}
                    // minDate={new Date()}
                    // maxDate={new Date().setMonth(new Date().getMonth() + 2)}
                    />
                </Col>
                <Col>
                    {timeslots && selectedday ? timeslots.map((data, index) => {
                        return (
                            <button className="btn button-cta button-white" value={data} name="time" onClick={(e) => {
                                setdemodata({
                                    ...demodata,
                                    time: e.target.value
                                })
                            }} key={index} >{data}</button>
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
