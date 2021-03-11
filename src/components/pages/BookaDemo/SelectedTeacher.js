import React, { useContext, useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import baseUrl from '../../../baseUrl/baseUrl'
import { TutorsContext } from '../../../Provider'
import avatar from './avatar.jpg';
import axios from 'axios';
function SelectedTeacher() {
    const { teacher_id, getTeacherInfo, teacher_info } = useContext(TutorsContext);
    const url = baseUrl + "/api/teacher/getInfo/" + teacher_id
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
            {teacher_info ? <div>
                <Image src={teacher_info.image ? teacher_info.image : avatar} style={{ width: "146px", height: "150px" }} fluid />
                <p>{teacher_info.name.toString()}</p>
            </div> : ""}
        </div >
    )
}

export default SelectedTeacher
