// import { createContext, useState } from "react";

// const addCartItem = (cartItems, productToAdd) => {
//   // check if item already exists
//   const existingItem = cartItems.find((item) => item.id === productToAdd);

//   return [...cartItems, productToAdd];
// };

// export const CartContext = createContext({
//   setIsOpen: () => null,
//   isOpen: null,
//   addItemToCart: () => null,
//   cartItems: [],
// });

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [isOpen, setIsOpen] = useState(null);

//   const addItemToCart = (product) => {
//     return setCartItems(addCartItem(cartItems, product));
//   };
//   const value = { isOpen, setIsOpen, cartItems, addItemToCart };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

import { createContext, useState } from "react";

export const CartContext = createContext({
  setIsCartOpen: () => null,
  isCartOpen: null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(null);

  const value = { isCartOpen, setIsCartOpen };

  return <CartContext value={value}> {children}</CartContext>;
};
