import React, { useState } from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
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
    let [message, setmessage] = useState("");
    let [classname, setclassname] = useState("");
    const handleOnChange = (e) => {
        fillteachersignupdetails({
            ...teachersignupdetails,
            [e.target.name]: e.target.value
        })
    }
    const validateemail = (inputtxt) => {
        var patternemail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!patternemail.test(inputtxt)) {
            return false;
        }
        return true
    }
    const validatepassword = (password)=>{
        var patt = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
        var res = patt.test(password);    
        // var validpassword = reg.test(password);
        console.log("Res: "+ res)
        if (res){
            console.log("Valid Password! ")
        }
        else{
            console.log("Invalid Password!")
        }
        // console.log(test)
    }
    const [teachersignupdetails, fillteachersignupdetails] = useState({  email: "", password: "" , phone: "" });
    const [value, setValue] = useState()
    return (
        <Container>
            <Row>
                <Col>
                    <Form style={{ marginTop: "1rem" }}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail" >
                                <Form.Control type="email" placeholder="Enter Email" style = {{width: "54%"}} name = "email" onChange = {handleOnChange}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="password" placeholder="Password" style = {{width: "54%"}} name = "password" onChange = {(e)=>{
                                    validatepassword(e.target.value)
                                }}/>
                                <p className = "text-info">Password should be at least 8 characters long, with at least one uppercase, one lowercase letter and one number</p>
                            </Form.Group> 
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="password" placeholder="Re-Enter Password" style = {{width: "54%"}} name = "reenter-password"/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <PhoneInput
                                placeholder="+92 --- -------"
                                value={value}
                                onChange={setValue}
                            // error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                            />
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
                </Col>
            </Row>
        </Container>
    )
}

export default TeacherSignUp
