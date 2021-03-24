import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import SelectedTeacher from './SelectedTeacher'
import axios from "axios";
import { TutorsContext } from '../../../Provider'
import baseUrl from '../../../baseUrl/baseUrl'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2'
function ScheduleDemo(props) {
    const cookies = new Cookies()
    const { teacher_id, lead_id, teacher_info, startLoading, setDemoDate, setDemoTime, setDemoDay } = useContext(TutorsContext);
    const [selecteddate, setselecteddate] = useState(null);
    const [isClicked, setisClicked] = useState(false);
    const getTimeUrl = baseUrl + "/api/demo/getTimes/" + teacher_id;
    const [activeIndex, setActiveIndex] = useState(null);
    const bookDemoUrl = baseUrl + "/api/demo/book";
    const [dayindex, setdayindex] = useState(0);
    const [selectedday, setSelectedday] = useState(null)
    const [demodata, setdemodata] = useState({ teacher_id: teacher_id, lead_id: lead_id ? lead_id : cookies.get("leadid"), date: selecteddate, time: "", note: "" })
    const [DaysList, setDaysList] = useState({ disableddays: [], times: [], days: [], booked_times: {} });
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const opensweetalertdanger = (alerttext) => {
        Swal.fire({
            title: 'Book a Demo',
            text: alerttext,
            type: 'warning',
        })
    }
    // const btn_class = isClicked ? "btn button-cta button-blue" : "btn button-cta button-white";
    const { date, time } = demodata;
    const setActive = index => {
        setActiveIndex(index);
    };
    const { booked_times, times, days, disableddays } = DaysList;
    const handleDayClick = (day, { selected }) => {
        setSelectedday(selected ? undefined : day)
        var d = new Date(day);
        var dayofweek = d.getDay();
        var month = '' + (d.getMonth() + 1);
        var Day = '' + d.getDate();
        var year = d.getFullYear().toString();
        if (month.length < 2)
            month = '0' + month;
        if (Day.length < 2)
        Day = '0' + Day;
        const date_selected = [year, month, Day].join('-')
        // setselecteddate(date_selected);
        setdemodata({
            ...demodata,
            date: date_selected
        })
            setdayindex(DaysList.days.indexOf(dayofweek))
            for (const [key, value] of Object.entries(booked_times)) {
                if (date) {
                    if (date === value) {
                        let dayofweekindex = days.indexOf(new Date(date).getDay());
                        let bookedtimevalue = times[dayofweekindex].indexOf(key);
                        if (dayofweekindex >= 0 && bookedtimevalue > -1) {
                            times[dayofweekindex].splice(bookedtimevalue, 1);
                        }
                    }
                }
            }
    }
    const setTimeSlot = (e) => {
        e.preventDefault();
        // setActive(data);
        if (e.currentTarget.value) {
            setdemodata({
                ...demodata,
                time: e.currentTarget.value
            })
        }
        setisClicked((prevState) => !prevState);
        e.currentTarget.setAttribute("class", "btn button-cta button-blue")
        //e.targt.addClass("button-blue")
    }
    const BookDemo = async (e) => {
        e.preventDefault();
        if (!demodata.date || !demodata.time || !demodata.lead_id || !demodata.teacher_id) {
            console.log("Demodata: ")
            opensweetalertdanger("Please fill all the required values!")
        }
        else {
            await axios.post(bookDemoUrl, demodata).then(response => {
                console.log("bOOKdEMOrESPONSE: " + JSON.stringify(response));
                setselecteddate("");
                setdemodata({ teacher_id: teacher_id, lead_id: lead_id, date: selecteddate, time: "", note: "" });
                startLoading();
                setDemoDate(new Date(date).toDateString());
                setDemoTime(time);
                props.hideNavigation();
                props.showAppointmentConfirmation();
            }).catch(error => {
                console.log("Error: " + error)
                if (error.response.status == 400) {
                    opensweetalertdanger("You have already booked a demo with this teacher!")
                }
            });
        }
    }
    const fetchDays = async () => {
        await axios.get(getTimeUrl).then(response => {
            let i = 0;
            const timeslotsarr = [];
            const temparr = [0, 1, 2, 3, 4, 5, 6, 7];
            const available_days = [];
            for (i = 0; i < weekdays.length; i++) {
                if (response.data.data.times[weekdays[i]].length > 0) {
                    var temp = [];
                    response.data.data.times[weekdays[i]].map(data => {
                        temp.push(data);
                    })
                    available_days.push(i);
                    timeslotsarr.push(temp)
                    temparr.splice(temparr.indexOf(i), 1);
                }
            }
            setDaysList({
                ...DaysList,
                times: timeslotsarr,
                disableddays: temparr,
                days: available_days,
                booked_times: response.data.data.booked_times
            });
        }).catch(error => {
            console.log("Error: " + error)
        })
    }
    useEffect(() => {
        fetchDays();
        // console.log("DaysList: " + JSON.stringify(DaysList))
    }, [])
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
                            { daysOfWeek: disableddays ? disableddays : [] }, { before: new Date() }]}
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
                    <p style={{ textAlign: "center" }}>Select a Timeslot</p>
                    {selectedday ? DaysList.times[dayindex].map((data, index) => {
                        return (
                            <button className={activeIndex === index ? 'btn button-cta button-blue' : 'btn button-cta button-white'}  key={index} value={data} name="time" onClick={(e) => {
                                setTimeSlot(e);
                                setActive(index)
                            }}>{data}</button>
                        )
                    })  : <div className="d-flex justify-content-center" style={{ color: "black" }}>
                        Timeslots will be shown here!
                    </div>}
                    {/* {selectedday ? selecteddate : <div>Please select a day</div>} */}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg={props.isMobile ? "12" : "6"}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Any comments for the teacher</Form.Label>
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