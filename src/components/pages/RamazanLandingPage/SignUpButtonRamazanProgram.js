import React from 'react'

function SignUpButtonRamazanProgram(props) {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-lg button-cta button-red" onClick={props.scrolltoRegistrationForm}>
                    {props.buttontext}
                </button>
            </div>
            <div className="d-flex justify-content-center">
                <div style = {{display: "flex", flexDirection: "column",marginTop: "1.5rem"}}>
                    <p className="programdetails" style = {{textAlign : props.isMobile ? "left" : ""}}> <span style ={{fontWeight : "normal", textAlign : props.isMobile ? "left" : "", paddingInline : "1rem"}} >Ramadan Digital Kit (Videos, Parent Guide, Inspiring Craft Printables) :  </span>  PKR 4000 (USD $27 - All Inclusive)
                    </p >
                    {/* <p className="programdetails" style = {{marginTop: "-1rem"}}> Live streamed Classes (Digital Kit Included): PKR 6500 (USD $43 - All Inclusive)</p > */}
                    <p className="programdetails" style = {{marginTop: "-1rem", margin: "auto", textAlign : props.isMobile ? "left" : ""}}> <span style ={{fontWeight : "normal",textAlign : props.isMobile ? "left" : ""
                    , paddingInline : "1rem"}} >Full Program Fees (Digital Kit Included): </span> PKR 6500 (USD $43 - All Inclusive)</p >
                </div>
            </div>
        </div>
    )
}

export default SignUpButtonRamazanProgram
