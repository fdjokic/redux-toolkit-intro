import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
