import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Backdrop from "./components/Backdrop/Backdrop";
import './App.css'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import React, { useState, useEffect } from 'react'
import NotificationToast from './components/Notification/NotificationToast';
import NotificationToastMobile from "./components/Notification/NotificationToastMobile";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/pages/HomePage/HomePage';
import ContactPage from './components/pages/ContactPage/ContactPage';
import CoursePage from './components/pages/CoursesPage/CoursePage';
import {
  Switch,
  Route
} from "react-router-dom";
import tawkTo from "tawkto-react";
// import initFontAwesome from './components/initFontAwesome/initFontAwesome';
import OurTutor from './components/pages/OurTutor/OurTutor';
import BecomeTutor from './components/pages/BecomeTutor/BecomeTutor';
import About from './components/pages/About/About';
import CourseDetails from './components/pages/CoursesPage/Products/CoursePacks/CourseDetails/CourseDetails';
import Findtutor from './components/pages/Findtutor/Findtutor';
import BookaDemo from "./components/pages/BookaDemo/BookaDemo";
import Cookies from 'universal-cookie';
import RamazanLandingPage from './components/pages/RamazanLandingPage/RamazanLandingPage';

function App() {
  const cookies = new Cookies();
  const tawkToPropertyId = '603e065a385de407571b92c8';
  const tawkToKey = '65fd64ca89ca6c6879e1a85ce8b3e231f4f6dc16'

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const [notification, setNotification] = useState(true);
  //Toggle the SideDrawer 
  const handleDrawerToggleClick = () => {
    setSideDrawerOpen((prevDrawerState) => !prevDrawerState)
  }

  //Click on the backdrop to make it and sidedrawer go away
  const handleBackdropClick = () => {
    setSideDrawerOpen(false)
  }
  const closenotifications = () => {
    setNotification(false);
    cookies.set("notification", "true", { path: '/' });
  }
  const [isMobile, setisMobile] = useState(false);
  const mobileview = () => {
    if (window.innerWidth < 769) {
      setisMobile(true);
    }
    if (window.innerWidth >= 769) {
      setisMobile(false);
    }
  }
  let backdrop;
  let footer;
  let Notification;
  let MobileNotification;
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={handleBackdropClick} />
  } else {
    footer = <Footer  />
  }
  if (notification) {
    Notification = <NotificationToast click={closenotifications} />
    MobileNotification = <NotificationToastMobile click={closenotifications} />
  }
  useEffect(() => {
    mobileview();
    window.addEventListener("resize", mobileview);
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className="page-container">
      <div className="content-wrap">
        {!cookies.get("notification") ? Notification : ""}
        <Toolbar handleDrawerToggleClick={handleDrawerToggleClick} />
        {!cookies.get("notification") ? MobileNotification : ""}
        <SideDrawer show={sideDrawerOpen} handleDrawerToggleClick={handleDrawerToggleClick} />

        <Switch>
          <Route path='/programs/kitdetails'>
            <CourseDetails />
          </Route>
          <Route path="/programs">
            <CoursePage notification={notification}/>
          </Route>
          {/* <Route path="/pricing/:id" children={<BookaDemo />} /> */}
          <Route path="/pricing">
            <BookaDemo notification={notification} />
          </Route>
          <Route path="/tutors/:id" children={<OurTutor notification={notification} />} />
          <Route path="/tutors">
            <Findtutor notification={notification} />
          </Route>

          <Route path="/becometutor">
            <BecomeTutor isMobile={isMobile} />
          </Route>

          <Route path="/aboutus">
            <About notification={notification} />
          </Route>
          <Route path="/contact">
            <ContactPage notification={notification} />
          </Route>
          <Route path="/ramadan">
            <RamazanLandingPage notification={notification} />
          </Route>
          <Route path="/">
            <HomePage notification={notification} />
            {/* <RamazanLandingPage notification={notification}/> */}
          </Route>
        </Switch>

        {/* Backdrop only opens if sidedrawer is filled */}
        {backdrop}

      </div>
      {footer}

    </div>
  );
}

export default App;
