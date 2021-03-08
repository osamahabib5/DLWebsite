import React from 'react'
import { Carousel, ListGroup } from 'react-bootstrap';
import Available_Packages from '../Available_Packages';
function PackageDetailsMobile() {
    return (
        <Carousel>
            <Carousel.Item >
                <Carousel.Caption style={{ backgroundColor: "#FCAA93" }} >
                    <p style={{ fontWeight: "800" }}>{Available_Packages[0].heading}</p>
                    {/* <p>Reading & writing</p>
                    <p>Phonics & sound recognition</p>
                    <p>Build sentence structure</p>
                    <p>Key grammar themes</p>
                    <p>Comprehension</p>
                    <p>Vocabulary development</p>
                    <p>Essay writing</p> */}
                    <ListGroup>
                        {Available_Packages[0].description.map(data => (
                            <ListGroup.Item>{data}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption style={{ backgroundColor: "#8CD7DF" }} >
                    <p style={{ fontWeight: "800" }}>{Available_Packages[1].heading}</p>
                    <ListGroup>
                        {Available_Packages[1].description.map(data => (
                            <ListGroup.Item>{data}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default PackageDetailsMobile
