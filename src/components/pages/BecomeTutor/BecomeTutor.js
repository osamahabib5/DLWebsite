import React from 'react'
import BecomeTutorHeader from './BecomeTutorHeader'
import TeacherSignUp from './TeacherSignUp'
function BecomeTutor(props) {
    return (
        <div className="become-a-tutor">
            <div className="becomeatutorheader">
                <BecomeTutorHeader isMobile = {props.isMobile}/>
            </div>
            <div className="teachersignup">
                <TeacherSignUp />
            </div>
        </div>
    )
}

export default BecomeTutor
