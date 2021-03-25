import React from 'react'
import BecomeTutorHeader from './BecomeTutorHeader'
import TeacherSignUp from './TeacherSignUp'
import "./BecomeTutor.css";
import OurApproach from '../../OurApproach/OurApproach';
function BecomeTutor(props) {
    return (
        <div className="become-a-tutor">
            <div className="becomeatutorheader">
                <BecomeTutorHeader isMobile={props.isMobile} />
            </div>
            <div className="teachersignup">
                <TeacherSignUp isMobile={props.isMobile} />
            </div>
            <div className="dot&linepartner">
                <OurApproach />
            </div>
        </div>
    )
}

export default BecomeTutor
