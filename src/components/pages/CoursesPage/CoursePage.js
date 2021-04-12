import React, { useState, useRef } from 'react'
import './CoursePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import FindaTutorEnd from '../../FindaTutor/FindaTutor_End';
import MainVideo from './Videos/MainVideo/MainVideo';
import videos from './Videos/video_list';
import ModalPopup from './Videos/VideoPopup/ModalPopup';
import ProgramSlider from './ProgramSlider/ProgramSlider';
import ReactPixel from 'react-facebook-pixel';
import VideoComponents from './BackgroundImage/VideoComponents/VideoComponents';
function CoursePage() {
    const [source, setsource] = useState(videos[0]);
    const [play, startplaying] = useState(false);
    const [playpopup, startpopup] = useState(false);
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [displaytext, setdisplaytext] = useState("Book a free trial class now!");
    const textInput = useRef(null);
    const advancedMatching = { em: 'some@email.com' }; 
    const options = {
        autoConfig: true, 
    };
    ReactPixel.init('423237308932969', advancedMatching, options);

    ReactPixel.pageView()
    const changeVideo = (e) => {
        if (textInput.current) {
            textInput.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
        // setOpen(true);
        startplaying(true); //For playing video on click
        if (e.target.className === "english") {
            setsource(videos[0])
        } else if (e.target.className === "maths") {
            setsource(videos[1])
        } else if (e.target.className === "others") {
            setsource(videos[2]);
        }
    }
    const changeVideoPopup = (e) => {
        setOpen(true);
        startpopup(true);
        if (e.target.className === "english-mobile") {
            setsource(videos[0])
        } else if (e.target.className === "maths-mobile") {
            setsource(videos[1])
        } 
    }

    return (

        <div className="Courses">
            <div className="coursesimage">
                <BackgroundImage changeVideo={changeVideo} />
            </div>
            <div className = "programs">
                <VideoComponents />
            </div>
            <div className="courses-video" ref={textInput}>
                <MainVideo source={source} play={play} />
            </div>
            <div className="programs-mobile">
                {/* <p>Swipe to view other courses</p> */}
                <ProgramSlider changeVideoPopup={changeVideoPopup} />
            </div>
            <div className="video-popup">
                <ModalPopup
                    playpopup={playpopup}
                    source={source} open={open} onOpenModal={onOpenModal} onCloseModal={onCloseModal} />
            </div>
            <div className="find-a-tutor">
                <FindaTutorEnd displaytext = {displaytext}/>
            </div>
            {/* <div className="products">
                <Products />
            </div>
            <div className="packs-detail">
                <PacksPopup />
            </div> */}
        </div>
    )
}

export default CoursePage
