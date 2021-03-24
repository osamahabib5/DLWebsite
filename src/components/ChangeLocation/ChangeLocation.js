import React, { useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { TutorsContext } from "../../Provider";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ChangeLocationPopup from './ChangeLocationPopup';
function ChangeLocation() {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const parentlocation = {
        fontfamily: "Avenir-Next",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "12px",
        lineHeight: "16px",
        color: "#000000",
        textAlign: "center",
    }
    const changeLocation = {
        fontfamily: "Avenir-Next",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "12px",
        lineHeight: "16px",
        color: "#32B9BB",
        textAlign: "center",
        marginTop: "-1rem",
        textDecoration: "underline",
        cursor: "pointer"
    }
    const { parent_country } = useContext(TutorsContext)
    return (
        <div style={{ display: "inline!important" }}>
            <p style={parentlocation}>{<FontAwesomeIcon icon={faMapMarkerAlt} />} You are viewing prices in {parent_country}.</p>
            <p style={changeLocation} onClick={onOpenModal}>Change</p>
            <Modal open={open} onClose={onCloseModal} center>
                <ChangeLocationPopup closeModal={onCloseModal} />
            </Modal>
        </div>
    )
}

export default ChangeLocation
