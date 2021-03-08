import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import DepositionImage from '../logo/Images/SliderImage.png'
import testimonial from '../logo/Images/testimonial.jpg'
import './Slider.css'
function Slider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={DepositionImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Testimonials</h3>
                        <p className="testimonial">“My child’s confidence has grown
                        and grades have improved with
Dot & Line! A great tutor and wonderful mentor to our daughter!”</p>
                        <p className="initials">FIRST NAME LAST NAME TEXT</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={DepositionImage}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="initials">FIRST NAME LAST NAME TEXT</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={DepositionImage}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p className="testimonial">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <p className="initials">FIRST NAME LAST NAME TEXT</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
