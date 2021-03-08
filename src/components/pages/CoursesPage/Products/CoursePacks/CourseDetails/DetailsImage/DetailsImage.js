import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Pack1 from './Packs/Packs1.png'

function DetailsImage() {
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={Pack1} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>FOR AGES 5-8</Card.Title>
                <Card.Text>
                Home Learning Kit Product Name
          </Card.Text>
                <Card.Text>Rs 2000</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default DetailsImage
