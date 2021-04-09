import React from 'react'
import BannerImage from './Ramadan-Cover.jpg';
import RamadanMobile from "./RamadanMobile.jpg";
import { Card} from 'react-bootstrap'
import Cookies from 'universal-cookie';
function RamazanBanner(props) {
    const cookies = new Cookies();
    return (
        <div>
            <Card style={{ backgroundColor: "#133188!important",width: props.isMobile ? "104.3%" : "100%" }}>
                <Card.Img src={props.isMobile ? RamadanMobile : BannerImage} style={{ height: props.isMobile ? "225px" : "560px",marginTop: props.isMobile && !cookies.get("notification") ? "-3.2rem " :!props.notification || cookies.get("notification") && !props.isMobile ? "0.4rem" : !props.notification || cookies.get("notification") && props.isMobile ? "0.4rem": "0.3rem" }} />
            </Card>
        </div>
    )
}

export default RamazanBanner
