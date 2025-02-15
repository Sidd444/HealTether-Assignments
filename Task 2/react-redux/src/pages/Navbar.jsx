import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartLength = useSelector((state) => state.cart.length);

  return (
    <nav className="bg-gray-800 text-white flex justify-between p-4">
      <Link to="/" className="text-xl bg-blue-500 px-3 py-1 rounded">
         Home
      </Link>
      <div className="flex items-center gap-10 bg-blue-500 px-3 py-1 rounded">
        <Link to="/payment" className="bg-blue-500 px-3 py-1 rounded">
          Payment
        </Link>
        <Link to="/cart" className="bg-blue-500 px-3 py-1 rounded">
          Cart Items
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
