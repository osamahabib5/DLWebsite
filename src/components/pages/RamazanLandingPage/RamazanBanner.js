import React from 'react'
import BannerImage from './Ramadan-Cover.jpg';
import RamadanMobile from "./RamadanMobile.jpg";
import { Card, Image } from 'react-bootstrap'
function RamazanBanner(props) {
    return (
        <div>
            <Card  style={{ backgroundColor: "#133188!important",width: props.isMobile ? "104.3%" : "100%" }}>
                <Card.Img src={props.isMobile ? RamadanMobile : BannerImage} style={{ height: props.isMobile ? "225px" : "560px" }} />
            </Card>
        </div>
    )
}

export default RamazanBanner
