import React from 'react'
import './SideDrawer.css'
import Logo from '../logo/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link,Switch,Route
} from "react-router-dom";
function SideDrawer(props) {
    let drawerClasses = "sidedrawer"
    if (props.show) {
        drawerClasses = "sidedrawer open"
    }
    const closeDrawer = () =>{
        drawerClasses = "sidedrawer"
    }
    return (
        <div>
            <nav className={drawerClasses}>
                <div>
                <ul>
                    <li><div className="Logo">
                        <Link to = "/"><img src={Logo} alt="Logo" /></Link>
                    </div></li>
                    <li><Link to="/programs" style = {{cursor: "pointer"}}>Programs & Courses</Link></li>
                        <li><Link to="/pricing" style = {{cursor: "pointer"}}>Pricing</Link></li>
                        <li><Link to="/tutors" style = {{cursor: "pointer"}}>Our Tutors</Link></li>
                        <li><Link to="/becometutor" style = {{cursor: "pointer"}}>Become a Tutor</Link></li>
                    <li><Link to = "/aboutus" style = {{cursor: "pointer"}}>About Our Company</Link></li>
                    <li><Link to = "/contact" style = {{cursor: "pointer"}}>Contact</Link></li>
                </ul>
                <hr />
                <div className="container">
                    <div className = "text-center">4TH FLOOR, BUILDING 35-C, LANE 7, BUKHARI COMMERCIAL, PHASE 6, DHA 0346-0086799 | 0346-0086795</div>
                    <div className = "text-center">COPYRIGHT {new Date().getFullYear()} |    THE DOT & LINE</div>
                </div>
                </div>
            </nav>

        </div>
    )
}

export default SideDrawer
