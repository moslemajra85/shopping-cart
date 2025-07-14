import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <h1>MyStore</h1>
        <FaCartPlus size={30} color="black" />
      </ul>
    </div>
  );
};

export default Navbar;
