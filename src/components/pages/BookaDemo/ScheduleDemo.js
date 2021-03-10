import React, { useContext, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import SelectedTeacher from './SelectedTeacher'
import axios from "axios";
import { TutorsContext } from '../../../Provider'
import baseUrl from '../../../baseUrl/baseUrl'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
function ScheduleDemo() {
    const getTimeUrl = baseUrl + "/api/demo/getTimes/58?date=21-03-15"
    const getDateUrl = baseUrl + "/api/demo/getDays/58"
    const DaysList = [0,1,2,3,4,5,6];
    const { timeslots, getTimeSlots, getTeacherDays, days } = useContext(TutorsContext);
    const fetchTimeSlots = async () => {
        await axios.get(getTimeUrl).then(response => {
            getTimeSlots(response.data.data.times)
        }).catch(error => {
            console.log("Error: " + error)
        })
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
                DaysList.splice(index,1)
            }
            else if (days[i] == "Monday") {
                index = DaysList.indexOf(1);
                DaysList.splice(index,1)
            }
            else if (days[i] == "Tuesday") {
                index = DaysList.indexOf(2);
                DaysList.splice(index,1)
            }
            else if (days[i] == "Wednesday") {
                index = DaysList.indexOf(3);
                DaysList.splice(index,1)
            }
            else if (days[i] == "Thursday") {
                index = DaysList.indexOf(4);
                DaysList.splice(index,1)
            }
            else if (days[i] == "Friday") {
                index = DaysList.indexOf(5);
                DaysList.splice(index,1)
            } else if (days[i] == "Saturday") {
                index = DaysList.indexOf(6);
                DaysList.splice(index,1)
            }
        }
        return DaysList;
    };
    useEffect(() => {
        fetchTimeSlots();
        fetchDays();
    }, [])
    return (
        <Container>
            <Row>
                <Col>
                    <p className="AppointmentConfirmationHeading">Schedule your demo with Test TP2</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SelectedTeacher />
                </Col>
                <Col>
                    <DayPicker
                        initialMonth={new Date(2020, 3)}
                        disabledDays={[{ daysOfWeek: getDayNumber() }]}
                        selectedDays={[
                            new Date(2020, 3, 13),
                            new Date(2020, 3, 6),
                        ]}
                    />
                </Col>
                <Col>
                    <div className="timeslots">
                        {timeslots.length > 0 ? timeslots.map(data => {
                            return (
                                <Button style={{ background: "white", color: "black", height: "48px", width: "164px", border: "black" }}>{data}</Button>
                            )
                        }) : ""}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ScheduleDemo
