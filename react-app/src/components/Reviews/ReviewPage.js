import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';

import './Reviews.css'

import ReviewCreateForm from './ReviewCreateForm';
import ReviewList from './ReviewList';



const ReviewPage = () => {

    const params = useParams()
    const productId = params.id;
    const allReviews = Object.values(useSelector(state=> state.reviews))
    const reviews = allReviews.filter(review => review.product_id == productId)


    return(
        <div className='review_container'>
            {reviews.map(review => (
                <div key={review.id}>
                <ReviewList review={review} />
                </div>
            ))}
            <ReviewCreateForm productId={productId} />
        </div>
    )
}

export default ReviewPage;
