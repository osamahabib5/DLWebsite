import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { TutorsContext } from '../../../Provider';
function NavigateDemo(props) {
    const { calculateFees, result_type, lead_id } = useContext(TutorsContext)
    const goBack = (e) => {
        e.preventDefault();
        if (props.successfullead) {
            if (lead_id == 0) {
                props.hidefeecalculator()
                calculateFees(0);
            }
            if (lead_id != 0) {
                props.LeadAlreadyFilled()
                calculateFees(0);
            }
        }
        // else if (props.successfullead && lead_id != 0) {
        //     props.LeadAlreadyFilled()
        //     calculateFees(0);
        // }
        if (props.showtutors) {
            calculateFees(0);
            props.hidetutoroptions();
        }
        if (props.showappointmentpage) {
            if (result_type == "pricing" && lead_id != 0) {
                props.showfeecalculator();
                props.hideAppointmentPage();
            }
            // if (result_type == "pricing" && lead_id != 0){

            // }
            else {
                props.reloadPage();
                props.hideAppointmentPage();
            }
        }
        // if (props.showappointmentpage && result_type == "pricing" && lead_id != 0) {
        //     props.showfeecalculator();
        //     props.hideAppointmentPage();
        // }
        if (props.scheduledemo) {
            props.hideScheduleDemo();
        }
        if (props.showleads) {
            calculateFees(0);
            props.showPricingPackages();
        }
        if (props.confirmappointment) {
            props.hideAppointmentConfirmation();
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
