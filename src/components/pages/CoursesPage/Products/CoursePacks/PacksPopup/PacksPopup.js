import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import './PacksPopup.css'
import Gallery from './ImageGallery/ImageGallery';
import ReactPixel from 'react-facebook-pixel';
function MyVerticallyCenteredModal(props) {
    const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
    const options = {
        autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
        debug: false, // enable logs
    };
    ReactPixel.init('252400769619363', advancedMatching, options);

    ReactPixel.pageView(); // For tracking page view
    // ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
    // ReactPixel.trackSingle('PixelId', event, data); // For tracking default events.
    // ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
    // ReactPixel.trackSingleCustom('PixelId', event, data);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <div className = "popup-header">
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p className = "popup-title">AGES 5-8</p>
                    </Modal.Title>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p className = "popup-details">Home Learning Kit Product Name</p>
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>

                {/* <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
          </p> */}
          <div className = "gallery">
              <Gallery />
          </div>
            </Modal.Body>
        </Modal>
    );
}

function PacksPopup() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch demo modal
      </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default PacksPopup
