import React from 'react'
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css'
import './videocontent.css'
function Videocontent(props) {
    return (
        <ReactPlayer
            controls
            width = "100%"
            height = "auto"
            url="video/Dot&LinePhilosophy.mp4"
            style = {{backgroundColor: "white", display : "flex"}}
            />
            
    )
}

export default Videocontent