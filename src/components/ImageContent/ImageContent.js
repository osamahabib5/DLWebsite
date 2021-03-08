import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageContent.css'
function ImageContent() {
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
    const classname = isMobile ? 'container-fluid' : 'card-img-overlay';
    return (
        <div className={classname}>
            <h5 className = "card-title">WHAT WE DO</h5>
            {/* <p className = "card-text">Unlock your child’s academic excellence with technology.</p> */}
            <p className = "card-text">Providing exceptional education and helping you find the best tutor for your child.</p>
        </div>
    )
}

export default ImageContent
