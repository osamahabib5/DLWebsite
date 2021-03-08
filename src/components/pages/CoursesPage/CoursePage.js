import React, { useState, useRef } from 'react'
import './CoursePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import FindaTutorEnd from '../../FindaTutor/FindaTutor_End';
import MainVideo from './Videos/MainVideo/MainVideo';
import videos from './Videos/video_list';
import Products from './Products/Products';
import ModalPopup from './Videos/VideoPopup/ModalPopup';
import ProgramSlider from './ProgramSlider/ProgramSlider';
import PacksPopup from './Products/CoursePacks/PacksPopup/PacksPopup';
import ReactPixel from 'react-facebook-pixel';
function CoursePage() {
    const [source, setsource] = useState(videos[0]);
    const [play, startplaying] = useState(false);
    const [playpopup, startpopup] = useState(false);
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
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
        setOpen(true);
        startplaying(true); //For playing video on click
        if (e.target.className === "English") {
            setsource(videos[0])
        } else if (e.target.className === "Maths") {
            setsource(videos[1])
        } else if (e.target.className === "Urdu") {
            setsource(videos[2]);
        }
    }
    const changeVideoPopup = (e) => {
        setOpen(true);
        startpopup(true);
        if (e.target.className === "button1") {
            setsource(videos[0])
        } else if (e.target.className === "button2") {
            setsource(videos[1])
        } else if (e.target.className === "button3") {
            setsource(videos[2]);
        }
    }

    return (

        <div className="Courses">
            <div className="coursesimage">
                <BackgroundImage changeVideo={changeVideo} />
            </div>
            <div className="courses-video" ref={textInput}>
                <MainVideo source={source} play={play} />
            </div>
            <div className="programs-mobile">
                <ProgramSlider changeVideoPopup={changeVideoPopup} />
            </div>
            <div className="video-popup">
                <ModalPopup
                    playpopup={playpopup}
                    source={source} open={open} onOpenModal={onOpenModal} onCloseModal={onCloseModal} />
            </div>
            <div className="find-a-tutor">
                <FindaTutorEnd />
            </div>
            <div className="products">
                <Products />
            </div>
            <div className="packs-detail">
                <PacksPopup />
            </div>
        </div>
    )
}

export default CoursePage
