import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { TutorsContext } from "../../../Provider";
function GoToTutorsPage() {
    const {setConfirmPricing} = useContext(TutorsContext)
    return (
        <div style = {{textAlign: "center"}}>
            <div style={{ marginTop: "1rem" }}>Click below to find a tutor based on your package.</div>
            <div style={{ marginTop: "0.5rem" }}>
                <Link to = "/tutors">
                    <button className="btn button-cta button-blue" style={{ width: "200px" }} onClick = {()=>setConfirmPricing(false)}>Find Tutors</button>
                </Link>
            </div>
        </div>
    )
}

export default GoToTutorsPage
