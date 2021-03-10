import React, { useContext } from 'react'
import { Carousel, ListGroup, Button } from 'react-bootstrap';
import { TutorsContext } from '../../../../Provider';
import Available_Packages from '../Available_Packages';
function PackageDetailsMobile(props) {
    const { parent_country, setOptedPackage } = useContext(TutorsContext)
    const firstpackage = {
        backgroundColor: "rgb(255, 248, 248)",
        border: "2px solid rgb(252, 207, 203)",
        boxSizing: "border-box",
        borderRadius: "7px 7px 0px 0px"
    }
    const secondpackage = {
        backgroundColor: "rgb(248, 250, 255)",
        border: "2px solid rgb(94, 105, 129)",
        boxSizing: "border-box",
        borderRadius: "7px 7px 0px 0px"
    }
    const setPackagestyle = (index) => {
        if (index == 0) {
            return firstpackage;
        }
        return secondpackage
    }
    return (
        <div className="pricingpackagemobile">
            <Carousel>
                {parent_country === "Pakistan" ? Available_Packages.slice(0, 2).map((data, index) => (
                    <Carousel.Item key={index}>
                        <Carousel.Caption style={setPackagestyle(index)} onClick={() => {
                            props.showLeadsForm();
                            setOptedPackage(index)
                        }}>
                            {/* <div style={{ width: "100%", height: "12px", background: "#5E6981", borderRadius: "7px 7px 0px 0px" }} /> */}
                            <p className="packagemobileheading">{data.title}</p>
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">starts at</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="packagerate">Rs {data.price}</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">/month</p>
                                </div>
                            </div>
                            <p className="packagemobiletagline">{data.heading}</p>
                            <ListGroup>
                                {data.description.map(val => (
                                    <ListGroup.Item>{val}</ListGroup.Item>
                                ))}
                            </ListGroup>
                            <div style={{ marginTop: "3rem" }}>
                                <Button onClick={props.showLeadsForm}>Customize</Button>
                            </div>
                        </Carousel.Caption>

                    </Carousel.Item>
                )) : Available_Packages.slice(2, 4).map((data, index) => (
                    <Carousel.Item key={index} onClick={() => {
                        props.showLeadsForm();
                        setOptedPackage(index)
                    }}>
                        <Carousel.Caption style={setPackagestyle(index)} >
                            {/* <div style={{ width: "100%", height: "12px", background: "#5E6981", borderRadius: "7px 7px 0px 0px" }} /> */}
                            <p className="packagemobileheading">{data.title}</p>
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">starts at</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="packagerate" style={{ whiteSpace: "nowrap" }}>Rs {data.price}</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">/month</p>
                                </div>
                            </div>
                            <p className="packagemobiletagline">{data.heading}</p>
                            <ListGroup>
                                {data.description.map(val => (
                                    <ListGroup.Item>{val}</ListGroup.Item>
                                ))}
                            </ListGroup>
                            <div style={{ marginTop: "3rem" }}>
                                <Button onClick={props.showLeadsForm}>Customize</Button>
                            </div>
                           
                        </Carousel.Caption>

                    </Carousel.Item>
                ))}
            </Carousel>

        </div>
    )
}

export default PackageDetailsMobile
