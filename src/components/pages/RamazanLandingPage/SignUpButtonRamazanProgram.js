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
                <div style = {{display: "flex", flexDirection: "column"}}>
                    <p className="programdetails" > Ramadan Pack: PKR 4500 (USD $30 - All Inclusive)</p >
                    <p className="programdetails" style = {{marginTop: "-1rem"}}> Program Fees: PKR 6500 (USD $43 - All Inclusive)</p >
                </div>
            </div>
        </div>
    )
}

export default SignUpButtonRamazanProgram
