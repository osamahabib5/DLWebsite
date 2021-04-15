import React, { useContext, useState, useEffect } from 'react'
import { Container, Image } from 'react-bootstrap'
import baseUrl from '../../../baseUrl/baseUrl'
import { TutorsContext } from '../../../Provider'
import avatar from './avatar.jpg';
import axios from 'axios';

function SelectedTeacher(props) {
    const { teacher_id, getTeacherInfo, teacher_info, parent_city, parent_country } = useContext(TutorsContext);
    const url = baseUrl + "/api/teacher/getInfo/" + teacher_id
    const parent_timezone = /\((.*)\)/.exec(new Date().toString())[1];
    const getTeacherDetails = async () => {
        await axios.get(url).then(response => {
            getTeacherInfo(response.data.data)
        }).catch(error => {
            console.log("Error: " + error)
        })
    }

    useEffect(() => {
        getTeacherDetails();
    }, [])
    return (
        <div className = {props.isMobile ? "d-flex justify-content-center" : ""}>
            {teacher_info ? <div style={{ marginRight: props.isMobile ? "0rem" : "3rem" }}>
                <Image src={teacher_info.image ? teacher_info.image : avatar} style={{ width: "146px", height: "150px" }} fluid />
                <div style={{ marginTop: "2rem" }}>
                    <p className="teacher-info-name">{teacher_info.name.toString()}</p>
                    <p className="teacher-timezone">The teacher is in: {teacher_info.location.toString()} ({teacher_info.timezone.toString()})  </p>
                </div>
                <div>
                <p className="teacher-timezone">You are in: {parent_city !== null ? parent_city + ",": "" } {parent_country} </p>
                </div>
            </div> : ""}
        </div >
    )
}

export default SelectedTeacher
