import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCreateReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom';
import './Reviews.css'


const ReviewList = ({productId})=>{
    const allReviews = Object.values(useSelector(state=> state.reviews))
    const product_Reviews = Object.values(allReviews)
    // const product_Reviews = Object.values(allReviews).filter(review => review.product_id === productId)
    console.log(product_Reviews, '')
    console.log(allReviews)

    return (
        <div>
            <div>
                Reviews
            </div>
            <div>
                {product_Reviews?.map(review => {
                    <div key={review.id}>
                        <div>{review.rating}</div>
                        <div>{review.review}</div>
                    </div>
                })}
            </div>
        </div>
    )
}


export default ReviewList;


{/* <Link to={`/reviews/${product.id}`}>
</Link> */}
