import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';



const ProductDetails = ({user, product}) =>{

    return (
        <>
        <h1>{product.name}</h1>
        <p>{user}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.quantity}</p>

        </>
    )


}


export default ProductDetails
