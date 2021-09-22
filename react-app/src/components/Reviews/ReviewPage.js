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
        <div className='review_page'>
            <div className='review-page_container'>
            <h2> Reviews </h2>
                <div className='hide-review-list-scroll'>
                    <div className='review-list_container'>
                        {reviews.map(review => (
                            <ReviewList review={review} key={review.id} />
                            ))}
                    </div>
                </div>
                <ReviewCreateForm productId={productId} />
            </div>
        </div>
    )
}

export default ReviewPage;
