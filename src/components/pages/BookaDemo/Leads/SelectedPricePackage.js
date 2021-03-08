import React, { useContext } from 'react'
import { Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import ChangeLocation from "../../../ChangeLocation/ChangeLocation";
function SelectedPricePackage() {
    return (
        <div className="selectedpackage">
            <Card style={{
                backgroundColor: "#FFF8F8",
                border: "2px solid #FCCFCB",
                boxSizing: "border-box",
                borderRadius: " 7px 7px 0px 0px"
            }}>
                <Card.Header style={{ background: "#FCCFCB" }}></Card.Header>
                <div className="d-flex justify-content-center">
                    <ListGroup variant="flush">
                        <ListGroup.Item>MONTHLY PACKAGE</ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">starts at</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="packagerate">Rs 3000</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">/month</p>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>Monthly Premium Package</ListGroup.Item>
                        <div className="package_specification">
                            <ListGroup.Item>2 hrs/week</ListGroup.Item>
                            <ListGroup.Item>Focused Attention</ListGroup.Item>
                            <ListGroup.Item>Small Batch Classes</ListGroup.Item>
                        </div>
                    </ListGroup>
                </div>
            </Card>
            <p className="parentlocation">
                <ChangeLocation />
            </p>
        </div>
    )
}

export default SelectedPricePackage
