import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContextProvicer";

export default function CartWidget() {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} /> {cartItems.length}
    </div>
  );
}
