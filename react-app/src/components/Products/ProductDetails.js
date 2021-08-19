import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import './Product.css'


const ProductDetails = ({userId, product, editMode, setEditMode}) =>{
    let editButton ;

    if ( userId === product.user_id){
        editButton = <button type='button' onClick={()=> setEditMode(true)}>Edit</button>
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
            <div className='product-price'>${product.price}</div>
            <div className='product-edit-btn'>{editButton}</div>
        </div>

    )


}


export default ProductDetails
