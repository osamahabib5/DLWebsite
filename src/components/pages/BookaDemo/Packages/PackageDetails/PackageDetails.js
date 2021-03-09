import React,{useContext} from 'react'
import { CardDeck, Card, ListGroup, Button } from 'react-bootstrap';
import { TutorsContext } from '../../../../../Provider';
import Available_Packages from '../../Available_Packages';
function PackageDetails(props) {
    const{setOptedPackage} = useContext(TutorsContext);
    return (
        <div className="packagedetails">
            <CardDeck>
                <Card style={Available_Packages[0].styling} onClick={()=>{
                    props.hidepricingpackage();
                    setOptedPackage(1)
                }}>
                    <Card.Header style={{ background: Available_Packages[0].color }}></Card.Header>
                    <div className="d-flex justify-content-center">
                        <ListGroup variant="flush">
                            <ListGroup.Item>{Available_Packages[0].title}</ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 bd-highlight">
                                        <p className="startingat">starts at</p>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <p className="packagerate">Rs {Available_Packages[0].price}</p>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <p className="startingat">/month</p>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>{Available_Packages[0].heading}</ListGroup.Item>
                            <div className="package_specification">
                                {Available_Packages[0].description.map(val => (
                                    <ListGroup.Item>{val}</ListGroup.Item>
                                ))}
                            </div>
                            <ListGroup.Item>
                                <Button style={{ width: "200px", height: "48px" }} onClick = {props.showfeecalculator}>Customize</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Card>
                <Card style= {Available_Packages[1].styling} onClick={()=>{
                    props.hidepricingpackage();
                    setOptedPackage(2)
                }}>
                    <Card.Header style={{ background: Available_Packages[1].color }}></Card.Header>
                    <div className="d-flex justify-content-center">
                        <ListGroup variant="flush">
                            <ListGroup.Item>{Available_Packages[1].title}</ListGroup.Item><ListGroup.Item>
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 bd-highlight">
                                        <p className="startingat">starts at</p>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <p className="packagerate">Rs {Available_Packages[1].price}</p>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <p className="startingat">/month</p>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>{Available_Packages[1].heading}</ListGroup.Item>
                            <div className="package_specification">
                                {Available_Packages[1].description.map(val => (
                                    <ListGroup.Item>{val}</ListGroup.Item>
                                ))}
                            </div>
                            <ListGroup.Item >
                                <Button style={{ width: "200px", height: "48px" }} onClick = {props.showfeecalculator}>Customize</Button>
                            </ListGroup.Item>
                        </ListGroup>

                    </div>
                </Card>
            </CardDeck>

        </div>
    )
}

export default PackageDetails
