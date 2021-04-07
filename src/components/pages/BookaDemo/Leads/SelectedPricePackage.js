import React, { useContext, useEffect } from 'react'
import { Card, ListGroup } from "react-bootstrap";
import Cookies from 'universal-cookie';
import { TutorsContext } from '../../../../Provider';
import ChangeLocation from '../../../ChangeLocation/ChangeLocation';
import Available_Packages from '../Available_Packages';
import GoToTutorsPage from '../GoToTutorsPage';
function SelectedPricePackage(props) {
    const { opted_package, fee_amount, confirmpricing, result_type, parent_country, setOptedPackage, USDtoPKR } = useContext(TutorsContext);
    const cookies = new Cookies();
    useEffect(() => {
        if (result_type === "pricing") {
            if (parent_country === "Pakistan") {
                setOptedPackage(1);
            } else {
                setOptedPackage(3);
            }
        }
    }, [parent_country])
    return (
        <div className="selectedpackage">
            <Card style={Available_Packages[opted_package].styling} key={Available_Packages[opted_package].id}>
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
                                    <p className="packagerate">Rs { fee_amount > 0 && (opted_package === 1 || opted_package === 3) ? Math.round(parseInt(fee_amount) / 3) : fee_amount > 0 ? fee_amount : fee_amount === 0 && (opted_package === 1 || opted_package === 3) ? Math.round(parseInt(Available_Packages[opted_package].price) / 3) : Available_Packages[opted_package].price}</p>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className="startingat">/month</p>
                                </div>
                            </div>
                        </ListGroup.Item>
                        {opted_package === 3 || opted_package === 1 ? <ListGroup.Item style={{ marginTop: "-1rem" }}>
                            <p> (Rs.{fee_amount ? fee_amount : Available_Packages[opted_package].price} for 3 months)</p>
                        </ListGroup.Item> : ""}
                        {USDtoPKR > 0 && (opted_package === 2 || opted_package === 3)? <ListGroup.Item style={{ marginTop: "-1.5rem", justifyContent: "center" }}>
                            <p style={{ textAlign: "center" }}> (USD ${opted_package === 2 ?
                            Math.round(fee_amount > 0 ? parseInt(fee_amount) * USDtoPKR: parseInt(Available_Packages[opted_package].price) * USDtoPKR) :
                            Math.round(fee_amount > 0 ? parseInt(fee_amount)/3 * USDtoPKR:parseInt(Available_Packages[opted_package].price) / 3 * USDtoPKR)} /month)</p>
                        </ListGroup.Item> : ""}
                        <ListGroup.Item style={{ marginTop: props.isMobile ? "1rem" : opted_package === 3 || opted_package === 1 ? "-2rem" : "-1rem" }}>{Available_Packages[opted_package].heading}</ListGroup.Item>
                        <div className="package_specification">
                            {Available_Packages[opted_package].description.map(val => (
                                <ListGroup.Item>{val}</ListGroup.Item>
                            ))}
                        </div>
                    </ListGroup>
                </div>
            </Card>
            {result_type === "pricing" ? <p className="parentlocation">
                <ChangeLocation />
            </p> : ""}
            {confirmpricing && !props.showappointmentpage ? <div>
                <GoToTutorsPage showAppointmentPageTutor={props.showAppointmentPageTutor} />
            </div> : ""}
        </div>
    )
}

export default SelectedPricePackage
