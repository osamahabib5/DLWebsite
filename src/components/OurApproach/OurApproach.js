import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurApproach.css';
import { Card, CardDeck, Col, Row } from 'react-bootstrap';
function OurApproach(props) {
    return (
        <div className="d-flex flex-column bd-highlight mb-3" style={{
            marginTop: props.coursespage ? "0.5rem" : "",
            // background: props.coursespage ? "#EDF0F5" : "",
            // border: props.coursespage ? "3px solid black" : "",
            // borderRadius: props.coursespage ? "2rem" : "",
        }}>
            <div className="p-2 bd-highlight" style={{ marginTop: props.topSpacing }}>
                <p className="heading" style = {{marginTop : props.coursespage ? "2rem" : ""}}>{props.heading}</p>
            </div>
            <div className="p-2 bd-highlight"
            style = {{
                padding : (props.coursespage && props.isMobile) ? "1rem!important" : ""
            }}>
                <p className="Approach-content">{props.approachcontent}</p></div>
            <div className="p-2 bd-highlight">
                <p className="details">{props.details}</p>
            </div>
            <div className="p-2 bd-highlight" style = {{marginBottom: props.coursespage ? "3rem": ""}}>
                <CardDeck style={{ margin: "auto",
                marginBottom : (props.coursespage && !props.isMobile) ? "4rem" : ""
            }} >
                    <Row xs={props.mobilecards} md={props.cardsno} className={props.isMobile ? "justify-content-md-center" : ""} style={{ flexDirection: props.isMobile ? "row" : "", maxWidth: "100%", margin: props.isMobile ? "" : "auto" }}>
                        {props.displayinfo.map((data, index) => {
                            let setMargin = index*2;
                            return (
                                <Col key={data.id}>
                                    
                                    <Card key={data.id} style={{
                                        background: (props.coursespage && !props.isMobile) ? "" : "", height:(props.coursespage && !props.isMobile) ? "510px" : "",
                                        marginBottom: (props.coursespage && !props.isMobile) ? "0rem" : "",
                                        // border: props.coursespage ? "2px solid black" : "",
                                        // borderRadius: props.coursespage ? "2rem" : "",
                                        marginTop: (props.coursespage && !props.isMobile) ? setMargin + "rem" : "",
                                        width: props.coursespage ? "100%" : "",
                                        marginRight: (props.coursespage && !props.isMobile) ? "1rem" : "",
                                    }}>
                                        {props.coursespage ? <p className="Approach-content" style = {{marginTop: "0rem",
                                    textAlign : props.isMobile ? "center" : ""
                                    }}>Step {index+1}</p> : ""}
                                        <Card.Img variant="top" src={data.image} style={{ height: props.isMobile ? "120px" : "190px", width: props.isMobile ? "120px" : "190px",
                                        margin : props.isMobile ? "auto" : ""
                                    }} />
                                        <Card.Body style={{ marginTop: props.cardBodySpacing }}>
                                            <Card.Title><p className="title" style={{ height: props.coursespage ? "90px" : "30px",
                                        textAlign :  props.isMobile ? "center" : ""
                                        }}>{data.title}</p></Card.Title>
                                            {!props.homepage ? <Card.Title style={{ 
                                                marginTop:props.isMobile ?  "0rem":
                                                 "3rem",
                                            textAlign :  props.isMobile ? "center" : "" }}><p className="title"
                                                style={{ fontSize: "15px" }}>{data.description}</p></Card.Title> : ""}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </CardDeck>
            </div>
        </div>
    )
}

export default OurApproach
