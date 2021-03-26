import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './BecomeaTutor.css'
import { Link } from 'react-router-dom';
function BecomeaTutor(props) {
    const [isMobile, setclassname] = useState(false);
    const mobileview = () => {
        if (window.innerWidth < 769) {
            setclassname(true);
        }
        if (window.innerWidth >= 769) {
            setclassname(false);
        }
    }
    useEffect(() => {
        window.addEventListener("resize", mobileview);
        mobileview();
    });
    const classname = isMobile ? 'd-flex flex-column' : 'd-flex flex-row';
    const contentclassname = isMobile ? 'tutor-mobile' : 'tutor-window'
    return (
        <div className={classname}>
            <img src={props.image} alt="loading" className="img-fluid" />
            <div className={contentclassname}>
                <p className="first"> BECOME A TUTOR </p>
                <p className="second">  Transform your career by joining our thriving community of global teachers!</p>
                <p className="third">
                    Get trained, use our world class learning materials and earn from the comfort of your home. Being a Dot & Line tutor has brought meaning, confidence and financial independence to hundreds of women!
                </p>
                <Link to="/becometutor">
                    <div className = {isMobile ? "d-flex justify-content-end" : ""}>
                        <button type="button" className="btn btn-info">Learn More</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BecomeaTutor
