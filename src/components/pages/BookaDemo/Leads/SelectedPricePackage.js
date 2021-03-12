import React, { useContext, useEffect } from 'react'
import { Card, ListGroup } from "react-bootstrap";
import { TutorsContext } from '../../../../Provider';
import ChangeLocation from '../../../ChangeLocation/ChangeLocation';
import Available_Packages from '../Available_Packages';
function SelectedPricePackage(props) {
    const { opted_package , fee_amount, setSubscription, result_type} = useContext(TutorsContext);
    const SetPricingPackage = ()=>{
        if (opted_package == 0 || opted_package == 2){
            setSubscription("1_month")
        }
        else{
            setSubscription("3_month");
        }
    }
    useEffect(()=>{
        SetPricingPackage();
    },[opted_package])
    return (
        <div className="selectedpackage">
            <Card style={Available_Packages[opted_package].styling} key = {Available_Packages.id}>
                <Card.Header style={{ background: Available_Packages[opted_package].color }}></Card.Header>
                <div className="d-flex justify-content-center">
                    <ListGroup variant="flush">
                        <ListGroup.Item>{Available_Packages[opted_package].title}</ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">starts at</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="packagerate">Rs {fee_amount ? fee_amount : Available_Packages[opted_package].price}</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">/month</p>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item style = {{marginTop: props.isMobile ? "1rem" : ""}}>{Available_Packages[opted_package].heading}</ListGroup.Item>
                        <div className="package_specification">
                            {Available_Packages[opted_package].description.map(val => (
                                <ListGroup.Item>{val}</ListGroup.Item>
                            ))}
                        </div>
                    </ListGroup>
                </div>
            </Card>
            {/* <p className="parentlocation">
                <ChangeLocation />
            </p> */}
            {/* {result_type === "pricing" ? <p className="parentlocation">
                <ChangeLocation />
            </p> : ""} */}
        </div>
    )
}

export default SelectedPricePackage
