import React, { useEffect } from 'react'
import BecomeTutorHeader from './BecomeTutorHeader'
import TeacherSignUp from './TeacherSignUp'
import "./BecomeTutor.css";
import OurApproach from '../../OurApproach/OurApproach';
import OurTutorsObjective from './OurTutorsObjective';
function BecomeTutor(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="become-a-tutor">
            <div className="becomeatutorheader">
                <BecomeTutorHeader notification = {props.notification} isMobile={props.isMobile} />
            </div>
            <div className="teachersignup">
                <TeacherSignUp isMobile={props.isMobile} />
            </div>
            <div className="OurApproach">
                <OurApproach displayinfo={OurTutorsObjective} heading="MAKE A DIFFERENCE & START A BUSINESS"
                    approachcontent="How do you become a Dot & Line Teacher Partner?"
                    details="Our sign up process is quick and easy! Starting with an online application and concluding with a contract signing, once selected as a Dot & Line teacher you get all the support you can ask for. Our teachers are trained, provided with our world class learning materials and guided by a mentor as they build the confidence to take on their very first class."
                    cardsno={3}
                    isMobile={props.isMobile}
                    topSpacing="-7rem"
                    cardBodySpacing="-1rem"
                    mobilecards={1}
                />
            </div>
        </div>
    )
}

export default BecomeTutor
