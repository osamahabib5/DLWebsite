import React from 'react'

function SignUpButtonRamazanProgram(props) {
    return (
        <div className="d-flex justify-content-center">
            <button className="btn btn-lg button-cta button-red">
                {props.buttontext}
            </button>
        </div>
    )
}

export default SignUpButtonRamazanProgram