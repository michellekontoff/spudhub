import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import ProductModal from './ProductModal'
import ProductEditForm from './ProductEditForm'

import { Modal } from '../../context/Modal'


const ProductPage = ({ product, setShowProductModal }) => {

    const [editMode, setEditMode] = useState(false)

    const user = useSelector((state) => state.session.user)
    let userId;
    if (user) userId = user.id

    let content = null

    if (!editMode) {
        content = <ProductModal userId={userId}  product={product} editMode={editMode} setEditMode={setEditMode} />
    }
    else {
        content = <ProductEditForm product={product} editMode={editMode} setEditMode={setEditMode} />
    }

    return (
        <Modal onClose={() => setShowProductModal(false)}>
            {content}
        </Modal>
    )
}



export default ProductPage
