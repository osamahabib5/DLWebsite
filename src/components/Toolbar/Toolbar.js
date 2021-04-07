import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Toolbar.css'
import Logo from '../logo/Logo.png'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Link
} from "react-router-dom";
import initFontAwesome from '../initFontAwesome/initFontAwesome';
const Toolbar = (props) => {
    useEffect(() => {
        initFontAwesome();
    }, [])
    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="hamburger_icon">
                    <DrawerToggleButton click={props.handleDrawerToggleClick} />
                </div>
                <div className="toolbar__logo">

                    <Link to="/"> <img src={Logo} alt="Text" className="rounded mx-auto d-block" /></Link>
                </div>
                <div className="spacer" />
                <div className="toolbar-navigation-items">
                    <ul>
                        {/* <li><Link to="/programs">Programs & Courses</Link></li> */}
                        <li><Link to={{
                            pathname: "/pricing",
                            state: { PricingValue: "hello" }
                        }}>Pricing</Link></li>
                        {/* <li><Link to={{
                            pathname: "/tutors",
                            state: { findtutors: "hello" }
                        }}>Find a Tutor</Link></li> */}
                        {/* <li><Link to="/contact">Contact Us</Link></li> */}
                        <li><Link to="/becometutor">Become a Tutor</Link></li>
                        <li><a href="https://www.youtube.com/channel/UCCOxYRM-2PQdvRWP7awc9kA" target="__blank"><FontAwesomeIcon icon={['fab', 'youtube']} size="lg" /></a></li>
                        <li><a href="https://www.facebook.com/dotandlinecentres/" target="__blank"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" /></a></li>
                        <li><a href="https://www.instagram.com/dotandlinecentres/" target="__blank"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></a></li>
                    </ul>

                </div>

            </nav>
        </header>

    )
}

export default Toolbar