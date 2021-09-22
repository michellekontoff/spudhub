import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchEditReview, fetchDeleteReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom';
import './Reviews.css'


const ReviewList = ({review})=>{

    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user?.id);
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

    const cancelEdit = () => {
        setEditMode(false);
        setRating(review.rating);
        setErrors([]);
    }

    return (
        <div className='review-edit-page-container'>
            { !editMode ?
                <div className='individual-review-container'>
                    <div className='individual-review-top'> {review.username} </div>
                    <div className='individual-review-mid'> <i className="fas fa-star"></i>{review.rating} </div>
                    <div className='individual-review-bottom'>{review.review}</div>
                    {review.user_id == user_id ?
                    <div className='individual-review-btns'>
                        <button onClick={() => setEditMode(!editMode)} ><i className="fas fa-edit"></i></button>
                        <button onClick={deleteReview}><i className="fas fa-trash"></i></button>
                    </div>
                    : null}
                </div>
            :
            <form className='update-review-form' onSubmit={updateReview} >
                <div className='update-review-header'>
                    Update Review
                </div>
                <div>
                    <div className='error' >{errors?.Rating}</div>
                    <div className='star-rating'>
                        { rating >= 1 ? <i onClick={() => setRating(1)}  className="fas fa-star"></i> : <i onClick={() => setRating(1)} className="far fa-star"></i> }
                        { rating >= 2 ? <i onClick={() => setRating(2)}  className="fas fa-star"></i> : <i onClick={() => setRating(2)} className="far fa-star"></i> }
                        { rating >= 3 ? <i onClick={() => setRating(3)}  className="fas fa-star"></i> : <i onClick={() => setRating(3)} className="far fa-star"></i> }
                        { rating >= 4 ? <i onClick={() => setRating(4)}  className="fas fa-star"></i> : <i onClick={() => setRating(4)} className="far fa-star"></i> }
                        { rating == 5 ? <i onClick={() => setRating(5)}  className="fas fa-star"></i> : <i onClick={() => setRating(5)} className="far fa-star"></i> }
                    </div>
                </div>
                <div>
                    <div className='error' >{errors?.review}</div>
                    <textarea className='update-review-textarea'
                        type='text'
                        name='review'
                        onChange={(e) => setReview_text(e.target.value)}
                        value={review_text}
                    ></textarea>
                </div>
                <div className='update-review-form-btns'>
                    <button type='submit'>Update</button>
                    <button onClick={cancelEdit} type='button'>Cancel</button>
                </div>
            </form>}
        </div>
    )
}


export default ReviewList;
