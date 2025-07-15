import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <h1 className="navbar-logo">🛍️ MyStore</h1>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            🏠 Home
          </Link>
          <Link to="/about" className="navbar-link">
            ℹ️ About
          </Link>
          <Link to="/cart" className="navbar-link cart-link">
            <FaCartPlus size={20} />
            Cart
          </Link>

          <Link to="/contact" className="navbar-link">
            ✉️
            Contact
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
