import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Toolbar.css'
import Logo from '../logo/Logo.png'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import {
    Link
} from "react-router-dom";
const Toolbar = (props) => {

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
                        <li><Link to="/programs">Programs & Courses</Link></li>
                        <li><Link to={{
                            pathname: "/pricing",
                            search: "pricing"
                        }}>Pricing</Link></li>
                        <li><Link to="/tutors">Our Tutors</Link></li>
                        <li><Link to="/becometutor">Become a Tutor</Link></li>
                    </ul>

                </div>

            </nav>
        </header>

    )
}

export default Toolbar