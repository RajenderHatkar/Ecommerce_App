//All products and sorting
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, deleteProduct } from '../Actions/actions';
import { getData } from '../API/api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AllProducts() {
  const dispatch = useDispatch();
  const { products, isFetched } = useSelector((state) => state.products);
  const [expandedDescriptions, setExpandedDescriptions] = useState([]);
  const [sortByPrice, setSortByPrice] = useState(false);
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    if (!isFetched) {
      const fetchData = async () => {
        try {
          const response = await getData();
          dispatch(fetchProducts(response.data));
          setOriginalProducts(response.data); // Save the original products
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      fetchData();
    }
  }, [dispatch, isFetched]);

  const toggleDescription = (productId) => {
    setExpandedDescriptions((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const handleDelete = (productId) => {
    // You might want to show a confirmation dialog before dispatching deleteProduct
    const confirmed = window.confirm('Are you sure you want to delete this product?');
    if (confirmed) {
      dispatch(deleteProduct(productId));
      toast.success('Product is deleted', { position: 'top-right',style: {background: 'red'},});
    }
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
   
    toast.success('Product added to the cart!', { position: 'top-right' });
  };

  const toggleSortByPrice = () => {
    setSortByPrice(!sortByPrice);
    toast.success('sorted by price', { position: 'top-left' });
  };

  const clearSort = () => {
    setSortByPrice(false);
  };

  const sortedProducts = sortByPrice ? [...products].sort((a, b) => a.price - b.price) : products;

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <div>
        <button  className="btn btn-light m-2" onClick={toggleSortByPrice}>
          {sortByPrice ? 'Sorted by Price' : 'Sort by Price'}
        </button>
        {sortByPrice && <button  className="btn btn-warning m-2" onClick={clearSort}>Clear Sort</button>}
      </div>
      <div className="row">
        {sortedProducts.map((data) => (
          <div key={data.id} className="col-md-3 mb-3">
            <div className="card h-100 m-2" style={{ height: '400px' }}>
              <img
                src={data.image}
                className="card-img-top"
                alt="Product"
                style={{ width: '100%', height: '200px', objectFit: 'fill' }}
                onError={(e) => {
                  e.target.src = 'https://dummyjson.com/image/i/products/1/1.jpg'; // Replace with your fallback image URL
                }}
              />
              <div className="card-body">
                <h6 className="card-title">
                  <Link to={`/product/${data.id}`} style={{ color: 'black' }}>
                    {data.title}
                  </Link>
                </h6>
                <p
                  className="card-text"
                  style={{
                    overflow: 'hidden',
                    maxHeight: expandedDescriptions.includes(data.id) ? 'none' : '100px',
                    marginBottom: '10px',
                  }}
                >
                  {data.description}
                </p>
                {data.description.length > 100 && (
                  <button
                    className="btn btn-link"
                    onClick={() => toggleDescription(data.id)}
                  >
                    {expandedDescriptions.includes(data.id) ? 'Read Less' : 'Read More'}
                  </button>
                )}
                <p>Price: ${data.price}</p>
                
                <button
                  className="btn btn-success m-2"
                  onClick={() => handleAddToCart(data)}
                >
                  Add to cart
                </button>
                <button
                className="btn btn-danger mx-auto m-2 row-3"
                onClick={() => handleDelete(data.id)}
              >
                Delete
              </button>
              </div>
          
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;

