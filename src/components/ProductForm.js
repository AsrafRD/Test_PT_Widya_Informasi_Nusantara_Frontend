import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../store/actions/productActions';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productdata = await dispatch(createProduct({ name, description, price }));

    try {
      if(productdata){
        console.log("produk datanya", productdata)
        console.log("token user produk", productdata.token)
      }
    } catch (error) {
      console.log('create error', error);
    }
  };
  
  
  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ProductForm;
