import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Product.css'
import { useSelector, useDispatch } from 'react-redux'
import { useAddItem } from '../../store/shoppingCart'


const ProductDetails = () =>{
    const dispatch = useDispatch()

    let editButton;

    const user = useSelector((state) => state.session.user)
    let userId;
    if (user) userId = user.id

    const params = useParams()
    const productId = params.id
    const product = useSelector((state) => state.products[productId])
    const cart = useSelector(state => state.shoppingCart)
    const addItem = useAddItem(product, cart)

    if ( userId === product.user_id) {
        editButton = <Link to={`/products/${product.id}/edit`}>
                        <button type='button'>Edit</button>
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
                {user ? <button type='button' onClick={addItem}>Add to Cart</button> : null}
            </div>
        </div>
    )


}

export default ProductDetails
