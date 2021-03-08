import React from 'react'
import './ReviewsList.css'
import Reviews from "./Reviews";
import { ListGroup } from 'react-bootstrap';
function ReviewsList(props) {
    return (
        <ListGroup>
            {
                props.reviews.map(post => {
                    return (
                        <div>
                            <p className = "review">{post.review}</p>
                            <p className = "parent-name">- {post.name}</p>
                        </div>
                    )
                })
            }
        </ListGroup>
    )
}

export default ReviewsList
