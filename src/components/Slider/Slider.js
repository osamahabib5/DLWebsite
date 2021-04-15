import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Slider.css'
function Slider(props) {
    return (
        <div className="testimonialslider">
            <Carousel style = {{height: props.isMobile ? "700px" : "", padding: props.isMobile ? "2rem" : ""}}>
                <Carousel.Item interval={3000} style = {{marginTop: !props.isMobile ? "2rem" : ""}}>
                    <Carousel.Caption>
                        <h3>TESTIMONIALS</h3>
                        <p className="testimonial">"We didn’t want a teacher who simply educates our child. We wanted someone who cares for our child. By helping our daughter in developing her communication skills and feel confident, not only in the classroom but outside too. You have been exactly what we were looking for. We asked Hoorain about how the school is going this term and she said, she loves you and her new friends. Thank you!"</p>
                        <p className="initials">- Arsalan Ahmed Khan</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000} style = {{marginTop: !props.isMobile ? "2rem" : ""}}>

                    <Carousel.Caption>
                        <h3>TESTIMONIALS</h3>
                        <p className="testimonial">You helped me to do my work, you also helped me to get the full score in English assessments and I get an A grade in the English, 1st term exams. I really want to appreciate your efforts. I will remember your efforts and your focus. Thanks a lot.</p>
                        <p className="initials">- Abdul Wasih</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000} style = {{marginTop: !props.isMobile ? "2rem" : ""}}>

                    <Carousel.Caption>
                        <h3>TESTIMONIALS</h3>
                        <p className="testimonial">Sana fostered a warm, nurturing atmosphere, ideal for learning. She planned and implemented dynamic and fun learning activities that my son thoroughly enjoyed! I also noticed that she encouraged students positive self image and supported individuality, independence, and also creative expression.</p>
                        <p className="initials">- Mahvish Hasan</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
