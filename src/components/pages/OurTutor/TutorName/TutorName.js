import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './TutorName.css'
import StarRatings from 'react-star-ratings';
import SuperTutor from './SuperTutor.png'
function TutorName(props) {
    const [rating, changeRating] = useState(0);
    const [display, setdisplay] = useState(false);
    const changerating = (newRating, name) => {
        changeRating(newRating);
    }
    const [isMobile, setclassname] = useState(false);
    const mobileview = () => {
        if (window.innerWidth < 769) {
            setclassname(true);
        }
        if (window.innerWidth >= 769) {
            setclassname(false);
        }
    }
    const setImageSource = () => {
        if (props.super_tutor == 1) {
            setdisplay(true)
        } else {
            setdisplay(false)
        }
    }
    useEffect(() => {
        mobileview();
        window.addEventListener("resize", mobileview);
        setImageSource();
    });

    const classname = isMobile ? 'd-flex flex-column bd-highlight mb-3' : 'd-flex flex-row bd-highlight mb-3';
    return (

        <div className="d-flex flex-column bd-highlight mb-3">
            <div className="container">
                <div className={classname}>
                    <div className="p-2 bd-highlight">
                        <p className="tutorname">{props.name}</p>
                    </div>
                    <div className="location">
                        <p className="country">{props.location}</p>
                    </div>
                    <div className="p-2 bd-highlight">
                        {props.super_tutor == 1 ? <img src={SuperTutor} className="img-rank" /> : ''}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className = "location-window">
                            <p className="country">{props.location}</p>
                        </div>
                    </div>
                </div>
                {props.average_rating != 0 ? <div className="row" style={{ marginTop: '-2rem' }}>
                    <div className="col" style={{ textAlign: "left" }}>
                        <StarRatings
                            rating={props.average_rating}
                            starRatedColor="#00ABBD"
                            starHoverColor="#00ABBD"
                            changeRating={changerating}
                            numberOfStars={5}
                            starDimension='14.75px'
                            starSpacing='0px'
                            name='rating'
                        />
                    </div>
                    {/* <div className = "col">
                        <div>{props.average_rating}</div>
                        </div> */}
                </div> : ''}
            </div>
        </div>
    )
}

export default TutorName
