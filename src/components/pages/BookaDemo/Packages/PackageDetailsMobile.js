import React, { useContext } from 'react'
import { Carousel, ListGroup } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { TutorsContext } from '../../../../Provider';
import Available_Packages from '../Available_Packages';
function PackageDetailsMobile(props) {
    const cookies = new Cookies();
    const { parent_country, setOptedPackage, lead_id, setSubscription, setResultType, setDollarToPKR, USDtoPKR } = useContext(TutorsContext)
    const firstpackage = {
        backgroundColor: "rgb(255, 248, 248)",
        border: "2px solid rgb(252, 207, 203)",
        boxSizing: "border-box",
        borderRadius: "7px 7px 0px 0px",
        height: "590px"
    }
    const secondpackage = {
        backgroundColor: "rgb(248, 250, 255)",
        border: "2px solid rgb(94, 105, 129)",
        boxSizing: "border-box",
        borderRadius: "7px 7px 0px 0px",
        height: "590px"
    }
    const fetchPricing = async () => {
        try {
            await fetch('https://free.currconv.com/api/v7/convert?apiKey=8555114407d4fcd7f823&q=PKR_USD')
                .then(function (response) {
                    return response.json()
                })
                .catch(function (error) {
                    console.log("Error: " + error);
                }).then(data => {
                    setDollarToPKR(JSON.stringify(data.results.PKR_USD.val))
                })
        }
        catch (error) {
            console.log("Error while converting from USD to PKR! " + error)
            setDollarToPKR(0)
        }
    }
    const setPackagestyle = (index) => {
        if (index == 0) {
            return firstpackage;
        }
        return secondpackage
    }
    const SetPricingPackage = (index) => {
        if (index == 0 || index == 2) {
            setSubscription("1_month")
        }
        else {
            setSubscription("3_month");
        }
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
    return (
        <div className="pricingpackagemobile" style={{ padding: "1rem", marginTop : props.isMobile ? "-2rem" : "" }}>
            <Carousel>
                {parent_country === "Pakistan" ? Available_Packages.slice(0, 2).map((data, index) => (
                    <Carousel.Item key={data.id}>
                        <Carousel.Caption key={data.id} style={setPackagestyle(index)} onClick={() => {
                            setSelectedPackage(index)
                        }}>
                            <p className="packagemobileheading">{data.title}</p>
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">starts at</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="packagerate" style={{ whiteSpace: "nowrap" }}>Rs {index === 1 ? Math.round(parseInt(data.price) / 3) : data.price}</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">/month</p>
                                </div>
                            </div>
                            {index === 1 ? <ListGroup.Item key={data.id}>
                                <p> (Rs. {data.price} for 3 months)</p>
                            </ListGroup.Item> : ""}
                            <p className="packagemobiletagline" style={{ marginTop: index === 1 ?"-1rem" : "" }}>{data.heading}</p>
                            <ListGroup key={data.id}>
                                {data.description.map(val => (
                                    <ListGroup.Item>{val}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Carousel.Caption>

                    </Carousel.Item>
                )) : Available_Packages.slice(2, 4).map((data, index) => (
                    <Carousel.Item key={data.id}onClick={() => {
                        setSelectedPackage(index)
                    }}>
                        <Carousel.Caption key={data.id} style={setPackagestyle(index)} >
                            <p className="packagemobileheading">{data.title}</p>
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    <p className="startingat" style={{ textAlign: "center" }}>starts at</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="packagerate" style={{ whiteSpace: "nowrap" }}>Rs {index === 1 ? Math.round(parseInt(data.price) / 3) : data.price}</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">/month</p>
                                </div>
                            </div>
                            {index === 1 ? <ListGroup.Item key={data.id}>
                                <p style = {{whiteSpace: "nowrap"}}> Rs. {data.price} for 3 months</p>
                            </ListGroup.Item> : ""}
                            {USDtoPKR > 0 ? <ListGroup.Item key={data.id} style={{ marginTop: index === 1 ? "-2.5rem" :"-0.5rem", justifyContent: "center" }}>
                                <p style={{ textAlign: "center", whiteSpace: "nowrap" }}> (USD ${Math.round(parseInt(data.price) / 3 * USDtoPKR)} /month)</p>
                            </ListGroup.Item> : ""}
                            <p className="packagemobiletagline" style={{ marginTop: "-1rem" }}>{data.heading}</p>
                            <ListGroup key={data.id}>
                                {data.description.map(val => (
                                    <ListGroup.Item>{val}</ListGroup.Item>
                                ))}
                            </ListGroup>

                        </Carousel.Caption>

                    </Carousel.Item>
                ))}
            </Carousel>

        </div>
    )
}

export default PackageDetailsMobile
