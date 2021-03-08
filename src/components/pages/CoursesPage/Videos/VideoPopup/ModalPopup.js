import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';
import './ModalPopup.css'
const ModalPopup = (props) => {
   

  return (
    <div>
      <Modal open={props.open} onClose={props.onCloseModal} center>
      <ReactPlayer
            controls
            width = "100%"
            height = "auto"
            url= {props.source.url}
            playing = {props.playpopup ? true: false}
            />
      </Modal>
    </div>
  )
}

export default ModalPopup
