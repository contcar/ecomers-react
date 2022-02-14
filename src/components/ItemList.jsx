import React from "react";
import { Col } from "react-bootstrap";
import Item from "./Item";

export default function ItemList({ items }) {
  return items.map((i) => (
    <Col md="4" className="mt-2 mb-2">
      <Item
        key={i.id}
        title={i.title}
        detail={i.description}
        img={i.pictureURL}
      ></Item>
    </Col>
  ));
}
