import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { isSameDay } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { Calendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

function ScheduleDemo() {
    const [selectedDates, setSelectedDates] = useState([])
    const modifiers = {
        selected: date => selectedDates.some(selectedDate => isSameDay(selectedDate, date))
    }
    const handleDayClick = date => {
        setSelectedDates([...selectedDates, date])
    }
    return (
        <Container>
            <Row>
                <Col>
                    <p className="AppointmentConfirmationHeading">Schedule your demo with Test TP2</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Calendar onDayClick={handleDayClick} modifiers={modifiers} locale={enGB} />
                </Col>
            </Row>
        </Container>
    )
}

export default ScheduleDemo
