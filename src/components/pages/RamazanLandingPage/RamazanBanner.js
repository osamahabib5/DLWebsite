import React from 'react'
import BannerImage from './BannerImage.jpg';
import { Card, Col, Container, Row } from 'react-bootstrap'
function RamazanBanner() {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={BannerImage} style={{ height: "800px" }} alt="Card image" />
                <Card.ImgOverlay>
                    {/* <Card.Title style = {{marginTop: "4rem"}}>Card title</Card.Title>
                    <Card.Text>
                        
                    </Card.Text> */}
                    <div className="d-flex justify-content-center">
                        <button className="btn button-cta button-blue">
                            Sign Up
                        </button>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default RamazanBanner
