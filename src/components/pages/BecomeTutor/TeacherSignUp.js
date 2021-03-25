import React, { useState } from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import axios from 'axios'
import baseUrl from '../../../baseUrl/baseUrl'
import { BeatLoader } from 'react-spinners';
function TeacherSignUp(props) {
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
    let [passwords, setpasswords] = useState({ currentPassword: "", currentRePassword: "" })
    let { currentRePassword, currentPassword } = passwords;
    let [teachersignupdetails, fillteachersignupdetails] = useState({ email: "", password: "", repassword: "", phone: "" });
    let [loading, setLoading] = useState(false);
    let [confirmationmessage, setconfirmationmessage] = useState(null);
    let { phone, password, repassword, email } = teachersignupdetails;
    let [message, setmessage] = useState(null);
    let [passwordmessage, setpasswordmessage] = useState(null)
    let [classname, setclassname] = useState("");
    let [reenterclassname, setreenterclassname] = useState("");
    let registerteacherurl = baseUrl + "/api/teacher/signup"
    const handleOnChange = (e) => {
        fillteachersignupdetails({
            ...teachersignupdetails,
            [e.target.name]: e.target.value
        })
    }
    const opensweetalertdanger = (alerttext) => {
        Swal.fire({
            title: 'Teacher Sign Up',
            text: alerttext,
            type: 'warning',
        })
    }
    function clearForm() {
        fillteachersignupdetails({
            ...teachersignupdetails,
            email: "",
            phone: ""
        })
        setpasswords({
            ...passwords,
            currentPassword: "",
            currentRePassword: "",
        })
        setpasswordmessage(null);
        setmessage(null);
    }
    const validateemail = (inputtxt) => {
        var patternemail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!patternemail.test(inputtxt)) {
            return false;
        }
        return true
    }
    const validatepassword = (verifypassword) => {
        setpasswords({
            ...passwords,
            currentPassword: verifypassword
        })
        if (verifypassword.length === 0) {
            setpasswordmessage("No password entered!")
        }
        var patt = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
        var res = patt.test(verifypassword);
        if (res) {
            setclassname("text-success");
            setpasswordmessage("Password Criteria met!")
            fillteachersignupdetails({
                ...teachersignupdetails,
                password: verifypassword
            })
            return true;
        }
        setclassname("text-danger");
        setpasswordmessage("Please enter password based on the above criteria!");
        return false;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log("Teachers SignUp: " + JSON.stringify(teachersignupdetails));
        if (!email || !password || !repassword || !phone) {
            setLoading(false);
            opensweetalertdanger("Please fill all the values");
        }
        else if (!validatepassword(password)) {
            setLoading(false);
            opensweetalertdanger("Please enter a valid password!");
        }
        else if (password !== repassword) {
            setLoading(false);
            opensweetalertdanger("Passwords don't match!");
        }
        else if (!validateemail(email)) {
            setLoading(false);
            opensweetalertdanger("Please enter a valid email");
        } else if (!isValidPhoneNumber(phone)) {
            setLoading(false);
            opensweetalertdanger("Please enter a valid phone number!");
        }
        else {
            await axios.post(registerteacherurl, teachersignupdetails).then(response => {
                setLoading(false);
                setconfirmationmessage("You signed up successfully!")
                clearForm();
            }).catch(error => {
                setLoading(false);
                if (error.response.status == 400) {
                    setconfirmationmessage("You already have an account with this email!")
                }
            })
        }
    }
    return (
        <Container style={{ textAlign: props.isMobile ? "center" : "" }}>
            <Row>
                <Col>
                    <Form style={{ marginTop: "1rem" }}>
                        <Form.Row>
                            <p className="text-info" style={{ fontSize: "13px", marginBottom: "-0.5rem" }}>Password should be at least 8 characters long, with one uppercase, one lowercase letter and one number</p>
                        </Form.Row>
                        <Form.Row style={{ marginTop: "2rem" }}>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Enter Email" style={{ width: props.isMobile ? "80%" : "54%" }} name="email" value={email} onChange={handleOnChange}

                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row style={{ marginTop: props.isMobile ? "0rem" : "1rem" }}>
                            <PhoneInput
                                placeholder="+92 --- -------"
                                value={phone}
                                onChange={(e) => fillteachersignupdetails({
                                    ...teachersignupdetails,
                                    phone: e
                                })}
                                style={{ margin: props.isMobile ? "auto" : "", width: props.isMobile ? "75%" : "54%", height: "40px" }}
                            />
                        </Form.Row>
                        <Form.Row style={{ marginTop: props.isMobile ? "1rem" : "1.5rem" }}>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="password" placeholder="Password" value={currentPassword} style={{ width: props.isMobile ? "80%" : "54%", backgroundImage: <FontAwesomeIcon icon={faEye} /> }} name="currentPassword" onChange={(e) => {
                                    validatepassword(e.target.value)
                                }} />
                                <div style={{ width: "90%" }}>
                                    <p className={classname ? classname : "text-danger"} style={{ fontSize: "13px" }}>{passwordmessage ? passwordmessage : ""}</p>
                                </div>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row >
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="password" placeholder="Re-Enter Password" value={currentRePassword} style={{ width: props.isMobile ? "80%" : "54%" }} name="currentRePassword" onChange={(e) => {
                                    setpasswords({
                                        ...passwords,
                                        currentRePassword: e.target.value
                                    })
                                    if (e.target.value) {
                                        if (password.length > 0 && e.target.value === password) {
                                            setmessage("Passwords matched")
                                            setreenterclassname("text-success")
                                            fillteachersignupdetails({
                                                ...teachersignupdetails,
                                                repassword: e.target.value
                                            })
                                        } else {
                                            setmessage("Passwords don't match")
                                            setreenterclassname("text-danger")
                                        }
                                    }
                                }}
                                />
                                <div style={{ width: "70%" }}>
                                    <p className={reenterclassname ? reenterclassname : "text-danger"} style={{ fontSize: "13px" }}>{message}</p>
                                </div>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row style = {{display: props.isMobile ?"block" : ""}}>
                            <Form.Group as={Col} style={{ marginTop: "1rem" }}>
                                <button className="btn button-cta button-blue" type="submit" onClick={handleSubmit}>
                                    Register
                                    </button>
                            </Form.Group>
                            <Form.Group as={Col} style={{ marginTop: "1rem" }}>
                                {loading ? <BeatLoader color="#00ABBD" loading={loading} size={10} /> :
                                    <p className="confirmationmessage">{confirmationmessage}</p>
                                }
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
                <Col style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p style={registerapplication}>Register to start your application </p>
                    <p style={checkEmailStyling}>Check your email or SMS after registration to activate your account!</p>
                </Col>
            </Row>
        </Container>
    )
}

export default TeacherSignUp
