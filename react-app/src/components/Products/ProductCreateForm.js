import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
// import { Redirect } from 'react-router-dom';
import {fetchCreateProduct} from '../../store/products';

/*
TODO:
    [] styling
*/




const ProductCreateForm = () => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0.00);
  const [quantity, setQuantity] = useState(0);
  const [image , setImage] = useState('')

  const user = useSelector(state => state.session.user);
  const user_id = user.id
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
      const data = await dispatch(fetchCreateProduct(user_id ,name, description, price,quantity,image));
      if (data) {
        setErrors(data)
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
      {/* <div className='errors'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div> */}
      <div>
        <p>{errors?.name}</p>
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
        <p>{errors?.description}</p>
        <label>Description</label>
        <textarea
          name='description'
          onChange={updateDescription}
          value={description}
          required
        ></textarea>
      </div>
      <div>
        <p>{errors?.price}</p>
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
        <p>{errors?.quantity}</p>
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
      <button type='submit'>Create Product</button>
    </form>
  );
};

export default ProductCreateForm;
