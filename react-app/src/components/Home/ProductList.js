import { useState } from "react";
import ProductPage from "../Products/ProductPage"
import { useDispatch, useSelector } from "react-redux";
import { useAddItem } from "../../store/shoppingCart";


function ProductList({product, user}) {
    const [showProductModal, setShowProductModal] = useState(false)

    const dispatch = useDispatch()
    const cart = useSelector(state => state.shoppingCart)
    const addItem = useAddItem(product, cart)

    return (
        <div className='product-container' key={product.id}>
            {user ?
                <button className='plus-btn' onClick={addItem}>
                    <i className="fas fa-plus"></i>
                </button>
                : null
            }

            <li className="product" >
                {product.image ?
                <img src={product.image} alt={product.id} onClick={() => setShowProductModal(true)}></img>
                : <img src='https://i.imgur.com/BPOYKBx.png' alt={product.id} onClick={() => setShowProductModal(true)}></img>}
                <div>{product.name}</div>
                <div>${product.price.toFixed(2)}</div>
            </li>
            {showProductModal && (
                <ProductPage product={product} setShowProductModal={setShowProductModal} />
            )}

        </div>
    )
}

export default ProductList;
