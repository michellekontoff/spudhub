import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails'
import ProductEditForm from './ProductEditForm'




const ProductPage = () => {

    const [editMode, setEditMode] = useState(false)

    const params = useParams()
    const user = useSelector((state) => state.session.user)
    const productId = params.id
    const product = useSelector((state) => state.products[productId])

    if (!editMode) {
        return (<ProductDetails user={user} product={product} editMode={editMode} setEditMode={setEditMode} />)
    }
    else {
        return (<ProductEditForm product={product} editMode={editMode} setEditMode={setEditMode} />)
    }
}



export default ProductPage
