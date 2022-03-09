import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContextProvider";

export default function CartWidget() {
  const { GetItemQuantity } = useContext(CartContext);
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} /> {GetItemQuantity()}
    </div>
  );
}
