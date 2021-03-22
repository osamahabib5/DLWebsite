import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BecomeTutorHeader from './BecomeTutorHeader'

function BecomeTutor() {
    return (
        <div className="become-a-tutor">
            <div className="becomeatutorheader" style={{ width: "100%" }}>
                <BecomeTutorHeader />
            </div>
        </div>
    )
}

export default BecomeTutor
