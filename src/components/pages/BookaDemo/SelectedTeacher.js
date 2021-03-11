import React, { useContext, useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import baseUrl from '../../../baseUrl/baseUrl'
import { TutorsContext } from '../../../Provider'
import  avatar  from './avatar.jpg';
import axios from 'axios';
function SelectedTeacher() {
    const { teacher_id } = useContext(TutorsContext);
    const url = baseUrl + "/api/teacher/getInfo/" + teacher_id
    const [teacherprofile, setteacherprofile] = useState({ name: "", image: "" })
    const getTeacherDetails = async () => {
        await axios.get(url).then(response => {
            setteacherprofile({
                name: JSON.stringify(response.data.data.name),
                image: response.data.data.image
            })
        }).catch(error => {
            console.log("Error: " + error)
        })
    }
    useEffect(() => {
        getTeacherDetails();
    }, [])
    return (
        <div>
            <Image src= {teacherprofile.image ? teacherprofile.image : avatar}  style={{ width: "146px", height: "150px" }} fluid />
            <p>{teacherprofile ? teacherprofile.name.toString().substring(1,teacherprofile.name.length-1) : "Test TP"}</p>
        </div>
    )
}

export default SelectedTeacher
