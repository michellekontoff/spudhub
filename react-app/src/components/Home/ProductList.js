import { useState } from "react";
import ProductPage from "../Products/ProductPage"



function ProductList({product, user}) {
    const [showProductModal, setShowProductModal] = useState(false)

    return (
        <div className='product-container' key={product.id}>
            {user ?
                <button className='plus-btn'>
                    <i className="fas fa-plus"></i>
                </button>
                : null
            }

            <li className="product" >
                {product.image ?
                <img src={product.image} alt={product.id} onClick={() => setShowProductModal(true)}></img>
                : <img src='https://i.imgur.com/BPOYKBx.png' alt={product.id}></img>}
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
