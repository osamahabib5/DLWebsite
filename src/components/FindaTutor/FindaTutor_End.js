import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './FindaTutorend.css'
import {  Link} from 'react-router-dom';
function FindaTutorEnd(props) {
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
        window.addEventListener("resize", mobileview);
        mobileview();
    });
    const classname = isMobile ? 'd-flex flex-column bd-highlight' : 'd-flex justify-content-end'
    return (
        <div className={classname}>
            <div className = "tutor-content">
                <p className = "web-content">{props.displaytext}</p>
                <p className = "mobile-content">{props.displaytext}</p>
            </div>
            <div className = "Tutor-button">
                <Link to = "/tutors"><button type="button" className="btn button-cta button-red">Find a Tutor</button></Link>
            </div>
            
        </div>
    )
}

export default FindaTutorEnd
