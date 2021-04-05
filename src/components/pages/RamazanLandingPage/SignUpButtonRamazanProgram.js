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
                <p className="programdetails" > Program Fees: PKR 6500 (All Inclusive)</p >
            </div>
        </div>
    )
}

export default SignUpButtonRamazanProgram
