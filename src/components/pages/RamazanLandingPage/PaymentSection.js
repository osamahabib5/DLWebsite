import React, { useEffect, useState } from 'react'
import { Card, Form, Button, CardDeck, Col, Row, Container } from 'react-bootstrap'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import PickTime from './PickTime'
import axios from 'axios';
import baseUrl from '../../../baseUrl/baseUrl';
function PaymentSection() {
    const [DaysList, setDaysList] = useState([]);
    let timeofDays = ["morning", "afternoon", "night"]
    const hello = "afternoon";
    const getTimeSlotsUrl = baseUrl + "/api/ramzan/getTimeSlots";
    // let i = 0;
    // const timeslotsarr = [];
    // for (i = 0; i < timeofDays.length; i++) {
    //     if (response.data.data.timeofDays[i].length > 0) {
    //         var temp = [];
    //         response.data.data.timeofDays[i].map(data => {
    //             temp.push(data);
    //         })
    //         timeslotsarr.push(temp)
    //     }
    // }
    // setDaysList({
    //     ...DaysList,
    //     times: timeslotsarr
    // });
    const fetchTimeSlots = async () => {
        await axios.get(getTimeSlotsUrl).then(response => {
            // console.log("TimeSlots of Teachers: " + JSON.stringify(response.data.data))
            // console.log("TimeSlots of Teachers: " + JSON.stringify(timeofDays[0]))
            let i = 0;
            const timeslotsarr = [];
            for (i = 0; i < timeofDays.length; i++) {
                if (timeofDays[i] === "morning") {
                    var temp = [];
                    response.data.data.morning.map(data => {
                        temp.push(data);
                    })
                    timeslotsarr.push(temp)
                }
                else if (timeofDays[i] === "afternoon") {
                    var temp = [];
                    response.data.data.afternoon.map(data => {
                        temp.push(data);
                    })
                    timeslotsarr.push(temp)
                }
                else if (timeofDays[i] === "night") {
                    var temp = [];
                    response.data.data.night.map(data => {
                        temp.push(data);
                    })
                    timeslotsarr.push(temp)
                }
            }
            setDaysList(timeslotsarr);
        }).catch(error => {
            console.log("Error for Teachers: " + error)
        })
    }
    useEffect(() => {
        fetchTimeSlots();
        console.log("TimeSlotsArr: "+ DaysList)
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
                        <PickTime />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PaymentSection
