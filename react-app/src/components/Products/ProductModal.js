import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Product.css'
import { useSelector } from 'react-redux'
import { useAddItem } from '../../store/shoppingCart'

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

    return (
        <div className='product-details-container'>
            <h1 onClick={sendToDetailsPage} className='product-header pointer'>{product.name}</h1>
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
