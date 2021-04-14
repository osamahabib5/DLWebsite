import React, { useEffect, useState } from 'react'
import './SideDrawer.css'
import Logo from '../logo/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import baseUrl from '../../baseUrl/baseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SideDrawer(props) {
    let drawerClasses = "sidedrawer"
    if (props.show) {
        drawerClasses = "sidedrawer open"
    }
    const closeDrawer = () => {
        drawerClasses = "sidedrawer"
    }
    const [footervalues, setfootervalues] = useState({ address: '', phone_1: '', phone_2: '' })
    useEffect(() => {
        axios.get(baseUrl + "/api/getInfo/footer").then((response) => {
            setfootervalues({
                address: JSON.stringify(response.data.data.address),
                phone_1: JSON.stringify(response.data.data.phone_1),
                phone_2: JSON.stringify(response.data.data.phone_2)
            })
        }).catch((error) => {
            console.log("Error: " + error)
        })
    }, [])
    return (
        <div>
            <nav className={drawerClasses}>
                <div>
                    <ul style={{ paddingLeft: "0px" }}>
                        <li><div className="Logo">
                            <Link to="/"><img src={Logo} alt="Logo" onClick={props.handleDrawerToggleClick} /></Link>
                        </div></li>
                        {/* <li><Link to="/pricing" style={{ cursor: "pointer" }} onClick={props.handleDrawerToggleClick}>Pricing</Link></li> */}
                        {/* <li><Link to="/programs" style={{ cursor: "pointer" }} onClick={props.handleDrawerToggleClick}>Programs & Courses</Link></li> */}
                        
                        {/* <li><Link to="/tutors" style={{ cursor: "pointer" }} onClick={props.handleDrawerToggleClick}>Find a Tutor</Link></li> */}
                        <li><Link to="/becometutor" style={{ cursor: "pointer" }} onClick={props.handleDrawerToggleClick}>Become a Tutor</Link></li>
                        {/* <li><Link to="/aboutus" style={{ cursor: "pointer" }} onClick={props.handleDrawerToggleClick}>About Our Company</Link></li> */}
                        <li><Link to="/contact" style={{ cursor: "pointer" }} onClick={props.handleDrawerToggleClick}>Contact</Link></li>
                    </ul>
                    <hr />
                    <div className="container">
                        <div className="text-center">
                            <ul className = "navbarsocialmediaicons" >
                                <li ><a href="https://www.youtube.com/channel/UCCOxYRM-2PQdvRWP7awc9kA" target="__blank"><FontAwesomeIcon icon={['fab', 'youtube']} size="lg" /></a></li>
                                <li ><a href="https://www.facebook.com/dotandlinecentres/" target="__blank"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" /></a></li>
                                <li><a href="https://www.instagram.com/dotandlinecentres/" target="__blank"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></a></li>
                            </ul>
                        </div>
                        <div className="text-center">{footervalues.address.substring(1, footervalues.address.length - 1)}  {footervalues.phone_1.substring(1, footervalues.phone_1.length - 1)} | {footervalues.phone_2.substring(1, footervalues.phone_2.length - 1)}</div>
                        <div className="text-center">COPYRIGHT {new Date().getFullYear()} |    THE DOT & LINE</div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default SideDrawer
