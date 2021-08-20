const ALL_REVIEWS = 'reviews/ALL_REVIEWS'
const CREATE_REVIEW = 'reviews/CREATE_REVIEW'
const EDIT_REVIEW = 'reviews/EDIT_REVIEW'
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'


const getAllReviews = (reviews) => ({
    type: ALL_REVIEWS,
    reviews,
})

const createReview = (review) => ({
    type: CREATE_REVIEW,
    review,
})

const editReview = (review) => ({
    type: EDIT_REVIEW,
    review
})

const deleteReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
})


export const fetchAllReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews');
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }

        dispatch(getAllReviews(data));
        return data
    }
}


export const fetchCreateReview = (user_id, product_id, review, rating) => async (dispatch) => {

    const response = await fetch('/api/review/create', {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
            user_id,
            product_id,
            review,
            rating
        })
    })

    const data = await response.json()
    if (response.ok) {
        dispatch(createReview(data))
        return data
    }
    if (data.errors) {
        return data
    }
}

export const fetchEditReview = (id, review, rating) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
            review,
            rating
        })
    })
    const data = await response.json()
    if (response.ok) {
        dispatch(editReview(data))
        return data
    }
    if (data.errors) {
        return data
    }

}

export const fetchDeleteReview = (id) => async (dispatch) => {
    const response= await fetch(`/api/reviews/${id}`, {
        method: "DELETE"
    })

    if (response.ok) {
        const data = await response.json()

        if (data.errors) {
            return;
        }
        dispatch(deleteReview(id))
        return data
    }

}


let initialState = {}

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case ALL_REVIEWS:
            return { ...state, ...action.reviews };
            // return { ...action.reviews };
        case CREATE_REVIEW:
            newState[action.review.id] = action.review
            return newState
        case EDIT_REVIEW:
            newState[action.review.id] = action.review
            return newState
        case DELETE_REVIEW:
            delete newState[action.reviewId]
            return newState
        default:
            return state;
    }
}
