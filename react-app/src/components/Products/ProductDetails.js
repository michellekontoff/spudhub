import React from 'react';


import './Product.css'


const ProductDetails = ({userId, product, editMode, setEditMode}) =>{
    let editButton ;

    if ( userId === product.user_id){
        editButton = <button type='button' onClick={()=> setEditMode(true)}>Edit</button>
    }

    return (

        <div className='product-details-container'>
            <h1 className='product-header'>{product.name}</h1>
            <div className="product-img-container"><img src={product.image} alt={product.name}></img></div>
            <div className='product-description'>{product.description}</div>
            <div className='product-price'>{product.price}</div>
            <div className='product-quantity'>{product.quantity}</div>
            <div className='product-edit-btn'>{editButton}</div>
        </div>

    )


}


export default ProductDetails
