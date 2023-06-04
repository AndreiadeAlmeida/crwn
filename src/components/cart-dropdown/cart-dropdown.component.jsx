import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => cartItem.name)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
