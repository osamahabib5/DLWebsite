import React from 'react'
import "./TeacherDescription.css";
function TeacherDescription(props) {
    return (
        <div>
            <p className = "teacherdescription">{props.bio}</p>
        </div>
    )
}

export default TeacherDescription
