import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeFromCart } from "../store/store";
import { Link } from "react-router-dom";

const CartItems = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 ">
      <h2 className="text-2xl mb-4">Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="border p-2 mb-2 flex justify-between items-center">
              <div>
                <h3>{item.name}</h3>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div>
                <button onClick={() => dispatch(increment(item.id))} className="bg-green-500 text-white px-2 py-1">+</button>
                <button onClick={() => dispatch(decrement(item.id))} className="bg-yellow-500 text-white px-2 py-1">-</button>
                <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-red-500 text-white px-2 py-1 ml-2">Remove</button>
              </div>
            </div>
          ))}
          <h2 className="text-xl mt-4">Total: ${total}</h2>
          <Link to="/payment" className="block bg-blue-500 text-white p-2 mt-4">Continue to Payment</Link>
        </>
      )}
    </div>
  );
};

export default CartItems;
