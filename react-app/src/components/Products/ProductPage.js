import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails'
import ProductEditForm from './ProductEditForm'

import { Modal } from '../../context/Modal'


const ProductPage = ({ setShowProductModal }) => {

    const [editMode, setEditMode] = useState(false)

    const params = useParams()
    const user = useSelector((state) => state.session.user)
    let userId;
    if (user) userId =user.id

    const productId = params.id
    const product = useSelector((state) => state.products[productId])

    let content = null

    if (!editMode) {
        content = (
            <ProductDetails userId={userId}  product={product} editMode={editMode} setEditMode={setEditMode} />
        )
    }
    else {
        content = (<ProductEditForm product={product} editMode={editMode} setEditMode={setEditMode} />)
    }

    return (
        <Modal onClose={() => setShowProductModal(false)}>
            {content}
        </Modal>
    )
}



export default ProductPage
