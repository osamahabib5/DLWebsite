import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
// import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import PickTime from './PickTime'
import axios from 'axios';
import baseUrl from '../../../baseUrl/baseUrl';
function PaymentSection() {
    const [DaysList, setDaysList] = useState({ morning: null, afternoon: null, night: null });
    let timeofDays = ["morning", "afternoon", "night"]
    const getTimeSlotsUrl = baseUrl + "/api/ramzan/getTimeSlots";
    const fetchTimeSlots = async () => {
        await axios.get(getTimeSlotsUrl).then(response => {
            let i = 0;
            const morningtime = [];
            const afternoontime = [];
            const nighttime = [];
            for (i = 0; i < timeofDays.length; i++) {
                if (timeofDays[i] === "morning") {
                    var temp = [];
                    temp.push(response.data.data.morning);
                    morningtime.push(temp)

                }
                else if (timeofDays[i] === "afternoon") {
                    var temp = [];
                    temp.push(response.data.data.afternoon);
                    afternoontime.push(temp)
                }
                else if (timeofDays[i] === "night") {
                    var temp = [];
                    temp.push(response.data.data.night);
                    nighttime.push(temp)
                }
            }
            setDaysList({
                ...DaysList,
                morning: morningtime,
                afternoon: afternoontime,
                night: nighttime
            });
        }).catch(error => {
            console.log("Error for Teachers: " + error)
        })
    }
    useEffect(() => {
        fetchTimeSlots();
    }, [])
    return (
        <Container>
            <Row>
                <Col>
                    <p className="ramazanprogramheading">
                        Register Now
                        </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="picktimeslot">
                        <PickTime DaysList={DaysList ? DaysList : ""} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PaymentSection