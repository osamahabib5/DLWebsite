import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { TutorsContext } from '../../../Provider';
import { useHistory, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
function NavigateDemo(props) {
    const { calculateFees, result_type, lead_id, teacher_id, setConfirmPricing } = useContext(TutorsContext)
    const cookies = new Cookies();
    const [locationKeys, setLocationKeys] = useState([])
    const history = useHistory();
    const goBack = (e) => {
        e.preventDefault();
        setConfirmPricing(false);
        if (props.successfullead) {
            if (result_type === "pricing") {
                if (cookies.get('leadid') || lead_id > 0) {
                    history.push({
                        pathname: '/tutors/' + teacher_id,
                    });
                    calculateFees(0);
                }
            }
            if (result_type === "teachers") {
                if (cookies.get('leadid')) {
                    props.LeadAlreadyFilled()
                    calculateFees(0);
                }
            }
        }
        if (props.showtutors) {
            calculateFees(0);
            props.hidetutoroptions();
        }
        if (props.showappointmentpage) {
            if (result_type === "pricing") {
                if (cookies.get('leadid')) {
                    props.showfeecalculator();
                }
            } else {
                if (cookies.get('leadid')) {
                    history.push({
                        pathname: '/tutors/' + teacher_id,
                    });
                    // props.showfeecalculator();
                }
            }
        }
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
        <div className="navigatedemo" style = {{marginLeft: props.isMobile ? "1rem" : ""}} onClick={goBack}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ marginLeft: "0rem", marginRight: "1rem" }} />
            Back
        </div>
    )
}

export default NavigateDemo
