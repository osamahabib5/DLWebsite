import React, { useContext, useEffect } from 'react'
import { CardDeck, Card, ListGroup, Button } from 'react-bootstrap';
import { TutorsContext } from '../../../../../Provider';
import Available_Packages from '../../Available_Packages';
import { ClipLoader } from 'react-spinners';
function PackageDetails(props) {
    const { setOptedPackage, parent_country, loading, startLoading } = useContext(TutorsContext);
    // useEffect(()=>{
    //     // window.location.reload()
    // },[])
    return (
        <div className="packagedetails">
            {loading && !parent_country ? <div className="d-flex justify-content-center">
                <ClipLoader size={80} color="#00ABBD" />
            </div> : parent_country === "Pakistan" ? <CardDeck>
                <Card style={Available_Packages[0].styling} onClick={() => {
                    props.showLeadsForm();
                    setOptedPackage(0)
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
                                <Button style={{ width: "200px", height: "48px" }} onClick={props.showfeecalculator}>Customize</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Card>
                <Card style={Available_Packages[1].styling} onClick={() => {
                    props.showLeadsForm();
                    setOptedPackage(1)
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
                                <Button style={{ width: "200px", height: "48px" }} onClick={props.showfeecalculator}>Customize</Button>
                            </ListGroup.Item>
                        </ListGroup>

                    </div>
                </Card>
            </CardDeck> : <CardDeck>
                <Card style={Available_Packages[2].styling} onClick={() => {
                    props.showLeadsForm();
                    setOptedPackage(2)
                }}>
                    <Card.Header style={{ background: Available_Packages[2].color }}></Card.Header>
                    <div className="d-flex justify-content-center">
                        <ListGroup variant="flush">
                            <ListGroup.Item>{Available_Packages[2].title}</ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 bd-highlight">
                                        <p className="startingat">starts at</p>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <p className="packagerate">Rs {Available_Packages[2].price}</p>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <p className="startingat">/month</p>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>{Available_Packages[2].heading}</ListGroup.Item>
                            <div className="package_specification">
                                {Available_Packages[2].description.map(val => (
                                    <ListGroup.Item>{val}</ListGroup.Item>
                                ))}
                            </div>
                            <ListGroup.Item>
                                <Button style={{ width: "200px", height: "48px" }} onClick={props.showfeecalculator}>Customize</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Card>
                <Card style={Available_Packages[3].styling} onClick={() => {
                    props.showLeadsForm();
                    setOptedPackage(3)
                }}>
                    <Card.Header style={{ background: Available_Packages[3].color }}></Card.Header>
                    <div className="d-flex justify-content-center">
                        <ListGroup variant="flush">
                            <ListGroup.Item>{Available_Packages[3].title}</ListGroup.Item><ListGroup.Item>
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 bd-highlight">
                                        <p className="startingat">starts at</p>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <p className="packagerate">Rs {Available_Packages[3].price}</p>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <p className="startingat">/month</p>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>{Available_Packages[3].heading}</ListGroup.Item>
                            <div className="package_specification">
                                {Available_Packages[3].description.map(val => (
                                    <ListGroup.Item>{val}</ListGroup.Item>
                                ))}
                            </div>
                            <ListGroup.Item >
                                <Button style={{ width: "200px", height: "48px" }} onClick={props.showfeecalculator}>Customize</Button>
                            </ListGroup.Item>
                        </ListGroup>

                    </div>
                </Card>
            </CardDeck>}
        </div>
    )
}

export default PackageDetails
