// CartCounter
import React from 'react';
import { connect } from 'react-redux';

const CartCounter = ({ cartItemCount }) => {
  return <span>{cartItemCount}</span>;
};

const mapStateToProps = (state) => ({
  cartItemCount: state.cart.items.length,
});

export default connect(mapStateToProps)(CartCounter);
