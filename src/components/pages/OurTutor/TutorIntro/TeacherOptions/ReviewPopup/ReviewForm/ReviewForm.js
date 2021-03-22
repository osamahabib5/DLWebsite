import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import { useParams } from "react-router-dom";
import './ReviewForm.css'
import baseUrl from '../../../../../../../baseUrl/baseUrl';
function ReviewForm(props) {
    const [rating, setRating] = useState(0);
    const [value, setValue] = useState()
    let { id } = useParams();
    const url = baseUrl + '/api/teacher/review/' + id
    const [message, setmessage] = useState("");
    const [form, setform] = useState({ name: '', review: '', rating: 0, id: parseInt(id), parent_id: props.parent_id })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value,
            rating: rating,
        })
    }
    const validate = () => {
        let err = {};
        if (!form.name) {
            err.name = "Please fill name"
        }
        else if (!form.review) {
            err.message = "Please fill review"
        }
        return err;
    }
    const showError = (errObject) => {
        let errMsg = '';
        for (let err in errObject) {
            errMsg += `${errObject[err]}` + ' '
        }
        alert(`${errMsg}`);
    }
    const postDetails = async (formdata) => {
        axios({
            method: 'post',
            url: url,
            data: formdata
        })
            .then(function (response) {

            })
            .catch(function (error) {
                console.log("There is an error: " + error);
            });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length === 0) {
            setIsSubmitting(true);
            await postDetails(form);
            setform({ name: '', review: '', rating: 0, id: 0 });
            props.handleClose();
        }
        else {
            showError(errs);
        }
    }
    useEffect(() => {


    }, [])
    return (
        <Form bsPrefix="reviewform">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" name="name" onChange={handleChange} style={{ marginLeft: "2rem", width: "91%" }} />
            </Form.Group>
            <Form.Row>
                <Col>
                    <Form.Label>Rating</Form.Label>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Col style={{ marginLeft: "1.5rem", marginTop: "-1rem", marginBottom: "1rem" }}>
                        <StarRatings
                            rating={rating}
                            name='rating'
                            starRatedColor="#00ABBD"
                            starHoverColor="#00ABBD"
                            changeRating={(newRating, name) => {
                                setRating(newRating)
                            }}
                            numberOfStars={5}
                            starDimension='20px'
                            starSpacing='0px'
                        />
                    </Col></Col>
            </Form.Row>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Review</Form.Label>
                <Form.Control as="textarea" style = {{marginLeft: "2rem", width: "91%"}} placeholder="Please leave your reviews" rows = {4} name="review" onChange={handleChange} />

            </Form.Group >
            <div className="d-flex justify-content-center">
                <button className="btn button-cta button-blue" type="submit" onClick={handleSubmit}>
                    Submit
            </button>
            </div>
        </Form>
    )
}

export default ReviewForm
