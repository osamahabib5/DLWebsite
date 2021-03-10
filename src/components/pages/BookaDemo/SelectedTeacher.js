import React from 'react'
import {  Image } from 'react-bootstrap'
import baseUrl from '../../../baseUrl/baseUrl'
function SelectedTeacher() {
    const url = baseUrl + "api/teacher/profile/58"
    return (
        <div>
            <Image src="https://literacy.s3.ap-south-1.amazonaws.com/uploads/tp_images/58.png" style={{ width: "146px", height: "150px" }} fluid />
            <p>Test Tp 2</p>
        </div>
    )
}

export default SelectedTeacher
