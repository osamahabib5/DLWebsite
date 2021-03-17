import React ,{useEffect,useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, InputGroup, FormControl } from 'react-bootstrap';
import './FormWindow.css'
import axios from 'axios';
import baseUrl from '../../../../../baseUrl/baseUrl'
function FormWindow() {
    const [nametext,setnametext] = useState("Your Name");
    const [descriptiontext,setdescriptiontext] = useState("What would you like to be contacted about?")
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setform] = useState({name: '',email:'',phone:'',message: ''})
   const handleChange = (e) =>{
       setform({
           ...form,
           [e.target.name]: e.target.value
       })
   }
    const validate =() =>{
       let err = {};
       if (!form.name){
           err.name = "Name is Required"
       }
       if (!form.email){
        err.email = "Email is Required"
        }
        if (!form.message){
            err.message = "Message is Required"
        }
        return err;
   }
   const showError = (errObject) =>{
       let errMsg = '';
       for (let err in errObject){
           errMsg += `${errObject[err]}` + ' '
       }
       alert(`Errors ${errMsg}`);
   }
   const postDetails = async (formdata) =>{
    axios({
        method: 'post',
        url: baseUrl + "/api/contact",
        data: formdata
      })
      .then(function (response) {
      })
      .catch(function (error) {
          console.log("Error! :"+ error)
      });
   }
   const handleSubmit =async (e) => {
       e.preventDefault();
       const errs = validate();
       if(Object.keys(errs).length === 0){
            setIsSubmitting(true);
            await postDetails(form);
            setform({name: '',email:'',phone:'',message: ''});
       }
       else{
           showError(errs);
       }
   }
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 769) {
                setnametext("Your Name");
                setdescriptiontext("What would you like to be contacted about?");
            }
            if (window.innerWidth < 769) {
                setnametext("Name");
                setdescriptiontext("Type your Message")
            }
        })
    });
    return (
            <Form>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            name = "name"
                            placeholder={nametext}
                            onChange = {handleChange}
                        />
                    </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <InputGroup className="mb-2">
                            <FormControl id="inlineFormInputGroup"  
                            type = "email"
                            name = "email"
                            placeholder="Email" onChange = {handleChange}/>
                        </InputGroup>
                    </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <InputGroup className="mb-2">
                            <FormControl id="inlineFormInputGroup" placeholder="Phone Number" type = "number"
                                onChange = {handleChange}
                                name = "phone"
                            />
                        </InputGroup>
                    </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <InputGroup className="mb-2">
                            <FormControl as="textarea"
                                rows={3}
                                id="inlineFormInputGroup" placeholder={descriptiontext} 
                                onChange = {handleChange}
                                name = "message"
                                />
                        </InputGroup>
                    </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <button type="submit" className="btn button-contact" onClick = {handleSubmit}>
                            Submit
                        </button>
                    </Col>
                </Form.Row>
            </Form>
    )
}

export default FormWindow
