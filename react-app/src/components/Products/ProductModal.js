import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Product.css'
import { useSelector } from 'react-redux'
import { useAddItem } from '../../store/shoppingCart'
import StarMaker from '../Reviews/stars';


const ProductModal = ({ product, userId, setEditMode }) =>{
    const history = useHistory()
    const cart = useSelector(state => state.shoppingCart)
    const addItem = useAddItem(product, cart)

    let editButton ;

    if ( userId === product.user_id) {
        editButton = <Link to={`/products/${product.id}/edit`}>
                        <button type='button' onClick={()=> setEditMode(true)}>Edit</button>
                    </Link>
    }

    const sendToDetailsPage = () => {
        history.push(`/products/${product.id}`)
    }

    const allReviews = Object.values(useSelector(state=> state.reviews))
    const reviews = allReviews.filter(review => review.product_id == product.id)
    const [avg, setAvg] = useState(0)

    useEffect(() => {
        let addition = 0;
        reviews?.forEach(review => {
            addition+= review.rating
        })
        let res = addition/reviews.length
        if ( addition % reviews.length === 0 ){
            setAvg(res)
        } else {
            setAvg(res.toFixed(1))
        }
    }, [allReviews])

    return (
        <div className='product-details-container'>
            <h1 onClick={sendToDetailsPage} className='product-header pointer'>{product.name}<br/>
                <div className='product-avg-rating'>
                { avg > 0 ?
                <>
                <StarMaker rating={avg} /> </>
                : <>No ratings yet</>}</div>
            </h1>
            <div onClick={sendToDetailsPage} className="product-img-container pointer">
                {product.image ?
                <img src={product.image} alt={product.id}></img>
                : <img src='https://i.imgur.com/BPOYKBx.png' alt={product.id}></img>}
            </div>
            <div onClick={sendToDetailsPage} className='product-description pointer'>{product.description}</div>
            <div onClick={sendToDetailsPage} className='product-price pointer'>${product.price.toFixed(2)}</div>
            <div className='product-edit-btn'>{editButton}</div>
            <div className='product-add-to-cart'>
                {userId ? <button type='button' onClick={addItem}>Add to Cart</button> : null}
            </div>
        </div>
    )


}

export default ProductModal
