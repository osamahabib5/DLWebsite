import React, { useState } from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
function TeacherSignUp() {
    const registerapplication = {
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "28px",
        lineHeight: "38px",
        display: "flex",
        alignItems: "center",
        color: "#363E50"
    }
    const checkEmailStyling = {
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px",
        display: "flex",
        alignItems: "center",
        color: "#000000"
    }
    // font-family: Avenir;
    // font-style: normal;
    // font-weight: normal;
    // font-size: 16px;
    // line-height: 32px;
    // background-repeat: no-repeat;
    // background-position: left;
    // background-position: 20px;
    // text-indent: 40px!important;
    // background-image: url(./Image//Shape.png)!important;
    // /* identical to box height, or 178% */
    // color: #000000;
    // margin-top: -0.5rem;
    // width: 100%;
    // border-color: hsl(0, 0%, 80%);
    // border-radius: 4px;
    // border-style: solid;
    // border-width: 1px;

    const passwordstyling = {
        backgroundImage: "url(./tutoricon.png)"
    }

    let [message, setmessage] = useState("Passwords don't match");
    let [passwordmessage, setpasswordmessage] = useState(null)
    let [alerttext, setalerttext] = useState("");
    let [classname, setclassname] = useState("");
    const handleOnChange = (e) => {
        fillteachersignupdetails({
            ...teachersignupdetails,
            [e.target.name]: e.target.value
        })
    }
    const opensweetalertdanger = () => {
        Swal.fire({
            title: 'Create Lead',
            text: alerttext,
            type: 'warning',


        })
    }
    const validateemail = (inputtxt) => {
        var patternemail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!patternemail.test(inputtxt)) {
            return false;
        }
        return true
    }
    const validatepassword = (verifypassword) => {
        if (!verifypassword) {
            setpasswordmessage(null)
        }
        var patt = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
        var res = patt.test(verifypassword);
        if (res) {
            setclassname("text-success");
            setpasswordmessage("Password verification successful!")
            fillteachersignupdetails({
                ...teachersignupdetails,
                password: verifypassword
            })
        }
        else {
            setclassname("text-danger");
            setpasswordmessage("Please enter a valid password!");
        }
    }
    const [teachersignupdetails, fillteachersignupdetails] = useState({ email: "", password: "", phone: "" });
    const { phone, password } = teachersignupdetails;
    const [value, setValue] = useState()
    return (
        <Container>
            <Row>
                <Col>
                    <Form style={{ marginTop: "1rem" }}>
                        <Form.Row>
                            <p className="text-info" style={{ fontSize: "13px", marginBottom: "-0.5rem" }}>Password should be at least 8 characters long, with one uppercase, one lowercase letter and one number</p>
                        </Form.Row>
                        <Form.Row style={{ marginTop: "2rem" }}>
                            <Form.Group as={Col} controlId="formGridEmail" >
                                <Form.Control type="email" placeholder="Enter Email" style={{ width: "54%" }} name="email" onChange={handleOnChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row style={{ marginTop: "1rem" }}>
                            <PhoneInput
                                placeholder="+92 --- -------"
                                value={phone}
                                onChange={(e) => fillteachersignupdetails({
                                    ...teachersignupdetails,
                                    phone: e
                                })}
                            />
                        </Form.Row>
                        <Form.Row style={{ marginTop: "1.5rem" }}>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="password" placeholder="Password" style={{ width: "54%", backgroundImage: <FontAwesomeIcon icon = {faEye}/> }} name="password" onChange={(e) => {
                                    validatepassword(e.target.value)
                                }} />
                                <div style={{ width: "90%" }}>
                                    <p className={classname ? classname : "text-danger"} style={{ fontSize: "13px" }}>{passwordmessage ? passwordmessage : ""}</p>
                                </div>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row >
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="password" placeholder="Re-Enter Password" style={{ width: "54%" }} name="reenter-password" onChange={(e) => {
                                    if (password.length > 0 && e.target.value === password) {
                                        setmessage("Passwords matched")
                                        setclassname("text-success")
                                    } else {
                                        setmessage("Passwords don't match")
                                        setclassname("text-danger")
                                    }
                                }}
                                />
                                <div style={{ width: "70%" }}>
                                    <p className={classname ? classname : "text-danger"} style={{ fontSize: "13px" }}>{message}</p>
                                </div>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} style={{ marginTop: "1rem" }}>
                                <button className="btn button-cta button-blue" type="submit">
                                    Register
                            </button>
                            </Form.Group>
                            <Form.Group as={Col} style={{ marginTop: "1rem" }}>
                                <p>Confirmation message text. (Appears only when User clicks/taps on ‘Register’ CTA)</p>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
                <Col>
                    <p style={registerapplication}>Register to start your application </p>
                    <p style={checkEmailStyling}>Check your email or SMS after registration to activate your account!</p>
                    {/* <div className="d-flex align-items-center">

                    </div> */}
                </Col>
            </Row>
        </Container>
    )
}

export default TeacherSignUp
