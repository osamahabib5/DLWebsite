import React, { useState, useContext, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { isSameDay } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { Calendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import SelectedTeacher from './SelectedTeacher'
import axios from "axios";
import { TutorsContext } from '../../../Provider'
import baseUrl from '../../../baseUrl/baseUrl'
function ScheduleDemo() {
    const getTimeUrl = baseUrl + "/api/demo/getTimes/58?date=21-03-15"
    const [selectedDates, setSelectedDates] = useState([])
    const { timeslots, getTimeSlots } = useContext(TutorsContext);
    const modifiers = {
        selected: date => selectedDates.some(selectedDate => isSameDay(selectedDate, date))
    }
    const fetchTimeSlots = async () => {
        await axios.get(getTimeUrl).then(response => {
            getTimeSlots(response.data.data.times)
        }).catch(error => {
            console.log("Error: " + error)
        })
    }
    const handleDayClick = date => {
        setSelectedDates([...selectedDates, date])
    }
    useEffect(() => {
        fetchTimeSlots();
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
                    <Calendar onDayClick={handleDayClick} modifiers={modifiers} locale={enGB} />
                </Col>
                <Col>
                    <div className = "timeslots">
                        {timeslots.length > 0 ? timeslots.map(data => {
                            return (
                                <Button style={{ background: "white", color: "black", height: "48px", width: "164px", border: "black" }}>{data}</Button>
                            )
                        }) : alert("No data")}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ScheduleDemo
