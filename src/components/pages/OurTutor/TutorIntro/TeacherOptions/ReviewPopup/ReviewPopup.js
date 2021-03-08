import React, { useState } from 'react'
import ReviewForm from './ReviewForm/ReviewForm';
import { Modal } from 'react-responsive-modal';
import './ReviewPopup.css'
import CheckParent from './CheckParent/CheckParent';
function ReviewPopup(props) {
    const [review, hideReview] = useState(true);
    const hidePopup = () => { hideReview(false) }
    return (
        <div className="review-form">
            <Modal open={props.show} onClose={props.handleClose} center>
                <div className="CheckParent">
                    <h1>Leave a Review</h1>
                    <CheckParent hidePopup={hidePopup} handleClose={props.handleClose} />
                </div>
            </Modal>
        </div>
    );
}

export default ReviewPopup
