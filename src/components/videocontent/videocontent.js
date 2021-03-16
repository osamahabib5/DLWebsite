import React from 'react'
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css'
import './videocontent.css'
function Videocontent() {
    return (
        <ReactPlayer
            controls
            width = "100%"
            height = "360px"
            url="https://www.youtube.com/watch?v=P19LAXq6ClA"
            />
            
    )
}

export default Videocontent