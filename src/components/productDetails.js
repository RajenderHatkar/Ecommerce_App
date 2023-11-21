// Product Details
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct,addToCart } from '../Actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const products = useSelector((state) => state.products);
  console.log("detal"+products)

  const product = products.products.find((p) => p.id === parseInt(id, 10));
  console.log("allproducts"+product)
  const [editMode, setEditMode] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
    
  });

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleEdit = () => {
    setEditMode(true);
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
   
    toast.success('Product added to the cart!', { position: 'top-right' });
  };

  const handleSave = () => {
    // Dispatch the editProduct action with the updatedData
    dispatch(editProduct(product.id, updatedData));
    setEditMode(false);
    toast.success('successfully edited', { position: 'top-right' });
  };

  const handleCancel = () => {
    // Reset the updatedData and exit edit mode
    setUpdatedData({
      title: product.title,
      description: product.description,
      price: product.price,
      
    });
    setEditMode(false);
    toast.success('edit cancelled', { position: 'top-right' });
  };

  const handleChange = (e) => {
    // Update the corresponding field in updatedData
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="text-center">Product Details</h2>

      {/* Conditionally render displaying data or edit form */}
      {editMode ? (
        // Render the edit form
        <div >
          <div className="container ">
            <form>
              <div className="form-group m-3">
                 <label>Title:</label>
                 <input type="text" className="form-control" name="title" value={updatedData.title} onChange={handleChange} />
              </div>
              <div className="form-group m-3">
                 <label>Description:</label>
                <textarea className="form-control" name="description" value={updatedData.description} onChange={handleChange}></textarea>
              </div>
              <div className="form-group m-3">
                 <label>Price:</label>
                <input type="text" className="form-control" name="price" value={updatedData.price} onChange={handleChange} />
              </div>
    
              <button type="button" className="btn btn-success m-2" onClick={handleSave}>Save</button>
              <button type="button" className="btn btn-warning ml-2" onClick={handleCancel}>Cancel</button>
            </form>
          </div>
        </div>
      ) : (
        // Render the displaying data and the "Edit" button
        
      <div className="container "style={{ padding: '20px' }}>
        <button className="btn btn-light" onClick={handleEdit}><FontAwesomeIcon icon={faPencilAlt} className="mr-2" /> Edit</button>
         <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
               <img
              src={product.image}
              className="img-fluid"
              alt="Product"
              style={{ maxHeight: '300px', maxWidth:"300px",objectFit: 'contain' }}/>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 offset-md-3">
               <h5 className="h4">Title: {product.title}</h5>
               <p >Description : {product.description}</p>
               <p className="h6">Category:{product.category}</p>
               <p className="h5">Price: ${product.price}</p>
      
            </div>
            <div className="text-center mt-4 mb-5">
            <button className="btn btn-success" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button className="btn btn-danger m-2" >Buy NoW</button>
            </div>
          </div> 
          <div className="text-center mt-4 mb-5">
              <Link to="/">
            <button className="btn btn-warning col-4">
             Back to All Products
             </button>
            </Link>
         </div>  
        </div>
        

      )}

        
    </div>
  );
};

export default ProductDetails;


