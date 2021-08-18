import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { Redirect , useHistory, useParams } from 'react-router-dom';
import {fetchEditProduct, fetchDeleteProduct} from '../../store/products';

/*
TODO:
    [] error handling
*/




const ProductEditForm = ({product, editMode , setEditMode}) => {



  const [errors, setErrors] = useState([]);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [image , setImage] = useState(product.image)

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
      const data = await dispatch(fetchEditProduct(product.id,name, description, price,quantity,image));
      if (data) {
        setErrors(data)
      }
    setEditMode(false)
  };

  const submitDelete = () =>{
    dispatch(fetchDeleteProduct(product.id))
    history.push(`/`)
  }

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const updatePrice= (e) => {
    setPrice(e.target.value);
  };

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const updateImage = (e)=>{
      setImage(e.target.value);
  }



  return (
    <form
    onSubmit={onSubmit}
    >
      <div>
        {/* {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))} */}
      </div>
      <div>
        <label>Name</label>
        <input
          type='text'
          name='name'
          onChange={updateName}
          value={name}
          required
        ></input>
      </div>
      <div>
        <label>Descripton</label>
        <textarea
          name='description'
          onChange={updateDescription}
          value={description}
          required
        ></textarea>
      </div>
      <div>
        <label>Price</label>
        <input
          type='number'
          name='price'
          onChange={updatePrice}
          value={price}
          required
        ></input>
      </div>
      <div>
        <label>Quantity</label>
        <input
          type='number'
          name='quantity'
          onChange={updateQuantity}
          value={quantity}
          required
        ></input>
      </div>
      <div>
        <label>Image</label>
        <input
          type='text'
          name='image'
          onChange={updateImage}
          value={image}
        ></input>
      </div>
      <button type='submit'>Edit Product</button>
      <button
      type='button'
      onClick ={submitDelete}
      >Delete Product</button>
    </form>
  );
};

export default ProductEditForm;
