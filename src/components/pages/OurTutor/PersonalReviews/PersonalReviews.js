import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './PersonalReviews.css'
import Reviews from './ReviewsList/Reviews'
import ReviewsList from './ReviewsList/ReviewsList'
function PersonalReviews(props) {
    
    return (
        <div className = "d-flex flex-column bd-highlight mb-3">
            <p className = "reviews-heading" >Personal Reviews</p>
            <ReviewsList reviews = {props.reviews}/>
        </div>
    )
}

export default PersonalReviews
