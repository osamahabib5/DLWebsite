import React from 'react'
import { Link } from 'react-router-dom';
function GoToTutorsPage() {
    return (
        <div style = {{textAlign: "center"}}>
            <div style={{ marginTop: "1rem" }}>Click below to find a tutor based on your package.</div>
            <div style={{ marginTop: "0.5rem" }}>
                <Link to = "/tutors">
                    <button className="btn button-cta button-blue" style={{ width: "200px" }}>Find Tutors</button>
                </Link>
            </div>
        </div>
    )
}

export default GoToTutorsPage
