import React from 'react'
import PackageDetails from './PackageDetails/PackageDetails'
import ChangeLocation from "../../../ChangeLocation/ChangeLocation";
import PackageDetailsMobile from './PackageDetailsMobile';
function Packages(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column bd-highlight mb-3">
            
                <div className="p-2 bd-highlight"><p className="packageselection">These are Dot & Line standard  packages.</p></div>
                <div className="p-2 bd-highlight"><p className="packageselection">Please select any one of them to customize</p></div>
                {props.isMobile ? <div className="p-2 bd-highlight"><p className="swipepackage">(Swipe to see other options)</p></div> : ""}
                <div className="p-2 bd-highlight" style = {{marginTop: "1rem"}}><ChangeLocation /></div>
                <div className="p-2 bd-highlight" style={{ display: (props.isMobile ? "none" : '') }}>
                    <PackageDetails showLeadsForm={props.showLeadsForm} showfeecalculator={props.showfeecalculator} PricingwithLeadId = {props.PricingwithLeadId} />
                </div>
                <div className="p-2 bd-highlight" style={{ display: (props.isMobile ? "" : 'none'), marginLeft : props.isMobile ? "0.5rem" : "" ,
                marginTop : props.isMobile ? "-2rem" : ""}} >
                    <PackageDetailsMobile showLeadsForm={props.showLeadsForm} showfeecalculator={props.showfeecalculator} PricingwithLeadId = {props.PricingwithLeadId}/>
                </div>
            </div>
        </div>
    )
}

export default Packages
