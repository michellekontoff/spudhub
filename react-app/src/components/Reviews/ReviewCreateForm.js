import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCreateReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom';
import './Reviews.css'


const ReviewCreateForm = ({ productId }) => {
    const [errors, setErrors] = useState([]);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const user_id = useSelector(state => state.session.user).id;
    let product_id = productId;


    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(fetchCreateReview(user_id, product_id, review, rating));
        console.log(data)
        if (data) {
            if (!data.errors) {
                setRating('');
                setReview('');
                return;
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

    const clearReview = () => {
        setReview('');
        setRating('');
        setErrors([]);
    }

    return (
            <form className='create-review-form-container' onSubmit={onSubmit} >
                <div className='create-review-header'>
                    Submit your Review
                </div>
                <div>
                    <div className='error' >{errors?.rating}</div>
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
                    <textarea className='create-review-textarea'
                        type='text'
                        name='review'
                        onChange={updateReview}
                        value={review}
                        placeholder='Please enter your review..'
                    ></textarea>
                </div>
                {user_id ?
                <div className='create-review-form-btns'>
                    <button type='submit'>Submit</button>
                    <button onClick={clearReview} type='button'>Clear</button>
                </div>
                : null}
            </form>
    )
}


export default ReviewCreateForm;
