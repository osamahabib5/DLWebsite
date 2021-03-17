import React, { useState } from 'react'
import { Form} from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import axios from "axios";
import baseUrl from '../../../../../../../baseUrl/baseUrl';
import ReviewForm from '../ReviewForm/ReviewForm';
import { BeatLoader } from 'react-spinners';
import { css } from "@emotion/core";
function CheckParent(props) {
    const [parent, checkparent] = useState(false);
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#00ABBD");
    let [message, setmessage] = useState("");
    let [classname, setclassname] = useState("");
    const checknumber = (number) => {
        if (number.startsWith("92")) {
            return number.replace("92", "0").substring(1, number.length);
        } else if (number.startsWith("0")) {
            return number;
        }
        else {
            return number.substring(1, number.length);
        }
    }
    const [parent_id, setparentid] = useState("");
    const [email, setemail] = useState("");
    const [value, setValue] = useState();
    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        if (!email && !value) {
            setclassname("text-danger");
            setmessage("Please fill at least one of the values")
            setLoading(false)
        }
        else {
            axios.post(baseUrl + "/api/checkParent", {
                email: !email ? "" : email,
                phone: !value ? "" : checknumber(value)
            })
                .then(function (response) {
                    // alert("Form Response: " + JSON.stringify(response.data.data.parent_id));
                    setparentid(JSON.stringify(response.data.data.parent_id));
                    setLoading(false);
                    setclassname("text-success");
                    setmessage("Parent Verification Successful!");
                    setTimeout(() => checkparent(true), 1000);
                })
                .catch(function (error) {
                    setLoading(false);
                    setclassname("text-danger");
                    if (value && !email) {
                        setmessage("Please enter Dot&Line Registered Number")
                    } else if (email && !value) {
                        setmessage("This is not a valid Dot&Line email!")
                    } else if (email && value) {
                        setmessage("Please enter valid credentials!")
                    };
                }).then(function () {
                    setValue();
                    setemail("");
                });
        }
    }
    return (
        <div className="checkingparent">
            {parent ? <ReviewForm parent_id={parent_id} handleClose={props.handleClose} /> : <Form bsPrefix="reviewform">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Are you a Dot & Line Registered Parent? Please enter your email or phone number!</Form.Label>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" style={{ marginLeft: "2rem", width: "91%" }}>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => setemail(e.target.value)} />

                </Form.Group>
                <h4 style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}>OR</h4>
                <Form.Group controlId="formBasicEmail">
                    <PhoneInput
                        placeholder="Enter phone number" value={value}
                        onChange={setValue} />
                </Form.Group>
                <div className="d-flex justify-content-center">
                    {loading ? <BeatLoader color={color} loading={loading} size={10} /> :
                        <p className={classname}>{message}</p>
                    }
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn button-cta button-blue" type="submit" onClick={handleSubmit}>
                        Continue
            </button>
                </div>
            </Form>}
        </div>
    )
}

export default CheckParent
