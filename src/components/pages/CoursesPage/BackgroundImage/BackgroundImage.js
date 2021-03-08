import React, { useState, useEffect,useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './Images/Background.png'
import { Card } from 'react-bootstrap';
import VideoComponents from './VideoComponents/VideoComponents';
import './BackgroundImage.css';
const BackgroundImage = (props) => {
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
        mobileview();
        window.addEventListener("resize", mobileview);
    });
    const cardtextclass = isMobile ? 'container-fluid' : 'card-img-overlay';
    return (
        <div>
            <div className="bg-dark text-white">
                <img src={Background} alt="Card image" className="card-img" />
                <div className={cardtextclass}>

                    <h5 className="card-title">OUR PROGRAMS & COURSES</h5>
                    <p className="card-text"> Developed by experts and taught by trained tutors, explore our wide range of world class online classes.
            <div className="programs">
                            <VideoComponents changeVideo={props.changeVideo} />
                        </div>

                    </p>
                </div>
            </div>
            
        </div>

    )
}

export default BackgroundImage
