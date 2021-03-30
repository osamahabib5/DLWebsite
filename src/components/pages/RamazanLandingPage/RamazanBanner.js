import React from 'react'
import BannerImage from './BannerImage.jpg';
import { Card, Col, Container, Row } from 'react-bootstrap'
function RamazanBanner() {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={BannerImage} style={{ height: "560px" }} alt="Card image" />
                {/* <Card.ImgOverlay>
                    
                </Card.ImgOverlay> */}
            </Card>
        </div>
    )
}

export default RamazanBanner
