import React, { useEffect, useState, useContext } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import PickTime from './PickTime'
import axios from 'axios';
import baseUrl from '../../../baseUrl/baseUrl';
import { TutorsContext } from '../../../Provider';
function PaymentSection(props) {
    const [DaysList, setDaysList] = useState({ morning: null, afternoon: null, night: null });
    const { loading, startLoading, stopLoading } = useContext(TutorsContext);
    let timeofDays = ["morning", "afternoon", "night"]
    const getTimeSlotsUrl = baseUrl + "/api/ramzan/getTimeSlots";
    const fetchTimeSlots = async () => {
        await axios.get(getTimeSlotsUrl).then(response => {
            let i = 0;
            var morningtime = [];
            var afternoontime = [];
            var nighttime = [];
            for (i = 0; i < timeofDays.length; i++) {
                if (timeofDays[i] === "morning") {
                    morningtime.push(response.data.data.morning)
                }
                else if (timeofDays[i] === "afternoon") {
                    afternoontime.push(response.data.data.afternoon)
                }
                else if (timeofDays[i] === "night") {
                    nighttime.push(response.data.data.night)
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
                        <PickTime DaysList={DaysList ? DaysList : ""} isMobile = {props.isMobile}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PaymentSection
