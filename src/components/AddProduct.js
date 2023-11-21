// AddProduct
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct,fetchProducts} from '../Actions/actions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
    category:'',
    //image:'null',
    image: '',
    id:Date.now()
    
  });

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the addProduct action to update the Redux store
;
    dispatch(addProduct(newProduct));
    setNewProduct({
      title: '',
      description: '',
      price: '',
      category:'',
      //image:'',
      image: '',
    })

    // After adding the product, navigate back to the All Products page
    toast.success('Added new product', { position: 'top-right' });
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" id="price" name="price" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="Category" className="form-label">Category</label>
          <input type="text" className="form-control" id="category" name="category" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input type="file" className="form-control" id="image" accept="image/*" name="image" onChange={handleChange} />
        </div>
       
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add Product</button>
        
      </form>
    </div>
  );
};

export default AddProduct;
