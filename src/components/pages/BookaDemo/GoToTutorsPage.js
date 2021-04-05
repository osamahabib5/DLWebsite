import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { TutorsContext } from "../../../Provider";
function GoToTutorsPage(props) {
    const { setConfirmPricing, result_type } = useContext(TutorsContext)
    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ marginTop: "1rem" }}>{result_type === "pricing" ? "Click below to head to teacher's appointment page" : "Click below to find a tutor based on your package."}</div>
            <div style={{ marginTop: "0.5rem" }}>
                {result_type === "teachers" ? <Link to="/tutors">
                    <button className="btn button-cta button-red" style={{ width: "200px", marginBottom : "3rem" }} onClick={() => setConfirmPricing(false)}>Find Tutors</button>
                </Link> : <button className="btn button-cta button-red" style={{ width: "200px" , marginBottom : "3rem"}} onClick={() =>{
                     setConfirmPricing(false);
                     props.showAppointmentPageTutor();
                }}>Next</button>
                }
            </div>
        </div>
    )
}

export default GoToTutorsPage
