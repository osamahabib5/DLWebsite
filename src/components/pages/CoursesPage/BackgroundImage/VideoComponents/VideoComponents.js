import React,{useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck, Card, ListGroup } from 'react-bootstrap';
import play from '../../../../images/Courses/Play.png'
import './VideoComponent.css'
const VideoComponents = (props) => {
    const card1 = useRef(null);
    const card2 = useRef(null);
    const card3 = useRef(null);

    const showCard = () => {
        if (card1.current) {
            card1.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
        if (card2.current) {
            card2.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
        if (card3.current) {
            card3.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    return (
        <div className="d-flex justify-content-end">
            <CardDeck>
                <Card style={{
                    backgroundColor: "#FCAA93"
                }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Reading & writing</ListGroup.Item>
                        <ListGroup.Item>Phonics & sound recognition</ListGroup.Item>
                        <ListGroup.Item>Build sentence structure</ListGroup.Item>
                        <ListGroup.Item>Key grammar themes</ListGroup.Item>
                        <ListGroup.Item>Comprehension</ListGroup.Item>
                        <ListGroup.Item>Vocabulary development</ListGroup.Item>
                        <ListGroup.Item>Essay writing</ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item><img src={play} onClick={props.changeVideo} style={{ cursor: "pointer", marginTop: "-2rem" }} className="english" /></ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item className = "subject-mobile">English</ListGroup.Item>
                    </ListGroup>

                </Card>
                <Card style={{
                    backgroundColor: "#8CD7DF"
                }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Place value</ListGroup.Item>
                        <ListGroup.Item>Multiplication & division</ListGroup.Item>
                        <ListGroup.Item>Fractions</ListGroup.Item>
                        <ListGroup.Item>Measurement & geometry</ListGroup.Item>
                        <ListGroup.Item>Sequences & algebra</ListGroup.Item>
                        <ListGroup.Item>Mental math</ListGroup.Item>
                        <ListGroup.Item>Word Problems</ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item><img src={play} onClick={props.changeVideo} style={{ cursor: "pointer", marginTop: "-2rem" }} className="maths" /></ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item className = "subject-mobile">Maths</ListGroup.Item>
                    </ListGroup>

                </Card>
                {/* <Card style={{
                    backgroundColor: "#FCCFCB"
                }}>

                    <ListGroup variant="flush">
                        <ListGroup.Item>Urdu</ListGroup.Item>
                        <ListGroup.Item>French</ListGroup.Item>
                        <ListGroup.Item>Mandarin</ListGroup.Item>
                        <ListGroup.Item>Art</ListGroup.Item>
                        <ListGroup.Item>Homework Help</ListGroup.Item>
                        <ListGroup.Item>Admission Test Prep</ListGroup.Item>
                        <ListGroup.Item>Online & in-person classes</ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item><img src={play} onClick={props.changeVideo} style={{ cursor: "pointer", marginTop: "-2rem" }} className="others" /></ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item className = "subject-mobile">Others</ListGroup.Item>
                    </ListGroup>
                </Card> */}
            </CardDeck>
        </div>
    )
}

export default VideoComponents
