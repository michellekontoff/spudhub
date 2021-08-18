import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails'




const ProductPage = () =>{
    const params = useParams()
    const user = useSelector((state)=> state.session.user)
    const productId = params.id
    const product = useSelector((state)=> state.products[productId] )
    console.log(product)

    return (
        <ProductDetails  user={user} product={product}/>
        )
}



export default ProductPage
