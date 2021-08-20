import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { useAddItem } from '../../store/shoppingCart'

const ProductModal = ({ product, userId, setEditMode }) =>{
    const dispatch = useDispatch()
    const cart = useSelector(state => state.shoppingCart)
    const addItem = useAddItem(product, cart)

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
            <div className='product-add-to-cart'>
                {userId ? <button type='button' onClick={addItem}>Add to Cart</button> : null}
            </div>
        </div>
    )


}

export default ProductModal
