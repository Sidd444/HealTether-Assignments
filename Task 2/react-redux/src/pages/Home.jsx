import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/store";
import { clothes } from "../data/clothes";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <div className="w-3/4 p-6">
        <h1 className="text-3xl font-semibold mb-6">Clothing Store</h1>
        <div className="grid grid-cols-2 gap-6">
          {clothes.map((item) => (
            <div key={item.id} className="border border-gray-700 p-6 rounded-lg bg-gray-800">
              <h2 className="text-2xl font-medium">{item.name}</h2>
              <p className="text-gray-400">{item.description}</p>
              <p className="text-xl font-semibold">₹{item.price}</p>
              <button onClick={() => dispatch(addToCart(item))} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/4 p-6 border-l border-gray-700">
        <h2 className="text-2xl font-semibold mb-6">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="border border-gray-700 p-4 mb-4 rounded-lg bg-gray-800">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-400">₹{item.price} x {item.quantity}</p>
              <button onClick={() => dispatch(addToCart(item))} className="mt-2 bg-green-600 text-white text-2xl px-4 py-2 rounded-lg w-10 m-2">+</button>
              <button onClick={() => dispatch(decrement(item.id))} className="mt-2 bg-yellow-600 text-white text-2xl px-4 py-2 rounded-lg w-10 m-2">-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-red-500 text-white m-2 px-2 py-1 ml-2">Remove From Cart</button>
            </div>
          ))
        )}
        <Link to="/payment" className="block bg-blue-600 text-white text-center py-4 mt-6 rounded-lg">Continue to Payment</Link>
      </div>
    </div>
  );
};

export default Home;
