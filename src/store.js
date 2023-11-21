// store component
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './Reducers/productsReducer';
import CartReducer from './Reducers/CartReducers';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: CartReducer,
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return undefined;
  }
};


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
   
  }
};

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({
    products: store.getState().products, // Only save the part of the state you want to persist
    // Add other slices of the state if needed
  });
});

export default store;
