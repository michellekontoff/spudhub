import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';



const ProductDetails = ({userId, product, editMode, setEditMode}) =>{
    let editButton ;

    if ( userId === product.user_id){
        editButton = <button type='button' onClick={()=> setEditMode(true)}>Edit</button>
    }

    return (
        <>
        <h1>{product.name}</h1>
        <p>{userId}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.quantity}</p>
        {editButton}

        </>
    )


}


export default ProductDetails
