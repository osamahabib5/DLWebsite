import React, { useContext } from 'react'
import { Carousel, ListGroup } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { TutorsContext } from '../../../../Provider';
import Available_Packages from '../Available_Packages';
function PackageDetailsMobile(props) {
    const cookies = new Cookies();
    const { parent_country, setOptedPackage, lead_id, setSubscription, setResultType } = useContext(TutorsContext)
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
    // const setSelectedPackage = (index) => {
    //     if (lead_id != 0 ) {
    //         props.showfeecalculator();
    //         props.PricingwithLeadId();
    //         setOptedPackage(index)
    //     }
    //     else {
    //         props.showLeadsForm();
    //         setOptedPackage(index)
    //     }
    // }
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
        <div className="pricingpackagemobile">
            <Carousel>
                {parent_country === "Pakistan" ? Available_Packages.slice(0, 2).map((data, index) => (
                    <Carousel.Item key={index}>
                        <Carousel.Caption style={setPackagestyle(index)} onClick={() => {
                            setSelectedPackage(index)
                        }}>
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
                        </Carousel.Caption>

                    </Carousel.Item>
                )) : Available_Packages.slice(2, 4).map((data, index) => (
                    <Carousel.Item key={index} onClick={() => {
                        setSelectedPackage(index)
                    }}>
                        <Carousel.Caption style={setPackagestyle(index)} >
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

                        </Carousel.Caption>

                    </Carousel.Item>
                ))}
            </Carousel>

        </div>
    )
}

export default PackageDetailsMobile
