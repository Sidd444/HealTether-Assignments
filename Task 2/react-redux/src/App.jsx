import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import CartItems from "./pages/CartItems";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<CartItems />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;