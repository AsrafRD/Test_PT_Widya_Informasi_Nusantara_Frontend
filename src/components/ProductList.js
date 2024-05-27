import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, deleteProduct, updateProduct } from '../store/actions/productActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [editingProduct, setEditingProduct] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: editingProduct._id, updatedProduct: { name, description, price } }));
    setEditingProduct(null);
    setName('');
    setDescription('');
    setPrice('');
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div className="product-table-container">
      <h2>Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>Rp. {product.price}</td>
              <td>
                <div className="product-buttons">
                  <button onClick={() => handleEdit(product)}>Edit</button>
                  <button onClick={() => handleDelete(product._id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingProduct && (
        <div>
          <h2>Edit Product</h2>
          <form onSubmit={handleUpdate}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button type="submit">Update</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductList;
