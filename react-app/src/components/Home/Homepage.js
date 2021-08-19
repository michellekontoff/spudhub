import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchAllProducts } from '../../store/products';
import './Homepage.css'
import { Link } from 'react-router-dom';
import ProductDetails from '../Products/ProductDetails';
import { Modal } from '../../context/Modal';
import ProductPage from '../Products/ProductPage';
import ProductList from './ProductList';


function HomePage() {
    const dispatch = useDispatch();
    const products = Object.values(useSelector((state) => state.products));

    const user = useSelector(state => state.session.user);

    // useEffect(() => {
    //     dispatch(fetchAllProducts());
    // }, [dispatch])

    return (
        <div>
            <h1>SpudHub</h1>
            <div className="container">
                <ul className="list">
                    {products.map((product) => (
                        <ProductList user={user} product={product} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomePage
