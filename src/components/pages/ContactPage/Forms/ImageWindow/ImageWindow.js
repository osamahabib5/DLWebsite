import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Image from '../Image/Contact.png'
import './ImageWindow.css'
function ImageWindow() {
    return (
        <Card>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
                <Card.Text>
                    <p className="contactheading"> CONTACT </p>
                    <p className="DEscription">Speak with a Customer Sales Representative to talk about any questions, comments or concerns you might have!"</p>
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default ImageWindow
