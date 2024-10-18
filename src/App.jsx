import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Product from "./components/Shop/Products";
import Notification from "./components/UI/Notifications";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import { uiActions } from "./store/uiSlice";

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const showCart = useSelector((state) => state.ui.cartVisible);

  useEffect(() => {
    dispatch(fetchCartData(cart));
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification, dispatch]);

  return (
    <Layout>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      {showCart && <Cart />}
      <Product />
    </Layout>
  );
}

export default App;
