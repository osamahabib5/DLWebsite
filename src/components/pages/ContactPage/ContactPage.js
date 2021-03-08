import React, { useState, useEffect} from 'react'
import Image_Contact from '../../images/Contact/Contact.png';
import './ContactPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormWindow from './Forms/FormWindow/FormWindow';
import ImageWindow from './Forms/ImageWindow/ImageWindow';
import {Image} from 'react-bootstrap';

function ContactPage() {
    const [isMobile, setclassname] = useState(false);
    const [Contactdescription, setContactdescription] = useState("Our sales agents are currently offline.  Please leave us a message below and someone will reach out to you.");
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
    const classname = isMobile ? 'd-flex flex-column' : 'd-flex flex-row';
    const contentclassname = isMobile ? 'tutor-mobile' : 'tutor-window';
    return (

        <div className={classname}>
            <div className = "Image-Window">
                <Image src={Image_Contact} fluid/>               
            </div>
            <div className = "Image-Mobile">
                <ImageWindow />
            </div>
            <div className={contentclassname}>
                <div className="description-class">
                    <p className="contact-heading"> CONTACT </p>
                    <p className="Description">{Contactdescription}</p>
                </div>
                <p className="third">
                    <FormWindow />
                </p>
            </div>
        </div>
    )
}

export default ContactPage
