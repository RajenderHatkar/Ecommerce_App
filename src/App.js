import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import AllProducts from "./components/AllProducts";
import Navbar from "./components/Navbar";
import ProductDeatils from './components/productDetails';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <marquee><p style={{marginTop:"80px"}}>Ecommerce App designed and intigrated for making appilcation user friendly and reliable.It is under development</p></marquee>
        <Routes>
        <Route exact path='/product/:id' element={<ProductDeatils />} />
          <Route exact path='/' Component={AllProducts}></Route>
          <Route exact path='/Cart' Component={Cart}></Route>
          <Route exact path='/AddProduct' Component={AddProduct}></Route>
          
        </Routes>
        <ToastContainer />
      </div>

    </Router>
    
  );
}

export default App;
