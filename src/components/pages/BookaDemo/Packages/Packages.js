import React from 'react'
import PackageDetails from './PackageDetails/PackageDetails'
import ChangeLocation from "../../../ChangeLocation/ChangeLocation";
function Packages(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column bd-highlight mb-3">
                <div className="p-2 bd-highlight"><ChangeLocation /></div>
                <div className="p-2 bd-highlight"><p className = "packageselection">First, select a package to customize</p></div>
                <div className="p-2 bd-highlight">
                    <PackageDetails hidepricingpackage = {props.hidepricingpackage}/>
                </div>
            </div>
        </div>
    )
}

export default Packages
