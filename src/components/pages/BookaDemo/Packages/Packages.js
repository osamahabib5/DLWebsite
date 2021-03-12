import React,{useContext} from 'react'
import PackageDetails from './PackageDetails/PackageDetails'
import ChangeLocation from "../../../ChangeLocation/ChangeLocation";
import PackageDetailsMobile from './PackageDetailsMobile';
function Packages(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column bd-highlight mb-3">
                <div className="p-2 bd-highlight"><ChangeLocation /></div>
                <div className="p-2 bd-highlight"><p className="packageselection">First, select a package to customize</p></div>
                <div className="p-2 bd-highlight" style={{ display: (props.isMobile ? "none" : '') }}>
                    <PackageDetails showLeadsForm={props.showLeadsForm} showfeecalculator={props.showfeecalculator} PricingwithLeadId = {props.PricingwithLeadId} />
                </div>
                <div className="p-2 bd-highlight" style={{ display: (props.isMobile ? "" : 'none') }} >
                    <PackageDetailsMobile showLeadsForm={props.showLeadsForm}/>
                </div>
            </div>
        </div>
    )
}

export default Packages
