import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Product.css'
// import {  useDispatch, useSelector } from 'react-redux'


const ProductDetails = ({ product, userId, editMode, setEditMode }) =>{
    let editButton ;

    if ( userId === product.user_id) {
        editButton = <Link to={`/products/${product.id}/edit`}>
                        <button type='button' onClick={()=> setEditMode(true)}>Edit</button>
                    </Link>
    }

    return (
        <div className='product-details-container'>
            <h1 className='product-header'>{product.name}</h1>
            <div className="product-img-container">
                {product.image ?
                <img src={product.image} alt={product.id}></img>
                : <img src='https://i.imgur.com/BPOYKBx.png' alt={product.id}></img>}
            </div>
            <div className='product-description'>{product.description}</div>
            <div className='product-price'>${product.price.toFixed(2)}</div>
            <div className='product-edit-btn'>{editButton}</div>
        </div>
    )


}

export default ProductDetails


// const [editMode, setEditMode] = useState(false)

    // const params = useParams()
    // const user = useSelector((state) => state.session.user)
    // let userId;
    // if (user) userId = user.id

    // const productId = params.id
    // const product = useSelector((state) => state.products[productId])
