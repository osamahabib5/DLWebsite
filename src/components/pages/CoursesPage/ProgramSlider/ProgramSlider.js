import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import play from '../../../images/Courses/Play.png'
import { Carousel } from 'react-bootstrap';
import CoursesDetails from '../BackgroundImage/VideoComponents/CoursesDetails';
import { Link } from 'react-router-dom';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ProgramSlider = (props) => {
    return (
        <Carousel style={{ margin: "auto", width: "85%", background : "white" }}>
            {CoursesDetails.map((data) => {
                return (
                    <Carousel.Item key={data.id}>
                        <Carousel.Caption  style={{
                            height: "650px", backgroundColor: "white",
                            border: "3px solid" + data.borderColor,
                            borderRadius: "2rem"
                        }} >
                            <p className="mobilecoursesdetails" style={{ fontSize: "23px" }}>{data.title}</p>
                            <p className="mobilecoursesdetails" style={{ fontSize: "19\px" }}>Curriculum includes </p>
                            <p className="mobilecoursesdetails">{data.curriculum}</p>
                            <div>
                                <div className = "d-flex justify-content-center">
                                    <Link to={data.lessonpack1} target="_blank" download>
                                        <p className="view-more">
                                            View Detailed Curriculum</p>
                                        <span style={{ color: "black" }}>
                                            <FontAwesomeIcon icon={faBook} />
                                        </span>
                                    </Link>
                                </div>
                                {/* <div >
                                    <p className="view-more">Learn More</p>
                                    <img src = {play}/>
                                </div> */}
                                <div className="d-flex justify-content-center" style={{ marginTop: "3rem" }}>
                                    <Link to="/tutors">
                                        <button className="btn button-cta button-red">
                                            Book a Demo
                                        </button>
                                    </Link>
                                </div>
                               
                            </div>
                            {/* <p><img src={play} style={{ cursor: "pointer" }} className="maths-mobile" onClick={props.changeVideoPopup} /></p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default ProgramSlider
