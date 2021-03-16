import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import play from '../../../images/Courses/Play.png'
import { Carousel } from 'react-bootstrap';
const ProgramSlider = (props) =>{
    return (
        <Carousel>
            <Carousel.Item >
                <Carousel.Caption style={{ backgroundColor: "#FCAA93" }} >
                    <p style={{ fontWeight: "800" }}>English</p>
                    <p></p>
                    <p>Reading & writing</p>
                    <p>Phonics & sound recognition</p>
                    <p>Build sentence structure</p>
                    <p>Key grammar themes</p>
                    <p>Comprehension</p>
                    <p>Vocabulary development</p>
                    <p>Essay writing</p>
                    <p><img src = {play} style = {{cursor: "pointer"}} className = "english-mobile" onClick = {props.changeVideoPopup}/></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>


                <Carousel.Caption style={{ backgroundColor: "#8CD7DF" }} >
                    <p style={{ fontWeight: "800" }}>Maths</p>
                    <p></p>
                    <p>Place value</p>
                    <p>Multiplication & division</p>
                    <p>Fractions</p>
                    <p>Measurement & geometry</p>
                    <p>Sequences & algebra</p>
                    <p>Mental math</p>
                    <p>Word problems</p>
                    <p><img src = {play} style = {{cursor: "pointer"}} className = "maths-mobile" onClick = {props.changeVideoPopup}/></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption style={{ backgroundColor: "#FCCFCB" }}>
                    <p style={{ fontWeight: "800" }}>Others</p>
                    <p></p>
                    <p>Urdu</p>
                    <p>French</p>
                    <p>Mandarin</p>
                    <p>Art</p>
                    <p>HW Help</p>
                    <p>Admission Test Prep</p>
                    <p>Online & In-person Classes</p>
                    <p><img src = {play} style = {{cursor: "pointer"}} className = "others-mobile" onClick = {props.changeVideoPopup}/></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ProgramSlider
