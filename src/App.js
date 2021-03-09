import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Backdrop from "./components/Backdrop/Backdrop";
import './App.css'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import React, { useState } from 'react'
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
import OurTutor from './components/pages/OurTutor/OurTutor';
import BecomeTutor from './components/pages/BecomeTutor/BecomeTutor';
import About from './components/pages/About/About';
import CourseDetails from './components/pages/CoursesPage/Products/CoursePacks/CourseDetails/CourseDetails';
import Findtutor from './components/pages/Findtutor/Findtutor';
import BookaDemo from "./components/pages/BookaDemo/BookaDemo";
import PricingFilters from './components/pages/BookaDemo/PricingFilters/PricingFilters';
function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const [toggleFooter, setToggleFooter] = useState(true);
  const [notification, closeNotification] = useState(true);
  //Toggle the SideDrawer 
  const handleDrawerToggleClick = () => {
    setSideDrawerOpen((prevDrawerState) => !prevDrawerState)
  }

  //Click on the backdrop to make it and sidedrawer go away
  const handleBackdropClick = () => {
    setSideDrawerOpen(false)
  }
  //Hide the footer when sidedrawer is opened
  const handleFooterClick = () => {
    setToggleFooter(false)
  }
  const closenotifications = () => {
    closeNotification(false);
  }
  let backdrop;
  let footer;
  let Notification;
  let MobileNotification;
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={handleBackdropClick} />
  } else {
    footer = <Footer show={handleFooterClick}/>
  }
  if (notification) {
    Notification = <NotificationToast click={closenotifications} />
    MobileNotification = <NotificationToastMobile click={closenotifications} />
  }
  return (
      <div className="page-container">
        <div className="content-wrap">
          {/* {Notification} */}
          <Toolbar handleDrawerToggleClick={handleDrawerToggleClick} />

          <SideDrawer show={sideDrawerOpen}  handleDrawerToggleClick = {handleDrawerToggleClick}/>

          <Switch>
            <Route path='/programs/kitdetails'>
              <CourseDetails />
            </Route>
            <Route path="/programs">
              <CoursePage />
            </Route>
            <Route path="/pricing">
              <BookaDemo />
            </Route>
            <Route path="/tutors/:id" children={<OurTutor />} />
            <Route path="/tutors">
              <Findtutor />
            </Route>

            <Route path="/becometutor">
              <BecomeTutor />
            </Route>

            <Route path="/aboutus">
              <About />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/pricingfilters">
              <PricingFilters />
            </Route>
            <Route path="/">
              <HomePage />
              {/* <BookaDemo /> */}
            </Route>
          </Switch>

          {/* Backdrop only opens if sidedrawer is filled */}
          {/* {backdrop} */}

        </div>
        {footer}

      </div>
  );
}

export default App;
