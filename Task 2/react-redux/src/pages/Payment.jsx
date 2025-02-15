import { useSelector } from "react-redux";
import { useState } from "react";

const Payment = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [display, setDisplay] = useState("none");
  const [display2, setDisplay2] = useState("none");

  const handleConfirmPayment = () => {
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      alert("Card number must be 16 digits without space");
      setDisplay("block");
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      alert("Date must be in the format MM/YY");
      setDisplay("block");
      return;
    }
    if (!/^\d{3}$/.test(cvv)) {
      alert("CVV must be 3 digits");
      setDisplay("block");
      return;
    }

    setDisplay("none");
    setDisplay2("block");
    dispatch(emptyArr());
    dispatch(emptyTotal());
  };

  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-900 min-h-screen">
      <div className="md:w-1/2 p-6 bg-gray-900 shadow-lg rounded-lg ">
        <h2 className="text-2xl font-semibold mb-4 text-white ">Payment Method</h2>
        <div id="payment-form" className="space-y-4">
          <form className="space-y-4">
            <div>
              <label className="block text-white font-medium">Card Number:</label>
              <input 
                type="text" 
                placeholder="Card Number" 
                id="cardNumber" 
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-white font-medium">Expiry Date (MM/YY):</label>
              <input 
                type="text" 
                placeholder="MM/YY" 
                id="expiryDate" 
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-white font-medium">CVV:</label>
              <input 
                type="text" 
                placeholder="CVV" 
                id="cvv" 
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
          <div className="flex justify-center">
            <button 
              onClick={handleConfirmPayment} 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Confirm Payment
            </button>
          </div>
          <div className="text-center mt-3 text-red-600 font-medium" style={{ display: display }}>
            <h3>Please Enter All The Details Correctly</h3>
          </div>
          <div className="text-center mt-3 text-green-600 font-medium" style={{ display: display2 }}>
            <h3>Your Order has been placed successfully</h3>
          </div>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="md:w-1/2 p-6 bg-gray-900 shadow-lg rounded-lg mt-6 md:mt-0 md:ml-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">Order Summary</h2>
        <div className="space-y-2">
          {cart.map((item) => (
            <div key={item.id} className="border p-3 rounded-lg shadow-sm">
              <h3 className="font-medium text-white">{item.name}</h3>
              <p className="text-white">₹{item.price} x {item.quantity}</p>
            </div>
          ))}
        </div>
        <h2 className="text-xl mt-4 font-semibold text-white">Total: ₹{total}</h2>
      </div>
    </div>
  );
};

export default Payment;
