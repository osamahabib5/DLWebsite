import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurApproach.css';
import Icon1 from '../logo/Icon1.png'
import Icon2 from '../logo/Icon2.png'
import Icon3 from '../logo/Icon3.png'
import Icon4 from '../logo/Icon4.png'
import { Card, CardDeck } from 'react-bootstrap';
function OurApproach(props) {
    return (
        <div className="d-flex flex-column bd-highlight mb-3">
            <div className="p-2 bd-highlight">
                <p className="heading">{props.heading}</p>
            </div>
            <div className="p-2 bd-highlight">
                <p className="Approach-content">{props.approachcontent}</p></div>
            <div className="p-2 bd-highlight">
                <p className="details">{props.details}</p>
            </div>
            <div className="p-2 bd-highlight">
                <CardDeck style={{ width: "100%", margin: "auto" }} >
                    <Card>
                        <Card.Img variant="top" src={Icon1} />
                        <Card.Body>
                            <Card.Title><p className="title">Expert Tutors</p></Card.Title>
                            <Card.Text>
                                <p className="title-description">Trained and experienced tutors</p>
                                <p className="title-description">Individual attention</p>
                                <p className="title-description">Guaranteed results</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Icon2} />
                        <Card.Body>
                            <Card.Title><p className="title">Curated LearningPacks</p></Card.Title>
                            <Card.Text>
                                <p className="title-description">Practice Worksheets</p>
                                <p className="title-description">Developed by subject specialists</p>
                                <p className="title-description">HW help and exam prep</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="w-100"></div>
                    <Card >
                        <Card.Img variant="top" src={Icon3} />
                        <Card.Body>
                            <Card.Title><p className="title">Personalized Learning</p></Card.Title>
                            <Card.Text>
                                <p className="title-description">Track your child's progress</p>
                                <p className="title-description">Interactive quizzes</p>
                                <p className="title-description">Fun and engaging content</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Icon4} />
                        <Card.Body>
                            <Card.Title><p className="title">Proven Results</p></Card.Title>
                            <Card.Text>
                                <p className="title-description">40% grade jump in just four months!</p>
                                <p className="title-description">No rote learning</p>
                                <p className="title-description">Deep understanding of concepts</p>
                                {/* <p className="title-description">Improve logical and thinking skills</p> */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        </div>
    )
}

export default OurApproach
