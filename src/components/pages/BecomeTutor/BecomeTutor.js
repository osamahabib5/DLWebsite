import React from 'react'
import BecomeTutorHeader from './BecomeTutorHeader'
import TeacherSignUp from './TeacherSignUp'
import "./BecomeTutor.css";
function BecomeTutor(props) {
    return (
        <div className="become-a-tutor">
            <div className="becomeatutorheader">
                <BecomeTutorHeader isMobile={props.isMobile} />
            </div>
            <div className="teachersignup">
                <TeacherSignUp isMobile={props.isMobile} />
            </div>
            {/* <div className="dot&linepartner">
                <TeacherSignUp isMobile={props.isMobile} />
            </div> */}
        </div>
    )
}

export default BecomeTutor
