import React, { useContext, useEffect } from 'react'
import { CardDeck, Card, ListGroup, Button } from 'react-bootstrap';
import { TutorsContext } from '../../../../../Provider';
import Available_Packages from '../../Available_Packages';
import { ClipLoader } from 'react-spinners';
import Cookies from 'universal-cookie';
import { parse } from '@fortawesome/fontawesome-svg-core';
function PackageDetails(props) {
    const cookies = new Cookies();
    const { setOptedPackage, parent_country, loading, setResultType, setSubscription, setDollarToPKR, USDtoPKR } = useContext(TutorsContext);
    const SetPricingPackage = (index) => {
        if (index == 0 || index == 2) {
            setSubscription("1_month")
        }
        else {
            setSubscription("3_month");
        }
    }

    const fetchPricing = async () => {
        await fetch('https://free.currconv.com/api/v7/convert?apiKey=8555114407d4fcd7f823&q=PKR_USD')
            .then(function (response) {
                return response.json()
            })
            .catch(function (error) {
                console.log("Error: " + error);
            }).then(data => {
                console.log("Pricing: " + JSON.stringify(data.results.PKR_USD.val));
                setDollarToPKR(JSON.stringify(data.results.PKR_USD.val))
            })
    }
    const setSelectedPackage = (index) => {
        setResultType("teachers")
        if (cookies.get("leadid")) {
            props.showfeecalculator();
            props.PricingwithLeadId();
            setOptedPackage(index)
            SetPricingPackage(index);
        }
        else {
            props.showLeadsForm();
            setOptedPackage(index)
            SetPricingPackage(index);
        }
    }
    useEffect(() => {
        fetchPricing();
    }, [])
    return (
        <div className="packagedetails">
            {loading && !parent_country ? <div className="d-flex justify-content-center">
                <ClipLoader size={80} color="#00ABBD" />
            </div> : parent_country === "Pakistan" ? <CardDeck key={Available_Packages.id}>
                <Card style={Available_Packages[0].styling} key={Available_Packages.id} onClick={() => {
                    setSelectedPackage(0)
                }}>
                    <Card.Header key={Available_Packages.id} style={{ background: Available_Packages[0].color }}></Card.Header>
                    <div className="d-flex justify-content-center" >
                        <ListGroup variant="flush" >
                            <ListGroup.Item key={Available_Packages.id}>{Available_Packages[0].title}</ListGroup.Item>
                            <ListGroup.Item style = {{marginTop: "-1rem"}}>
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
                            <ListGroup.Item key={Available_Packages.id}>{Available_Packages[0].heading}</ListGroup.Item>
                            <div className="package_specification">
                                {Available_Packages[0].description.map(val => (
                                    <ListGroup.Item>{val}</ListGroup.Item>
                                ))}
                            </div>
                        </ListGroup>
                    </div>
                </Card>
                <Card style={Available_Packages[1].styling} key={Available_Packages.id} onClick={() => {
                    setSelectedPackage(1)
                }}>
                    <Card.Header key={Available_Packages.id} style={{ background: Available_Packages[1].color }}></Card.Header>
                    <div className="d-flex justify-content-center">
                        <ListGroup variant="flush">
                            <ListGroup.Item key={Available_Packages.id}>{Available_Packages[1].title}</ListGroup.Item>
                            <ListGroup.Item style = {{marginTop: "-1rem"}}>
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 bd-highlight">
                                        <p className="startingat">starts at</p>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <p className="packagerate">Rs {Math.round(parseInt(Available_Packages[1].price) / 3)}</p>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <p className="startingat">/month</p>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ marginTop: "-1rem" }}>
                                <p> (Rs. {Available_Packages[1].price} for 3 months)</p>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ marginTop: "-2rem" }} key={Available_Packages.id}>{Available_Packages[1].heading}</ListGroup.Item>
                            <div className="package_specification">
                                {Available_Packages[1].description.map((val, index) => (
                                    <ListGroup.Item key={index}>{val}</ListGroup.Item>
                                ))}
                            </div>
                        </ListGroup>

                    </div>
                </Card>
            </CardDeck> : <CardDeck key={Available_Packages.id}>
                <Card style={Available_Packages[2].styling} key={Available_Packages.id} onClick={() => {
                    setSelectedPackage(2)
                }}>
                    <Card.Header style={{ background: Available_Packages[2].color }}></Card.Header>
                    <div className="d-flex justify-content-center">
                        <ListGroup variant="flush">
                            <ListGroup.Item>{Available_Packages[2].title}</ListGroup.Item>
                            <ListGroup.Item style = {{marginTop: "-1rem"}}>
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
                            <ListGroup.Item style={{ marginTop: "-1rem" }}>
                                <p> ($ {Math.round(parseInt(Available_Packages[2].price) * USDtoPKR)} /month)</p>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ marginTop: "-2rem" }}>{Available_Packages[2].heading}</ListGroup.Item>
                            <div className="package_specification">
                                {Available_Packages[2].description.map((val, index) => (
                                    <ListGroup.Item key={index}>{val}</ListGroup.Item>
                                ))}
                            </div>
                        </ListGroup>
                    </div>
                </Card>
                <Card style={Available_Packages[3].styling} key={Available_Packages.id} onClick={() => {
                    setSelectedPackage(3)
                }}>
                    <Card.Header style={{ background: Available_Packages[3].color }}></Card.Header>
                    <div className="d-flex justify-content-center">
                        <ListGroup variant="flush">
                            <ListGroup.Item>{Available_Packages[3].title}</ListGroup.Item><ListGroup.Item style = {{marginTop: "-1rem"}}>
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 bd-highlight">
                                        <p className="startingat">starts at</p>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <p className="packagerate">Rs {Math.round(parseInt(Available_Packages[3].price) / 3)}</p>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <p className="startingat">/month</p>
                                    </div>
                                </div>
                            </ListGroup.Item>
                             <ListGroup.Item style={{ marginTop: "-1rem" }}>
                                <p> (Rs. {Available_Packages[3].price} for 3 months)</p>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ marginTop: "-2rem" }}>
                            <p> ($ {Math.round(parseInt(Available_Packages[3].price)/3 * USDtoPKR)} /month)</p>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ marginTop: "-2rem" }}>{Available_Packages[3].heading}</ListGroup.Item>
                            <div className="package_specification">
                                {Available_Packages[3].description.map((val, index) => (
                                    <ListGroup.Item key={index}>{val}</ListGroup.Item>
                                ))}
                            </div>
                        </ListGroup>

                    </div>
                </Card>
            </CardDeck>}
        </div>
    )
}

export default PackageDetails
