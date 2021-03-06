import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cartItems, setCartItems] = useState(defaultValue);

  function AddItem(item, quantity) {
    if (!ItemAlreadyExist(item.id)){
      item = { ...item, quantity: quantity };
      setCartItems([...cartItems, item]);
    }
  }

  function GetItemQuantity(){
    let totalQuantity = 0;
    cartItems.forEach(x => totalQuantity += x.quantity);
    return totalQuantity;
  }

  function GetTotalPrice(){
    let totalPrice = 0;
    cartItems.forEach(x => totalPrice += x.quantity * x.price);
    return totalPrice;
  }

  function RemoveItem(itemId) {
    const indexOfItem = cartItems.findIndex((x) => x.id == itemId);
    const itemsAux = [...cartItems];
    itemsAux.splice(indexOfItem, 1);

    setCartItems(itemsAux);
  }

  function CleareState() {
    setCartItems([]);
  }

  function ItemAlreadyExist(itemId) {
    let response = false;
    const indexOfItem = cartItems.findIndex((x) => x.id == itemId);
    if (indexOfItem != -1) response = true;

    return response;
  }

  return (
    <CartContext.Provider
      value={{ cartItems, AddItem, RemoveItem, CleareState, ItemAlreadyExist, GetItemQuantity, GetTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default { CartContext};
