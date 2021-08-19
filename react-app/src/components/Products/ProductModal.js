import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const ProductModal = ({ product, userId, editMode, setEditMode }) =>{
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

export default ProductModal
