//cartReducer
const cartReducer = (state = { items: [], total: 0 }, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const newItem = {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image,
          description:action.payload.description,
          category:action.payload.category
        };
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + action.payload.price,
        };
      case 'REMOVE_FROM_CART':
        const removedItem = state.items.find((item) => item.id === action.payload.id);
        const updatedItems = state.items.filter((item) => item.id !== action.payload.id);
        const updatedTotal = state.total - (removedItem ? removedItem.price : 0);
        return {
          ...state,
          items: updatedItems,
          total: updatedTotal,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  
  