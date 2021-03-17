import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import DepositionImage from '../logo/Images/SliderImage.png'
import testimonial from '../logo/Images/testimonials.jpg'
import './Slider.css'
function Slider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={testimonial}
                        alt="First slide"
                        
                    />
                    <Carousel.Caption>
                        <h3>Testimonials</h3>
                        <p className="testimonial">"We didn’t want a teacher who simply educates our child. We wanted someone who cares for our child. By helping our daughter in developing her communication skills and feel confident, not only in the classroom but outside too. You have been exactly what we were looking for. We asked Hoorain about how the school is going this term and she said, she loves you and her new friends. Thank you!"</p>
                        <p className="initials">- Arsalan Ahmed Khan</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={DepositionImage}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Testimonials</h3>
                        <p className="testimonial">My son has been enrolled with Miss Zakia for the past two years and I have been highly satisfied with the way she has helped him in building his basic mathematical concepts and improving his writing skills. Not only that she has always shown concern about his behavioural changes throughout the learning process may it be the physical classes or the online programme she has been a great teacher and a wonderful human being with whom I can always discuss the problem areas of my child. I am really Glad my son has such a hardworking teacher.</p>
                        <p className="initials">- Sohail Sherwan</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={DepositionImage}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Testimonials</h3>
                        <p className="testimonial">Sana fostered a warm, nurturing atmosphere, ideal for learning. She planned and implemented dynamic and fun learning activities that my son thoroughly enjoyed! I also noticed that she encouraged students positive self image and supported individuality, independence, and also creative expression.</p>
                        <p className="initials">- Mahvish Hasan</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
