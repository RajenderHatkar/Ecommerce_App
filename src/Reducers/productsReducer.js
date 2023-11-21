//import { fetchProducts, addProduct } from '../Actions/actions';
// reducers/productsReducer.js
/*const productsReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return action.payload;
      
      default:
        return state;
    }
  };
  
  export default productsReducer;*/
  
  const productsReducer = (state = { products: [], isFetched: false }, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        //fetching all data f
        console.log("Action of fetching data", state)
        return {
          ...state,
          products: action.payload,
          isFetched: true,
        };
      // ... other cases
     
  
      case 'DELETE_PRODUCT':
        // Remove the product with the specified id
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
        };
      case 'ADD_PRODUCT':
        //Add new product
        console.log('Reducer: ADD_PRODUCT action, current state:', state);
        console.log('Reducer: ADD_PRODUCT action, payload:', action.payload);
        return {
          ...state,
          products: [...state.products, action.payload],
        };
  
      case 'EDIT_PRODUCT':
        //edit product
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id ? { ...product, ...action.payload.updatedData } : product
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default productsReducer;
  
  
  