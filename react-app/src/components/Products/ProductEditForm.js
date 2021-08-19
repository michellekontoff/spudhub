import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { Redirect , useHistory, useParams } from 'react-router-dom';
import {fetchEditProduct, fetchDeleteProduct} from '../../store/products';

/*
TODO:
    [] error handling
*/




const ProductEditForm = ({product, editMode , setEditMode}) => {



  const [errors, setErrors] = useState(false);
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
      if (data){
        if (!data.errors){
          setEditMode(false)
        }
        else{
          setErrors(data.errors)
        }
      }


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
    <div className='edit-form-container'>
    <form onSubmit={onSubmit} className='edit-product-form'>
      <div>
        <p className='error'>{errors?.name}</p>
        Name <input
          type='text'
          name='name'
          onChange={updateName}
          value={name}
          required
          placeholder='Name'
          ></input>
      </div>
      <div>
      <p className='error'>{errors?.description}</p>
        Description <textarea
          name='description'
          onChange={updateDescription}
          value={description}
          required
          rows='7'
          cols='10'
          ></textarea>
      </div>
      <div>
        <label>Price</label>
        <p className='error'>{errors?.price}</p>
        <input
          type='number'
          name='price'
          onChange={updatePrice}
          value={price}
          required
        ></input>
      </div>
      {/* <div>
      <p className='error'>{errors?.quantity}</p>
        <label>Quantity</label>
        <input
          type='number'
          name='quantity'
          onChange={updateQuantity}
          value={quantity}
          required
          ></input>
      </div> */}
      <div>
        Image
        <input
          type='text'
          name='image'
          onChange={updateImage}
          value={image}
          ></input>
      </div>
      <div className='edit-form-btns'>
      <button type='submit'>Edit</button>
      <button type='button' onClick ={submitDelete}>Delete</button>
      </div>
    </form>
    </div>
  );
};

export default ProductEditForm;
