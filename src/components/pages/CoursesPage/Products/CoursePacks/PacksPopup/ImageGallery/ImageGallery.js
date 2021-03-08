import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGallery from 'react-image-gallery';
import './ImageGallery.css'
import { ListGroup, Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import imgsrc from './Increment.png';
import Increment from '../../../../../../IncrementComponent/Increment';
function Gallery() {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',

        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',

        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',

        },
    ];
    return (
        <div>
            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-highlight"><ImageGallery items={images} thumbnailPosition="left" /></div>
                <div className="p-2 bd-highlight"><ListGroup>
                    <ListGroup.Item style={{ color: "black" }}>FEATURES</ListGroup.Item>
                    <ListGroup.Item style={{ color: "black" }}>- Inspiring Personalities</ListGroup.Item>
                    <ListGroup.Item style={{ color: "black" }}>- Stories with hand drawn illustrations</ListGroup.Item>
                    <ListGroup.Item style={{ color: "black" }}>- Activity sheets for each story</ListGroup.Item>
                    <ListGroup.Item style={{ color: "black" }}>- 2 Dice and 30 wooden counters</ListGroup.Item>
                    <ListGroup.Item style={{ color: "black" }}>- Thinking games including: </ListGroup.Item>
                    <ListGroup.Item style={{ color: "black" }}>- Cut & colour activity booklet and colouring pencils</ListGroup.Item>
                    <ListGroup.Item style={{ color: "black" }}>- Dot & Line Cheque Book</ListGroup.Item>
                </ListGroup></div>
            </div>
            <Container fluid>
                <Row>
                    <Col><p className="product-title">PRODUCT DESCRIPTION</p></Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                    <Col><p className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ligula et risus fringilla vestibulum. Pellentesque porttitor sed eros at congue. Suspendisse sagittis finibus neque vel pulvinar. Mauris id tellus ut sem commodo lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ligula et risus fringilla vestibulum. Pellentesque porttitor sed eros at congue. Suspendisse sagittis finibus neque vel pulvinar. Mauris id tellus ut sem commodo lacinia. Duis ac scelerisque nisl, vel viverra elit. Duis ac scelerisque nisl, vel viverra elit. </p></Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col><p className="price">PKR 2000</p></Col>
                    <Col>
                        {/* <div className="d-flex flex-row">
                            <div className="p-2"><button className="btn minus-btn disabled" type="button">+</button></div>
                            <div className="p-2"><input type = "text" id = "quantity" value = "1"/></div>
                            <div className="p-2"><button className = "btn minus-btn disabled" type = "button">-</button></div>
                        </div> */}
                        <Increment />
                        {/* <button className="btn minus-btn disabled" type="button">+</button>
                        
                        </InputGroup>
                         */}

                    </Col>
                    <Col><Button variant="primary" size="lg">
                        Add to Cart
                        </Button></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Gallery
