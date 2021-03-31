import React from 'react'
import BannerImage from './Ramadan-Cover.jpg';
import { Card, Image} from 'react-bootstrap'
function RamazanBanner(props) {
    return (
        <div>
            <Card className="bg-dark text-white" style={{ width: "100%"}}>
                {/* <Card.Img src={BannerImage} style={{ height: "560px" }} alt="Card image" fluid/> */}
                <Card.Img src={BannerImage} style={{ height: props.isMobile ? "225px": "560px"}}  />
                {/* <Card.ImgOverlay>
                    
                </Card.ImgOverlay> */}
            </Card>
        </div>
    )
}

export default RamazanBanner
