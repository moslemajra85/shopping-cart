import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <h1>MyStore</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        <FaCartPlus size={30} color="black" />
      </ul>
    </div>
  );
};

export default Navbar;
