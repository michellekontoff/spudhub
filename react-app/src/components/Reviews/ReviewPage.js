import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';

import './Reviews.css'

import ReviewCreateForm from './ReviewCreateForm';
import ReviewList from './ReviewList';



const ReviewPage = () => {

    const params = useParams()
    const productId = params.id


    return(
        <div>
            <ReviewList productId={productId} />
            <ReviewCreateForm />
        </div>
    )
}

export default ReviewPage;
