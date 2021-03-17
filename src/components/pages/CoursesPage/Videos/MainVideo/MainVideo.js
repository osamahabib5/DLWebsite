import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';
const MainVideo = (props) =>{
    return (

        <div className = "d-flex justify-content-center">
            <ReactPlayer
            controls
            height = "360px"
            url= {props.source.url}
            playing = {props.play ? true: false}
            />
        </div>

    )
}

export default MainVideo
