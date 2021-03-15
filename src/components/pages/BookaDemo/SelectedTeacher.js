import React, { useContext, useState, useEffect } from 'react'
import { Container, Image } from 'react-bootstrap'
import baseUrl from '../../../baseUrl/baseUrl'
import { TutorsContext } from '../../../Provider'
import avatar from './avatar.jpg';
import axios from 'axios';

function SelectedTeacher() {
    const { teacher_id, getTeacherInfo, teacher_info } = useContext(TutorsContext);
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
        <div>
            {teacher_info ? <div style={{ marginRight: "3rem" }}>
                <Image src={teacher_info.image ? teacher_info.image : avatar} style={{ width: "146px", height: "150px" }} fluid />
                <div style={{ marginTop: "2rem" }}>
                    <p className="teacher-info-name">{teacher_info.name.toString()}</p>
                    <p className="teacher-timezone">Teacher's timezone is: {teacher_info.timezone.toString()}   {teacher_info.location.toString()}</p>
                </div>
                <div>
                <p className="teacher-timezone">Your TimeZone is: {parent_timezone} </p>
                </div>
            </div> : ""}
        </div >
    )
}

export default SelectedTeacher
