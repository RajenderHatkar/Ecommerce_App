//Actions
export const fetchProducts = (products) => ({
    type: 'FETCH_PRODUCTS',
    payload: products,
  });
  export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const removeFromCart = (product) => ({
    type: 'REMOVE_FROM_CART',
    payload: product,
  });
  export const addProduct = (newproduct) => ({
    
    type: 'ADD_PRODUCT',
    payload: newproduct,
  });
  export const editProduct = (id, updatedData) => ({
    type: 'EDIT_PRODUCT',
    payload: {
      id,
      updatedData,
    },
  });
 /* export const sortProducts = (category) => ({
    type: 'SORT_PRODUCTS',
    payload: category,
  });*/
  export const deleteProduct = (productId) => ({
    type: 'DELETE_PRODUCT',
    payload: productId,
  });
  
  