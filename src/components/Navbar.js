import { Link} from "react-router-dom";
import CartCounter from "./CartCounter";
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top">
      <Link to="/" className="navbar-brand">Ecommerce_APP</Link>

      {/* Left side - Product-related links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" >
          <Link to="/" className="nav-link">Home</Link>
          </li>  
          <li className="nav-item">
            <Link to="/AddProduct" className="nav-link">Add Products</Link>
          </li>
         
        </ul>
      </div>

      {/* Right side - Cart link */}
      <div className="ml-auto" style={{margin:"0px,50px", paddingRight:"20px"}}>
        <Link to="/cart" className="btn btn-outline-primary " >Cart:(<CartCounter />)</Link>
      </div>
    </nav>
    )
}

export default Navbar;