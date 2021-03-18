import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './FindaTutor.css'
import {  Link} from 'react-router-dom';
function FindaTutorStart() {
    const [isMobile, setclassname] = useState(false);
    const mobileview = () =>{
        if (window.innerWidth< 769){
            setclassname(true);
        }
        if(window.innerWidth >= 769){
            setclassname(false);
        }
    }
    useEffect(() => {
        mobileview();
        window.addEventListener("resize", mobileview);
    });
    const classname = isMobile ? 'd-flex flex-column-reverse bd-highlight' : 'd-flex justify-content-start'
    return (

        <div className={classname}>
            <div className = "Tutor-button">
            <Link to = "tutors"><button type="button" className="btn button-cta button-red">Find a Tutor</button></Link>
            </div>
            <div className = "tutor-content">
                <p className = "web-content">Book a free trial class now! </p>
                <p className = "mobile-content">Motivating action statement!</p>
            </div>
        </div>
    )
}

export default FindaTutorStart
