import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCreateReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom';
import './Review.css'


const ReviewCreateForm = ({ product_id }) => {
    const [errors, setErrors] = useState([]);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');

    const user_id = useSelector(state => state.session.user).id;


    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(fetchCreateReview(user_id, product_id, review, rating));

        if (data) {
            if (!data.errors) {
                history.push('/');
            }
            else {
                setErrors(data.errors)
            }
        }
    };

    const updateReview = (e) => {
        setReview(e.target.value)
    }
    const updateRating = (e) => {
        setRating(e.target.value)
    }


    return (
        <div
            className='review-form-container'
        >
            <form onSubmit={onSubmit} >
                <div className='create-review-header'>
                    Create Review
                </div>
                <div>
                    <p className='error' >{errors?.Rating}</p>
                    <input
                        type='text'
                        name='Rating'
                        onChange={updateRating}
                        value={rating}
                        required
                        placeholder='Rating'
                    ></input>
                </div>
                <div>
                    <p className='error' >{errors?.review}</p>
                    <textarea
                        type='text'
                        name='review'
                        onChange={updateReview}
                        value={review}
                        required
                        placeholder='Review'
                    ></textarea>
                </div>
                <div>
                    <button className='create-review-btn' type='submit'>Create Review</button>
                </div>
            </form>
        </div>
    )



}


export default ReviewCreateForm;
