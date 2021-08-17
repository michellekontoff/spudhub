import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../store/products';
import './Homepage.css'
import { Link } from 'react-router-dom';

function ProductList() {
    const dispatch = useDispatch();
    const products = Object.values(useSelector((state) => state.products));

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch])

    return (
        <div>
            <h1>Spudhub</h1>
            <div className="container">
                <ul className="list">
                    {products.map((product) => (
                        <div className='product-container'>
                            <button className='plus-btn'>
                                <i className="fas fa-plus"></i>
                            </button>
                            {/* Link to={`/products/${product.id}`} */}
                            <li className="product">
                                <img src={product.image} alt={product.id}></img>
                                <div>{product.name}</div>
                                <div>${product.price}</div>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProductList
