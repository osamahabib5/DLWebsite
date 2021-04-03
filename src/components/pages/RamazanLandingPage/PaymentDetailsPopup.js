import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { ListGroup } from 'react-bootstrap';
function PaymentDetailsPopup(props) {
    return (
        <div>
            <Modal open={props.open} onClose={props.onCloseModal} center>
                <h1>Payment Details</h1>
                <p style={{ marginTop: "2rem" }}>Thank you for registering for the Dot & Line Ramadan Program. For payment, please refer to the following details: </p>
                <div className = "paymentdetailslist"> 
                    <ListGroup>
                        <ListGroup.Item>Bank Name: Meezan Bank</ListGroup.Item>
                        <ListGroup.Item>Account Title: The Dot And The Line (Pvt) Ltd</ListGroup.Item>
                        <ListGroup.Item>Account # 9942-0102857123</ListGroup.Item>
                        <ListGroup.Item>IBAN # PK61MEZN0099420102857123</ListGroup.Item>
                    </ListGroup>
                    
                    
                    {/* Account # 9942-0102857123
                    IBAN # PK61MEZN0099420102857123
                    Email screenshot of payment */}

                </div>
                <p style={{ marginTop: "2rem" }}>Please upload your confirmation <span><a style = {{color: "red"}} target = "__blank" href = "https://docs.google.com/forms/d/e/1FAIpQLSdWjps0VBfYYvpJeQXPJpgCexy4ZSqtg3qgbPuhtxXKNMIjCg/viewform">here</a></span>. </p>
            </Modal>
        </div>
    )
}

export default PaymentDetailsPopup
