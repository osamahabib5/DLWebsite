import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";
function NavigateDemo(props) {
    let history = useHistory();
    const goBack = (e) => {
        e.preventDefault();
        if (props.successfullead) {
            props.hidefeecalculator()
        }
        if (props.showtutors) {
            props.hidetutoroptions();
        }
        if (props.showappointmentpage) {
            history.push("/pricing")
            props.hideAppointmentPage();
        }
        if (props.scheduledemo) {
            props.hideScheduleDemo();
        }
        if (props.showleads) {
            props.showPricingPackages();
        }
    }
    return (
        <div className="navigatedemo" onClick={goBack}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ marginLeft: "0rem", marginRight: "1rem" }} />
            Back
        </div>
    )
}

export default NavigateDemo
