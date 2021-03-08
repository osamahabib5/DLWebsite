import React, { useContext } from 'react'
import { Card, ListGroup } from "react-bootstrap";
import { TutorsContext } from '../../../../Provider';
import ChangeLocation from "../../../ChangeLocation/ChangeLocation";
import Available_Packages from '../Available_Packages';
function SelectedPricePackage() {
    const { opted_package } = useContext(TutorsContext);
    let i = opted_package == 1 ? 0 : 1;

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
                        <ListGroup.Item>{Available_Packages[i].title}</ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">starts at</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="packagerate">Rs {Available_Packages[i].price}</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">/month</p>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>{Available_Packages[i].heading}</ListGroup.Item>
                        <div className="package_specification">
                            {Available_Packages[i].description.map(val => (
                                <ListGroup.Item>{val}</ListGroup.Item>
                            ))}
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
