import React, { useContext } from 'react'
import { TutorsContext } from '../../../../Provider'

function DemoTitle() {
    const { result_type } = useContext(TutorsContext);
    return (
        <div className="d-flex flex-column bd-highlight mb-3">
            {result_type === "teachers" ? <div className="p-2 bd-highlight"><p className="ourpricing">
                OUR PRICING
                </p></div> : ""}
            {/* <div className="p-2 bd-highlight">Schedule a Demo</div> */}
        </div>
    )
}

export default DemoTitle
