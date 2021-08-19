import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import {fetchCreateProduct} from '../../store/products';
import { useHistory } from 'react-router-dom';

import './createForm.css'


const ProductCreateForm = () => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0.00);
  const [quantity] = useState(1);
  const [image , setImage] = useState('')

  const user = useSelector(state => state.session.user);
  const user_id = user.id
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
      const data = await dispatch(fetchCreateProduct(user_id ,name, description, price,quantity,image));

      if (data){
        if (!data.errors){
          history.push('/');
        }
        else{
          setErrors(data.errors)
        }
      }

  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const updatePrice= (e) => {
    setPrice(e.target.value);
  };

  const updateImage = (e)=>{
      setImage(e.target.value);
  }



  return (
    <div className='form-container'>
    <form onSubmit={onSubmit} className='create-product-form'>
      <div className='create-form-header'>
        Create Product
      </div>
      <div>
        <p className='error' >{errors?.name}</p>
        <input
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
        <textarea
          name='description'
          onChange={updateDescription}
          value={description}
          required
          placeholder='Description'
          rows='7'
          cols='30'
          ></textarea>
      </div>
      <div>
        <p className='error'>{errors?.price}</p>
        $ <input
          className='form-price'
          type='number'
          name='price'
          onChange={updatePrice}
          value={price}
          placeholder='Price'
          required
          ></input> each
      </div>
      <div>
        <p></p>
        <input
          type='text'
          name='image'
          onChange={updateImage}
          value={image}
          placeholder='Image Link'
          ></input>
      </div>
      <div>
        <button className='create-product-btn' type='submit'>Create Product</button>
      </div>
    </form>
  </div>
  );
};

export default ProductCreateForm;
