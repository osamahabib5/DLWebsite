import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { TutorsContext } from '../../../Provider';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
function NavigateDemo(props) {
    const { calculateFees, result_type, lead_id, teacher_id } = useContext(TutorsContext)
    const cookies = new Cookies();
    const gotoTutorsProfile = () => {
        return (
            <Link to={{
                pathname: `${"tutors"}/${teacher_id}`
            }} />
        )
    }
    const goBack = (e) => {
        e.preventDefault();
        if (props.successfullead) {
            if (result_type === "teachers") {
                console.log("Teachers")
                if (cookies.get('leadid') !== null) {
                    props.LeadAlreadyFilled()
                    calculateFees(0);
                } 
            }
            else if (result_type === "pricing") {
                console.log("Pricing")
                if (cookies.get('leadid') !== null) {
                    gotoTutorsProfile();
                    calculateFees(0);
                }
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
            if (result_type == "pricing" && lead_id != 0 || cookies.get('leadid') !== null) {
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
