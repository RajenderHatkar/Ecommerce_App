//cart using connect
import React from "react";
import { connect } from 'react-redux';
import { removeFromCart } from '../Actions/actions';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const Cart = ({ cart, removeFromCart }) => {
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
    toast.success('Product removed from the cart', { position: 'top-right' });
  };
    return (
      <div className="text-center">
        <h2>Cart</h2>
        {cart.items.length === 0 ? (
          <div><h2>Your Cart is Empty !!!</h2><a  className=" btn btn-secondary col-4 mx-auto " ><Link to="/" >Back to Home</Link></a></div>
        
        ) : (
          <div className="column">
            {cart.items.map((item) => (
              <div key={item.id} className="col-md-6 mb-3 m-5 p-1 mx-auto">
                <div className="card "  >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={item.image} className="card-img" alt={item.name} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="card-text">Price: ${item.price}</h6>
                        <h6 className="card-text">category:{item.category}</h6>
                        <br></br>
                        <br></br>
                        <button onClick={() => handleRemoveFromCart(item)} className="btn btn-danger">
                          Remove from Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {cart.items.length > 0 && <div className="card m-5 p-1 mx-auto "style={{ width: '600px' }}>
          <h1>Order summary</h1>
          <h6>Price: ${cart.total.toFixed(2)}</h6>
          <h6> Total Tax:{(cart.total*0.10).toFixed(2)}</h6>
          <h6>Delivary charges: 0</h6>
          <br></br>
          <h5>Total Price:{(cart.total+cart.total*0.1).toFixed(2)}</h5>
          <br></br>
          <button className="btn btn-warning col-4 mx-auto">Proceed for Payment</button>
          <br></br>
        </div>}
      </div>
    );
  };
  
  const mapStateToProps = (state) => ({
    cart: state.cart,
  });
  
  export default connect(mapStateToProps, { removeFromCart })(Cart);