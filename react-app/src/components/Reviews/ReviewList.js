import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchEditReview, fetchDeleteReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom';
import './Reviews.css'


const ReviewList = ({review})=>{

    const dispatch = useDispatch();
    // const user_id = useSelector(state => state.session.user).id;
    const id = review.id;

    const [editMode, setEditMode] = useState(false)
    const [errors, setErrors] = useState([]);
    const [review_text, setReview_text] = useState(review.review);
    const [rating, setRating] = useState(review.rating);



    const deleteReview = () => {
        dispatch(fetchDeleteReview(review.id))
    }

    const updateReview = async (e) => {
        e.preventDefault();
        const data = await dispatch(fetchEditReview(id, review_text, rating));

        if (data) {
            if (!data.errors) {
                // history.push('/');
                setEditMode(false)
                return;
            }
            else {
                setErrors(data.errors)
            }
        }
    }

    return ( <>
        { !editMode ?
            <div>
                <div>{review.rating}</div>
                <div>{review.review}</div>
                <div>
                    <button onClick={() => setEditMode(!editMode)} ><i class="fas fa-edit"></i></button>
                    <button onClick={deleteReview}><i class="fas fa-trash"></i></button>
                </div>
            </div>
        :
        <div className='review-form-container'>
        <form onSubmit={updateReview} >
            <div className='update-review-header'>
                Update Review
            </div>
            <div>
                <p className='error' >{errors?.Rating}</p>
                <input
                    type='text'
                    name='Rating'
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    required
                ></input>
            </div>
            <div>
                <p className='error' >{errors?.review}</p>
                <textarea
                    type='text'
                    name='review'
                    onChange={(e) => setReview_text(e.target.value)}
                    value={review_text}
                    required
                ></textarea>
            </div>
            <div>
                <button className='update-review-btn' type='submit'>update me</button>
            </div>
        </form>
        </div>}
        </>
    )
}


export default ReviewList;
