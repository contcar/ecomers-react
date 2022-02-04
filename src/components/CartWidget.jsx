import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";

export default function CartWidget() {
  return <FontAwesomeIcon icon={faShoppingCart} />;
}
